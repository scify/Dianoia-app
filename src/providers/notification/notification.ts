import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { LocalNotifications } from '@ionic-native/local-notifications';
import {AppStorageProvider} from "../app-storage/app-storage";
import {Platform} from "ionic-angular";

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NotificationProvider {

  notificationTitles: [any];
  notificationTexts: [any];

  constructor(private localNotifications: LocalNotifications, private appStorage: AppStorageProvider, private platform: Platform) {
    this.notificationTitles = ["Τι να κάνετε σήμερα:", "Σημερινή δραστηριότητα:"];

    this.notificationTexts = ["- Κάντε δουλειές στο σπίτι.", "- Πηγαίνετε μαζί για ψώνια.",
      "- Κάντε μια συναλλαγή σε δημόσια υπηρεσία.", "- Συζητήστε ένα επίκαιρο θέμα.",
      "Το Σχολείο Φοροντιστών ξεκίνησε! Παρακολουθήστε το ΔΩΡΕΑΝ. Καλέστε στο 2107013271 για πληροφορίες και δηλώσεις συμμετοχής.",
      "Το Σχολείο Φοροντιστών ξεκίνησε! Παρακολουθήστε το ΔΩΡΕΑΝ. Καλέστε στο 2107013271 για πληροφορίες και δηλώσεις συμμετοχής.",
      "Το Σχολείο Φοροντιστών ξεκίνησε! Παρακολουθήστε το ΔΩΡΕΑΝ. Καλέστε στο 2107013271 για πληροφορίες και δηλώσεις συμμετοχής.",
      "Το Σχολείο Φοροντιστών ξεκίνησε! Παρακολουθήστε το ΔΩΡΕΑΝ. Καλέστε στο 2107013271 για πληροφορίες και δηλώσεις συμμετοχής.",
      "Το Σχολείο Φοροντιστών ξεκίνησε! Παρακολουθήστε το ΔΩΡΕΑΝ. Καλέστε στο 2107013271 για πληροφορίες και δηλώσεις συμμετοχής.",
      "Το Σχολείο Φοροντιστών ξεκίνησε! Παρακολουθήστε το ΔΩΡΕΑΝ. Καλέστε στο 2107013271 για πληροφορίες και δηλώσεις συμμετοχής.",
      "Το Σχολείο Φοροντιστών ξεκίνησε! Παρακολουθήστε το ΔΩΡΕΑΝ. Καλέστε στο 2107013271 για πληροφορίες και δηλώσεις συμμετοχής.",
      "Το Σχολείο Φοροντιστών ξεκίνησε! Παρακολουθήστε το ΔΩΡΕΑΝ. Καλέστε στο 2107013271 για πληροφορίες και δηλώσεις συμμετοχής.",
      "Το Σχολείο Φοροντιστών ξεκίνησε! Παρακολουθήστε το ΔΩΡΕΑΝ. Καλέστε στο 2107013271 για πληροφορίες και δηλώσεις συμμετοχής.",
      "Το Σχολείο Φοροντιστών ξεκίνησε! Παρακολουθήστε το ΔΩΡΕΑΝ. Καλέστε στο 2107013271 για πληροφορίες και δηλώσεις συμμετοχής.",
      "- Μοιραστείτε ευχάριστες αναμνήσεις.", "- Δείτε ένα φωτογραφικό άλμπουμ.", "- Ακούστε αγαπημένα τραγούδια.",
      "- Ασχοληθείτε με ένα αγαπημένο χόμπι.", "- Διαβάστε ένα βιβλίο ή εφημερίδα.", "- Παίξτε ένα επιτραπέζιο παιχνίδι.",
      "- Παίξτε κρεμάλα ή τρίλιζα.", "- Παρακολουθήστε ένα τηλεπαιχνίδι γνώσεων και απαντήστε μαζί τις ερωτήσεις.",
      "-  Παρακολουθήστε τις ειδήσεις και σχολιάστε την επικαιρότητα.", "- Καταγράψτε αναμνήσεις και εμπειρίες.",
      "- Πηγαίνετε μια εκδρομή.", "- Κάντε ένα περίπατο.", "- Επιλέξτε ευχάριστες δραστηριότητες", "- Ενθαρρύνετε τη συμμετοχή σε καθημερινές δραστηριότητες",
      "- Επιλέξτε την κατάλληλη ώρα για κάθε δραστηριότητα", "- Σταματήστε τη δραστηριότητα όταν χάνει το ενδιαφέρον του", "- Προτείνετε εξατομικευμένες δραστηριότητες",
      "- Ενθαρρύνετε την ανεξαρτησία του", "- Επιλέξτε από κοινού δραστηριότητες", "- Παρακινήστε να αρχίσει τη δραστηριότητα", "- Προσφέρετε συνεχή υποστήριξη",
      "- Επιβλέψτε τον διακριτικά", "- Χωρίστε τη δραστηριότητα σε βήματα", "- Βοηθήστε τον όταν δυσκολεύεται", "- Να είστε ευέλικτοι", "- Να έχετε ρεαλιστικές προσδοκίες",
      "- Μην διορθώνετε τα λάθη τους", "- Μην ασκείτε κριτική", "- Ενθαρρύνετε τη δημιουργική έκφραση", "- Προτείνετε δραστηριότητες μαζί με άλλους", "- Διαμορφώστε ένα ασφαλές περιβάλλον"]
  }

  public scheduleNextNotification() {
    this.appStorage.get('notification_frequency').then(data => {
      let frequency = JSON.parse(data);
      console.log("frequency: " + frequency);
      let date = new Date();
      console.log("initial date:", date);
      let title = "Δι-Άνοια - " + this.randomArrayElement(this.notificationTitles);
      let text = this.randomArrayElement(this.notificationTexts);
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
    if(setHour) {
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
    const instance = this;
    this.localNotifications.on("click").subscribe(notification => {
      console.log("notification clicked: ", notification);
      this.scheduleNextNotification();
    });
  }

  private randomArrayElement(items: [any]): any {
    return items[Math.floor(Math.random()*items.length)];
  }

}
