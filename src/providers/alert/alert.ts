import {Injectable} from '@angular/core';
import {AlertController, Events} from 'ionic-angular';
import {Toast} from "@ionic-native/toast";
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

  constructor(private alertController: AlertController, private toast: Toast,
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
    this.toast.show(message, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }


}
