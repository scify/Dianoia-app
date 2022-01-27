import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AppStorageProvider} from "../../providers/app-storage/app-storage";
import {AlertProvider} from "../../providers/alert/alert";
import {NotificationProvider} from "../../providers/notification/notification";
import {TranslateService} from "@ngx-translate/core";

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  notificationOptions: any;
  selectedNotificationId: string;
  authMode: false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public platform: Platform, private appStorage: AppStorageProvider,
              private alert: AlertProvider, private localNotifications: NotificationProvider,
              private translate: TranslateService, private alertController: AlertController) {

    this.selectedNotificationId = 'every_day';
    this.appStorage.get('notification_frequency').then(frequencyId => {
      if (JSON.parse(frequencyId)) {
        this.selectedNotificationId = JSON.parse(frequencyId);
      }
    })
    this.translate.onLangChange.subscribe(() => {
      this.setUpPageElements();
    });

  }

  ionViewWillLoad() {
    this.setUpPageElements();
  }

  setUpPageElements() {
    this.notificationOptions = [
      {title: this.translate.instant('every_day'), id: 'every_day'},
      {title: this.translate.instant('every_week'), id: 'every_week'},
      {title: this.translate.instant('every_month'), id: 'every_month'},
      {title: this.translate.instant('no_notifications'), id: 'never'}
    ];
    this.appStorage.get('auth_mode').then(authMode => {
      if (JSON.parse(authMode)) {
        this.authMode = JSON.parse(authMode);
      }
    })
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

  authModeChanged(event) {
    this.authMode = event.value;
    this.appStorage.set('auth_mode', this.authMode);
    if (this.authMode) {
      let alert = this.alertController.create({
        mode: 'ios',
        title: this.translate.instant("mode_enabled_title"),
        message: this.translate.instant("mode_enabled_text"),
        buttons: [
          {
            text: 'OK',
            handler: () => {
              window.location.hash = "";
              window.location.reload();
            }
          }]
      });

      alert.present();
    }
  }

}
