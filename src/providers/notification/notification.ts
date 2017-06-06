import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {LocalNotifications} from "@ionic-native/local-notifications";
import {AppStorageProvider} from "../app-storage/app-storage";

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NotificationProvider {

  constructor(private localNotifications: LocalNotifications, private appStorage: AppStorageProvider) {
  }

  public scheduleNextNotification(title: string, text: string) {
    this.appStorage.get('notification_frequency').then(frequency => {
      console.log("frequency: " + frequency);
      let date = new Date();
      switch (frequency) {
        case null:
          date.setMinutes(date.getDay() + 1);
          this.scheduleNotificationFor(date, title, text);
          break;
        case 'every_day':
          date.setMinutes(date.getDay() + 1);
          this.scheduleNotificationFor(date, title, text);
          break;
        case 'every_3_days':
          date.setMinutes(date.getDay() + 3);
          this.scheduleNotificationFor(date, title, text);
          break;
        case 'every_week':
          date.setMinutes(date.getDay() + 7);
          this.scheduleNotificationFor(date, title, text);
          break;
        case 'every_2_weeks':
          date.setMinutes(date.getDay() + 14);
          this.scheduleNotificationFor(date, title, text);
          break;
        case 'every_month':
          date.setMinutes(date.getMonth() + 1);
          this.scheduleNotificationFor(date, title, text);
          break;
        case 'never':
          break;
        default:
          date.setMinutes(date.getMinutes() + 1);
          this.scheduleNotificationFor(date, title, text);
          break;
      }

    })
  }

  public scheduleNotificationFor(date: Date, title: string, text: string) {
    console.log("Scheduling notification for: " + date);
    this.localNotifications.cancelAll().then(result => {
      this.localNotifications.schedule({
        text: text,
        title: title,
        at: date,
        led: 'FF0000'
      });
    });

  }

}
