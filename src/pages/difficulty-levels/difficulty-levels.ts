import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {LoaderService} from "../../providers/loader-service/loader-service";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private categoryProvider: ActivityCategoryProvider, private loaderService: LoaderService) {

    this.categoryId = this.navParams.get("categoryId");
    this.allActivities = this.navParams.get("activities");
    this.activities = this.navParams.get("activities");
    this.loaderService.hideLoader();
    if (this.categoryId == null) {
      this.navCtrl.setRoot("HomePage");
    } else {
      this.levels = this.navParams.get("levels");
      this.levels.unshift({id: "0", title: "Όλα τα επίπεδα"});
    }
  }

  getPageTitle() {
    return this.category != null ? this.category.title : "Δραστηριότητες";
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
