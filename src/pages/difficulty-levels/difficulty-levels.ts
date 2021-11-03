import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private loaderService: LoaderService,
              public events: Events, public translate: TranslateService,
              public platform: Platform, private difficultyLevelProvider: DifficultyLevelProvider,
              private activityCategoryProvider: ActivityCategoryProvider,
              private activityProvider: ActivityProvider) {

    this.categoryId = this.navParams.get("categoryId");
  }

  ionViewWillLoad() {
    this.events.subscribe('lang_ready', (langCode) => {
      this.setUpPageElements();
    });
    this.platform.ready().then(() => {
      this.translate.get('app_name').subscribe(() => {
        this.setUpPageElements();
        this.loaderService.hideLoader();
      });
    });
  }

  ionViewWillUnload() {
    this.events.unsubscribe('lang_ready');
  }

  setUpPageElements() {
    this.pageTitle = this.translate.instant('activities_exercises');
    if (this.categoryId == null)
      return this.navCtrl.setRoot("HomePage");

    this.activityCategoryProvider.getActivitiesForCategory(this.categoryId).subscribe(activitiesIds => {
      if (activitiesIds != null) {
        this.activityProvider.getActivitiesByIds(activitiesIds).then(activities => {
          this.allActivities = activities;
          this.activities = activities;
          this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities).then(difficultyLevels => {
            this.levels = difficultyLevels;
            this.levels.unshift({id: "0", title: this.translate.instant('all_difficulty_levels')});
            this.pageTitle = this.category != null ? this.category.title : this.translate.instant('activities_exercises');
            this.loaderService.hideLoader();
          });
        }, error => {
          this.handleError(error);
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
    this.navCtrl.push("ActivityPage", {activity: activity, allActivities: this.activities, uniqueId: 'id'});
  }

  goToHome() {
    this.navCtrl.setRoot('HomePage');
  }

  handleError(error) {
    console.error(error);
    this.loaderService.hideLoader();
  }
}
