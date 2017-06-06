import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {LocalNotifications} from "@ionic-native/local-notifications";
import {AppStorageProvider} from "../app-storage/app-storage";
import {Platform} from "ionic-angular";

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NotificationProvider {

  constructor(private localNotifications: LocalNotifications, private appStorage: AppStorageProvider, private platform: Platform) {
  }

  public scheduleNextNotification() {
    this.appStorage.get('notification_frequency').then(frequency => {
      console.log("frequency: " + frequency);
      let date = new Date();
      let title = "";
      let text = "";
      frequency = null;
      switch (frequency) {
        case null:
          date.setMinutes(date.getDay() + 1);
          this.scheduleNotificationFor(date, title, text, 'day');
          break;
        case 'every_day':
          date.setMinutes(date.getDay() + 1);
          this.scheduleNotificationFor(date, title, text, 'day');
          break;
        case 'every_week':
          date.setMinutes(date.getDay() + 7);
          this.scheduleNotificationFor(date, title, text, 'week');
          break;
        case 'every_month':
          date.setMinutes(date.getMonth() + 1);
          this.scheduleNotificationFor(date, title, text, 'month');
          break;
        case 'never':
          break;
        default:
          date.setMinutes(date.getMinutes() + 1);
          this.scheduleNotificationFor(date, title, text, 'minute');
          break;
      }

    })
  }

  public scheduleNotificationFor(date: Date, title: string, text: string, every?) {
    console.log("Scheduling notification for: " + date);
    this.localNotifications.cancelAll().then(result => {

      this.appStorage.set('notifications_scheduled', true);

      this.localNotifications.schedule({
        text: text,
        title: title,
        at: date,
        led: 'FF0000',
        every: every
      });
    });

  }

  public listenForNotificationClicks() {
    this.localNotifications.on("click", (notification, state) => {
      console.log("notification clicked: ", notification);
      console.log("notification state: ", state);
      this.scheduleNextNotification();
    });
  }

}
