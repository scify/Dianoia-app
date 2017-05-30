import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Printer, PrintOptions } from '@ionic-native/printer';
import {AlertProvider} from "../../providers/alert/alert";

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
  dailyActivityCompleted: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private activityProvider: ActivityProvider, private iab: InAppBrowser, private platform: Platform,
              private printer: Printer, private alert: AlertProvider) {
    let activityObj = this.navParams.get("activity");
    if(activityObj == null) {
      this.activityProvider.getRandomActivity().then(randomActivity => {
        this.activity = randomActivity;
      });
    } else {
      this.activity = activityObj;
    }

    this.activityProvider.userHasCompletedActivityForToday().then(activityDone => {

      // activityDone == null ? this.dailyActivityCompleted = false : this.dailyActivityCompleted = true;
    });

    console.log(platform.is('core'));
  }

  activityDoneForToday() {
    this.activityProvider.setActivityCompletedForToday().then(result => {
      this.dailyActivityCompleted = true;
      if(!this.platform.is('core')) {
        this.alert.displayToast("Η άσκηση για σήμερα καταγράφηκε");
      }
    });
  }

  openLink(url) {
    this.iab.create(url);
  }

  print() {
    console.log("checking for printer");
    this.printer.isAvailable().then(isAvailable => {
      console.log("isAvailable", isAvailable);
      if(isAvailable) {
        this.pickPrinter();
      } else {
        this.printerNotAvailable();
      }
    });
  }

  pickPrinter() {
    console.log("pickPrinter");
    this.printer.pick().then(result => {
      if(result !== null)
        this.alert.displayToast("Printing option selected");
    });
  }

  printerNotAvailable() {
    console.log("printer not available");
    this.alert.textDialog("Printer", "Δεν βρέθηκε εκτυπωτής στο τοπικό δίκτυο");
  }

  printSuccess() {
    console.log("document sent to printer");
  }

  printError() {
    console.log("print error");
    this.alert.textDialog("Printer error", "Συνέβη ένα σφάλμα κατά την εκτύπωση");
  }

  printActivityDoc() {
    console.log("ready to print");
    let options: PrintOptions = {
      name: this.activity.title,
      duplex: true,
      landscape: false,
      grayscale: true
    };
    this.printer.print(this.activity.title, options).then(this.printSuccess, this.printError);
  }

}
