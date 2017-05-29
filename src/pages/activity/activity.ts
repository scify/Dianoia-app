import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Printer, PrintOptions } from '@ionic-native/printer';

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
              private activityProvider: ActivityProvider, private iab: InAppBrowser, private platform: Platform,
              private printer: Printer) {
    let activityObj = this.navParams.get("activity");
    if(activityObj == null) {
      this.activityProvider.getRandomActivity().then(randomActivity => {
        this.activity = randomActivity;
      });
    } else {
      this.activity = activityObj;
    }

    console.log("checking for printer");
    this.printer.isAvailable().then(value => {
      console.log("isAvailable", value);

      let options: PrintOptions = {
        name: 'MyDocument',
        printerId: 'printer007',
        duplex: true,
        landscape: true,
        grayscale: true
      };

      let onSuccess = function () {
        console.log("onSuccess!");
      };

      let onError = function () {
        console.log("onError!");
      };
      this.printer.print("123123", options).then(onSuccess, onError);

    }).catch(error => {
      // cordova_not_available
      console.log("ERROR");
      console.log(error);
    });
  }

  openLink(url) {
    this.iab.create(url);
  }



}
