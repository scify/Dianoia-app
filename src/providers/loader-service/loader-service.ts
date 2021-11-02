import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Events, LoadingController} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";

/*
  Generated class for the LoaderService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoaderService {

  loader: any;
  loaderOpen: boolean = false;
  loaderWaitText: string = '';

  constructor(public http: Http, private loadingCtrl: LoadingController,
              public events: Events, private translate: TranslateService) {
    this.events.subscribe('lang_ready', () => {
      this.loaderWaitText = this.translate.instant('please_wait');
    });
  }

  showLoader() {
    if (!this.loaderOpen) {
      this.loader = this.loadingCtrl.create({
        spinner: 'crescent',
        content: this.loaderWaitText + '...',
        cssClass: 'loader'
      });

      this.loader.present();
      this.loaderOpen = true;
    }
  }

  hideLoader() {
    if (this.loaderOpen) {
      this.loader.dismiss();
      this.loaderOpen = false;
    }
  }

}
