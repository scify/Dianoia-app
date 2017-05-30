import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LoadingController} from "ionic-angular";

/*
  Generated class for the LoaderService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoaderService {

  loader: any;
  loaderOpen: boolean = false;

  constructor(public http: Http,
              private loadingCtrl: LoadingController) {
  }

  showLoader() {
    this.loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait...',
      cssClass: 'loader'
    });

    this.loader.present();
    this.loaderOpen = true;
  }

  hideLoader() {
    if(this.loaderOpen) {
      this.loader.dismiss();
      this.loaderOpen = false;
    }
  }

}
