import {Injectable} from '@angular/core';
import {AlertController, Events, ToastController} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AlertProvider {

  alertCloseBtnText: string = '';
  alertCancelBtnText: string = '';

  constructor(private alertController: AlertController, private toastCtrl: ToastController,
              public events: Events, private translate: TranslateService) {

    this.events.subscribe('lang_ready', () => {
      this.alertCloseBtnText = this.translate.instant('close');
      this.alertCancelBtnText = this.translate.instant('cancel');
    });

  }

  textDialog(title: string, message: string) {
    let alert = this.alertController.create({
      mode: 'ios',
      title: title,
      message: message,
      buttons: [
        {
          text: this.alertCloseBtnText,
          role: this.alertCancelBtnText
        }
      ]
    });

    alert.present();

  }

  announcementDialog(title: string, message: string) {
    let alert = this.alertController.create({
      mode: 'ios',
      title: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          role: this.alertCancelBtnText
        }
      ]
    });
    alert.present();
  }

  displayToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }


}
