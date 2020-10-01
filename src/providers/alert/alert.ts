import { Injectable } from '@angular/core';
import {AlertController} from 'ionic-angular';
import {Toast} from "@ionic-native/toast";

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AlertProvider {

  constructor(private alertController: AlertController, private toast: Toast) {
  }

  textDialog(title: string, message: string) {
    let alert = this.alertController.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Close',
          role: 'Cancel'
        }
      ]
    });

    alert.present();

  }

  announcementDialog(title: string, message: string) {
    let alert = this.alertController.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          role: 'Cancel'
        }
      ]
    });

    alert.present();

  }

  displayToast(message: string) {
    this.toast.show(message, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }


}
