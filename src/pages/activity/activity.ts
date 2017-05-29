import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  activity: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private activityProvider: ActivityProvider, private iab: InAppBrowser, private platform: Platform) {
    let activityObj = this.navParams.get("activity");
    if(activityObj == null) {
      this.activityProvider.getRandomActivity().then(randomActivity => {
        this.activity = randomActivity;
      });
    } else {
      this.activity = activityObj;
    }
  }

  openLink(url) {
    this.iab.create(url);
  }

}
