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

    this.loaderService.showLoader();

      this.activityCategoryProvider.getActivitiesForCategory("common_activities").subscribe(activityIds => {
        console.log(activityIds);
        this.activityProvider.getActivitiesByIds(this.shuffle(activityIds)).subscribe(activities => {
          this.activities = activities;
          this.loaderService.hideLoader();
        });
      });

  }

  selectActivity(activity) {
    this.navCtrl.push("ActivityPage", {activity: activity});
  }

  shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

}
