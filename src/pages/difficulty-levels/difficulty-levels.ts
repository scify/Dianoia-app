import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {LoaderService} from "../../providers/loader-service/loader-service";
import {TranslateService} from "@ngx-translate/core";

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
              private categoryProvider: ActivityCategoryProvider, private loaderService: LoaderService,
              public platform: Platform, public translate: TranslateService) {

    this.categoryId = this.navParams.get("categoryId");
    this.allActivities = this.navParams.get("activities");
    this.activities = this.navParams.get("activities");
    this.loaderService.hideLoader();
    this.platform.ready().then(() => {
      this.translate.get('app_name').subscribe((translated: string) => {
        this.setUpPageElements();
      });
    });

  }

  setUpPageElements() {
    if (this.categoryId == null) {
      this.navCtrl.setRoot("HomePage");
    } else {
      this.levels = this.navParams.get("levels");
      this.levels.unshift({id: "0", title: this.translate.instant('all_difficulty_levels')});
    }
    this.pageTitle = this.category != null ? this.category.title : this.translate.instant('activities_exercises');
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


}
