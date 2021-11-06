import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {LocalNotifications} from '@ionic-native/local-notifications';
import {AppStorageProvider} from "../app-storage/app-storage";
import {Events} from "ionic-angular";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {ApiCallsProvider} from "../api-calls/api-calls";
import {TranslateService} from "@ngx-translate/core";

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NotificationProvider {

  notificationTitles: string[] = [];
  notificationTexts: string[] = [];

  constructor(private localNotifications: LocalNotifications, private appStorage: AppStorageProvider,
              public http: Http, private apiCalls: ApiCallsProvider,
              public events: Events, public translate: TranslateService) {
    this.events.subscribe('lang_ready', (langCode) => {
      this.getAllNotifications(langCode).subscribe((data) => {
        this.notificationTitles = data.titles;
        this.notificationTexts = data.texts;
        this.scheduleNextNotification();
      });
    });
  }

  public getAllNotifications(langCode): Observable<any> {
    return this.apiCalls.getHttpCall("notifications_" + langCode, () => {
      return this.http.get("assets/data_DB/" + langCode + "/notifications/notifications.json")
        .map(res => res.json());
    });
  }

  public scheduleNextNotification() {
    this.appStorage.get('notification_frequency').then(data => {
      let frequency = JSON.parse(data);
      console.log("frequency: " + frequency);
      let date = new Date();
      console.log("initial date:", date);
      let title = this.translate.instant('app_name') + " - " + NotificationProvider.randomArrayElement(this.notificationTitles);
      let text = "- " + NotificationProvider.randomArrayElement(this.notificationTexts);
      switch (frequency) {
        case 'every_day':
          date.setDate(date.getDate() + 1);
          this.scheduleNotificationFor(date, title, text, 'day');
          break;
        case 'every_week':
          date.setDate(date.getDate() + 7);
          this.scheduleNotificationFor(date, title, text, 'week');
          break;
        case 'every_month':
          date.setMonth(date.getMonth() + 1);
          this.scheduleNotificationFor(date, title, text, 'month');
          break;
        case 'never':
          break;
        case null:
          date.setDate(date.getDate() + 1);
          this.scheduleNotificationFor(date, title, text, 'day');
          break;
        default:
          date.setDate(date.getDate() + 1);
          this.scheduleNotificationFor(date, title, text, 'day');
          break;
      }

    })
  }

  public scheduleNotificationFor(date: Date, title: string, text: string, every?, setHour: boolean = true) {

    //notification set for 11:00 AM.
    if (setHour) {
      date.setHours(11);
      date.setMinutes(0);
    }

    console.log("Scheduling notification for " + date + " every: " + every);
    console.log("Notification title: ", title);
    console.log("Notification text: ", text);
    let options = {
      text: text,
      title: title,
      trigger: {at: date}
    };

    this.localNotifications.schedule(options);
  }

  public listenForNotificationClicks() {
    this.localNotifications.on("click").subscribe(notification => {
      this.scheduleNextNotification();
    });
  }

  private static randomArrayElement(items: string[]): string {
    return items[Math.floor(Math.random() * items.length)];
  }

}
