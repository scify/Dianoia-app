import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';
import {TranslateService} from "@ngx-translate/core";
import consts from "../../consts";

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  version: string = consts.APP_VERSION;
  iconPath: string = 'assets/img/en/icon.png';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private appVersion: AppVersion, public platform: Platform,
              public translate: TranslateService,) {

    this.translate.onLangChange.subscribe(() => {
      this.setUpPageElements();
    });
  }

  ionViewWillLoad() {
    if (this.platform.is('cordova')) {
      this.appVersion.getVersionNumber().then(version => {
        this.version = version;
      })
    }
    this.setUpPageElements();
  }

  setUpPageElements() {
    this.iconPath = "assets/img/" + this.translate.currentLang + "/icon.png";
  }

}
