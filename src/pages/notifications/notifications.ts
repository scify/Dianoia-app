import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AppStorageProvider} from "../../providers/app-storage/app-storage";
import {AlertProvider} from "../../providers/alert/alert";
import {NotificationProvider} from "../../providers/notification/notification";

/**
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  notificationOptions: any;
  selectedNotificationId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private platform: Platform, private appStorage: AppStorageProvider, private alert: AlertProvider, private localNotifications: NotificationProvider) {
    this.notificationOptions = [
      {title: "Κάθε μέρα", id: 'every_day'},
      {title: "Μια φορά την εβδομάδα", id: 'every_week'},
      {title: "Μια φορά το μήνα", id: 'every_month'},
      {title: "Να μην έρχονται ειδοποιήσεις", id: 'never'}
    ];
    this.selectedNotificationId = 'every_day';
    this.appStorage.get('notification_frequency').then(frequencyId => {
      if(JSON.parse(frequencyId)) {
        console.log("frequency: ", JSON.parse(frequencyId));
        this.selectedNotificationId = JSON.parse(frequencyId);
      }
    })
  }

  saveNotificationSettings() {
    console.log(this.selectedNotificationId);
    if(this.selectedNotificationId) {
      this.appStorage.set('notification_frequency', this.selectedNotificationId).then(result => {
        if(this.platform.is('cordova')) {
          this.localNotifications.scheduleNextNotification();
        }
        if (this.platform.is('cordova'))
          this.alert.displayToast("Οι ρυθμίσεις αποθηκεύτηκαν.");
      });
    } else {
      if (this.platform.is('cordova')) {
        this.alert.displayToast("Πρέπει να δηλώσετε κάποια επιλογή");
      } else {
        alert("Πρέπει να δηλώσετε κάποια επιλογή");
      }
    }
  }


}
