import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";

/**
 * Generated class for the RandomActivitiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-random-activities',
  templateUrl: 'random-activities.html',
})
export class RandomActivitiesPage {
  activities: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private activityProvider: ActivityProvider) {

    this.activityProvider.getAllActivities().subscribe(activities => {
      this.activities = activities;
    });
  }

  ionViewDidLoad() {
  }

}
