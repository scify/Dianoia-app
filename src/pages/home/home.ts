import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {LoaderService} from "../../providers/loader-service/loader-service";
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = "RandomActivitiesPage";
  tab2Root = "RandomActivitiesPage";

  activities: any[];

  constructor(public navCtrl: NavController, private activityProvider: ActivityProvider,
              private loaderService: LoaderService, private activityCategoryProvider: ActivityCategoryProvider) {
    activityProvider.getNumberOfActivitiesForLastMonth().then(numberOfDays => {
      console.log(numberOfDays.filter(checkAdult).length);
    });

    function checkAdult(item) {
      return item == "true";
    }

    this.loaderService.showLoader();

      this.activityCategoryProvider.getActivitiesForCategory("common_activities").subscribe(activityIds => {
        console.log(activityIds);
        this.activityProvider.getActivitiesByIds(activityIds).subscribe(activities => {
          this.activities = activities;
          this.loaderService.hideLoader();
        });
      });

  }

  selectActivity(activity) {
    // let nav = this.app.getRootNav();
    // nav.push("ActivityPage", {activity: activity});
    this.navCtrl.push("ActivityPage", {activity: activity});
  }

}
