import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AppStorageProvider} from "../../providers/app-storage/app-storage";
import {AlertProvider} from "../../providers/alert/alert";
import {NotificationProvider} from "../../providers/notification/notification";
import {TranslateService} from "@ngx-translate/core";

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
              public platform: Platform, private appStorage: AppStorageProvider,
              private alert: AlertProvider, private localNotifications: NotificationProvider,
              private translate: TranslateService, public events: Events) {

    this.selectedNotificationId = 'every_day';
    this.appStorage.get('notification_frequency').then(frequencyId => {
      if (JSON.parse(frequencyId)) {
        this.selectedNotificationId = JSON.parse(frequencyId);
      }
    })
  }

  ionViewWillLoad() {
    this.events.subscribe('lang_ready', (langCode) => {
      this.setUpPageElements();
    });
    this.platform.ready().then(() => {
      this.translate.get('app_name').subscribe(() => {
        this.setUpPageElements();
      });
    });
  }

  ionViewWillUnload() {
    this.events.unsubscribe('lang_ready');
  }

  setUpPageElements() {
    this.notificationOptions = [
      {title: this.translate.instant('every_day'), id: 'every_day'},
      {title: this.translate.instant('every_week'), id: 'every_week'},
      {title: this.translate.instant('every_month'), id: 'every_month'},
      {title: this.translate.instant('no_notifications'), id: 'never'}
    ];
  }

  saveNotificationSettings() {
    if (this.selectedNotificationId) {
      this.appStorage.set('notification_frequency', this.selectedNotificationId).then(result => {
        if (this.platform.is('cordova')) {
          this.localNotifications.scheduleNextNotification();
        }
        if (this.platform.is('cordova'))
          this.alert.displayToast(this.translate.instant('settings_saved'));
      });
    } else {
      if (this.platform.is('cordova')) {
        this.alert.displayToast(this.translate.instant('please_select'));
      } else {
        alert(this.translate.instant('please_select'));
      }
    }
  }


}
