import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {TranslateService} from "@ngx-translate/core";
import {AppStorageProvider} from "../app-storage/app-storage";
import {AnalyticsFirebase} from "@ionic-native/analytics-firebase";
import {Platform} from "ionic-angular";
import {ApiCallsProvider} from "../api-calls/api-calls";

/*
  Generated class for the AnalyticsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AnalyticsProvider {

  firebaseSupported: boolean = false;

  constructor(public http: Http, private translate: TranslateService,
              public appStorageProvider: AppStorageProvider,
              public analyticsFirebase: AnalyticsFirebase,
              public platform: Platform, public apiCalls: ApiCallsProvider) {
    this.firebaseSupported = this.platform.is('cordova');
  }

  public async logAction(actionTitle: string, payload: any = {}) {
    const token = JSON.parse(await this.appStorageProvider.get("auth_token"));
    const lang = this.translate.currentLang;
    payload = {
      ...payload,
      token: token,
      lang: lang
    }
    console.log("DIANOIA_" + actionTitle + "_LANG_" + this.translate.currentLang + "_" + JSON.stringify(payload));
    if (this.firebaseSupported)
      await this.analyticsFirebase.logEvent(actionTitle, payload);
    this.apiCalls.logAnalytics(payload);
  }

  setUpAnalyticsLogger() {
    if (!this.firebaseSupported)
      return;
    const eventParams = {};
    eventParams[this.analyticsFirebase.DEFAULT_PARAMS.LEVEL] = 29;
    eventParams['page'] = 'home';
    this.analyticsFirebase.logEvent('page_view', eventParams)
      .then((res: any) => console.log('Firebase: ' + res))
      .catch((error: any) => console.error(error));
  }
}
