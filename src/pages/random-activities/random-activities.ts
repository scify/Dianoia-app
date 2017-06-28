import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {LoaderService} from "../../providers/loader-service/loader-service";

@IonicPage()
@Component({
  selector: 'page-random-activities',
  templateUrl: 'random-activities.html',
})
export class RandomActivitiesPage {
  activities: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private app: App, private activityProvider: ActivityProvider,
              private loaderService: LoaderService) {

    this.loaderService.showLoader();
    this.activityProvider.getAllActivities().subscribe(activities => {
      this.activities = activities;
      this.loaderService.hideLoader();
    });
  }

  ionViewDidLoad() {
  }

  selectActivity(activity) {
    this.navCtrl.push("ActivityPage", {activity: activity});
  }

}
