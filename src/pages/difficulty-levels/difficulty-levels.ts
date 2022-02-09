import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {LoaderService} from "../../providers/loader-service/loader-service";
import {TranslateService} from "@ngx-translate/core";
import {DifficultyLevelProvider} from "../../providers/difficulty-level/difficulty-level";
import {ActivityProvider} from "../../providers/activity/activity";

@IonicPage()
@Component({
  selector: 'page-difficulty-levels',
  templateUrl: 'difficulty-levels.html',
})
export class DifficultyLevelsPage {
  levels: any[];
  allActivities: any[];
  activities: any[];
  categoryId: string;
  category: any;
  pageTitle: string = '';
  setUpInProgress: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private loaderService: LoaderService,
              public translate: TranslateService, public platform: Platform,
              private difficultyLevelProvider: DifficultyLevelProvider,
              private activityCategoryProvider: ActivityCategoryProvider,
              private activityProvider: ActivityProvider) {

    this.categoryId = this.navParams.get("categoryId");
    this.translate.onLangChange.subscribe(() => {
      this.setUpPageElements();
    });
  }

  ionViewDidEnter() {
    this.setUpPageElements();
  }

  setUpPageElements() {
    if (this.setUpInProgress)
      return;
    this.setUpInProgress = true;
    if (this.categoryId == null)
      return this.navCtrl.setRoot("HomePage");

    this.activityCategoryProvider.getActivitySlugsForCategory(this.categoryId).subscribe(async activitySlugs => {
      if (activitySlugs != null) {
        const activities = await this.activityProvider.getActivitiesBySlugs(activitySlugs);
        try {
          const category = await this.activityCategoryProvider.getCategoryBySlug(this.categoryId);
          if (category)
            this.category = category;
          console.log(this.category);
        } catch (e) {
          console.error(e);
        }
        this.allActivities = activities;
        this.activities = activities;
        this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities).then(difficultyLevels => {
          this.levels = difficultyLevels;
          this.levels.unshift({id: "0", title: this.translate.instant('all_difficulty_levels')});
          this.pageTitle = this.category != null ? this.category.title : '';
          this.loaderService.hideLoader();
          this.setUpInProgress = false;
        });

      }
    }, error => {
      this.handleError(error);
    });

  }

  selectLevel(levelButton: any): any {
    if (levelButton.id == 0) {
      this.activities = this.allActivities;
    } else {
      this.activities = [];
      for (let activity of this.allActivities) {
        if (activity.difficulty_level_id == levelButton.id) {
          this.activities.push(activity);
        }
      }
    }

  }

  selectActivity(activity: any) {
    this.navCtrl.push("activity-page", {
      lang: this.translate.currentLang,
      slug: activity.slug,
      activity: activity,
      allActivities: this.activities
    });
  }

  goToHome() {
    this.navCtrl.setRoot('HomePage');
  }

  handleError(error) {
    console.error(error);
    this.loaderService.hideLoader();
  }
}
