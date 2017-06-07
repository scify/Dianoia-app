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

  notificationTitles: [string];
  notificationTexts: [string];

  constructor(private localNotifications: LocalNotifications, private appStorage: AppStorageProvider, private platform: Platform) {
    this.notificationTitles = ["Τι να κάνετε σήμερα:", "Σημερινή δραστηριότητα:"];

    this.notificationTexts = ["- Κάντε δουλειές στο σπίτι.", "- Πηγαίνετε μαζί για ψώνια.",
      "- Κάντε μια συναλλαγή σε δημόσια υπηρεσία.", "- Συζητήστε ένα επίκαιρο θέμα.",
      "- Μοιραστείτε ευχάριστες αναμνήσεις.", "- Δείτε ένα φωτογραφικό άλμπουμ.", "- Ακούστε αγαπημένα τραγούδια.",
      "- Ασχοληθείτε με ένα αγαπημένο χόμπι.", "- Διαβάστε ένα βιβλίο ή εφημερίδα.", "- Παίξτε ένα επιτραπέζιο παιχνίδι.",
      "- Παίξτε κρεμάλα ή τρίλιζα.", "- Παρακολουθήστε ένα τηλεπαιχνίδι γνώσεων και απαντήστε μαζί τις ερωτήσεις.",
      "-  Παρακολουθήστε τις ειδήσεις και σχολιάστε την επικαιρότητα.", "- Καταγράψτε αναμνήσεις και εμπειρίες.",
      "- Πηγαίνετε μια εκδρομή.", "- Κάντε ένα περίπατο."]
  }

  public scheduleNextNotification() {
    this.appStorage.get('notification_frequency').then(data => {
      let frequency = JSON.parse(data);
      console.log("frequency: " + frequency);
      let date = new Date();
      let title = "Δι-Άνοια - " + this.randomArrayElement(this.notificationTitles);
      let text = this.randomArrayElement(this.notificationTexts);
      switch (frequency) {
        case 'every_day':
          date.setDate(date.getDay() + 1);
          this.scheduleNotificationFor(date, title, text, 'day');
          break;
        case 'every_week':
          date.setDate(date.getDay() + 7);
          this.scheduleNotificationFor(date, title, text, 'week');
          break;
        case 'every_month':
          date.setMonth(date.getMonth() + 1);
          this.scheduleNotificationFor(date, title, text, 'month');
          break;
        case 'never':
          break;
        case null:
          date.setDate(date.getDay() + 1);
          this.scheduleNotificationFor(date, title, text, 'day');
          break;
        default:
          date.setDate(date.getDay() + 1);
          this.scheduleNotificationFor(date, title, text, 'day');
          break;
      }

    })
  }

  public scheduleNotificationFor(date: Date, title: string, text: string, every?) {
    console.log("Scheduling notification for: " + date + " every: " + every);
    console.log("Notification title: ", title);
    console.log("Notification text: ", text);

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

  private randomArrayElement(items: [any]): any {
    return items[Math.floor(Math.random()*items.length)];
  }

}
