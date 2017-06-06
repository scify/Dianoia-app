import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Printer, PrintOptions } from '@ionic-native/printer';
import {AlertProvider} from "../../providers/alert/alert";
import {SocialSharing} from "@ionic-native/social-sharing";
import {NotificationProvider} from "../../providers/notification/notification";

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
              private printer: Printer, private alert: AlertProvider, private socialSharing: SocialSharing,
              private notificationProvider: NotificationProvider) {
    let activityObj = this.navParams.get("activity");
    console.log("activityObj", activityObj);
    if(!activityObj) {
      this.activityProvider.getRandomActivity().then(randomActivity => {
        this.activity = randomActivity;
      });
    } else {
      this.activity = activityObj;
    }

    this.activityProvider.userHasCompletedActivityForToday().then(activityDone => {

      // activityDone == null ? this.dailyActivityCompleted = false : this.dailyActivityCompleted = true;
    });

    console.log(platform.is('cordova'));

    if(platform.is('cordova')) {
      this.scheduleNextNotification();
    }
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

  private share(activity) {
    var options = {
      message: 'ΔιΆνοια - δραστηριότητα: ' + activity.title + "    ",
      subject: 'ΔιΆνοια - δραστηριότητα: ' + activity.title,
      url: activity.link,
      chooserTitle: 'Κοινοποίηση με...'
    };

    this.socialSharing.shareWithOptions(options).then(result => {
      console.log(result);
      // if(result.completed)
        this.alert.displayToast("Η δραστηριοτητα κοινοποιηθηκε");
    }).catch(error => {
      this.alert.textDialog("Error", "Αυτή η συσκευή δεν υποστηρίζει κοινοποίηση");
    });
  }

  private scheduleNextNotification() {
    this.notificationProvider.scheduleNextNotification("Δι-Άνοια", "Η επόμενη δραστηριότητα είναι έτοιμη!");
  }


}
