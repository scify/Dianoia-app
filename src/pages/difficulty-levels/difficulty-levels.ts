import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {LoaderService} from "../../providers/loader-service/loader-service";

/**
 * Generated class for the DifficultyLevelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
              private categoryProvider: ActivityCategoryProvider,  private loaderService: LoaderService) {

    this.categoryId = this.navParams.get("categoryId");
    this.allActivities = this.navParams.get("activities");
    this.activities = this.allActivities;
    // this.loaderService.showLoader();

    // if(this.levels == null) {
    //   this.navCtrl.setRoot("HomePage");
    // } else {
    //   this.levels.unshift({id: "0", title: "Όλα τα επίπεδα"});
    // }
    this.categoryProvider.getCategoryById(this.categoryId).then(category => {
      this.category = category;
      if (!this.category.has_difficulty_levels) {
        this.levels = [];
      } else {
        this.levels = this.navParams.get("levels");
        this.levels.unshift({id: "0", title: "Όλα τα επίπεδα"});
      }
      this.loaderService.hideLoader();
    });
  }

  getPageTitle() {
    return this.category != null ?  this.category.title : "Δραστηριότητες";
  }

  selectLevel(levelButton: any):any {
    if(levelButton.id == 0) {
      this.activities = this.allActivities;
    } else {
      this.activities = [];
      for(let activity of this.allActivities) {
        if(activity.difficulty_level_id == levelButton.id) {
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
