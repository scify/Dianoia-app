import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';
import {TranslateService} from "@ngx-translate/core";

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

  version: string = '2.0.0-rc.2';
  iconPath: string = 'assets/img/en/icon.png';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private appVersion: AppVersion, public platform: Platform,
              public events: Events, public translate: TranslateService,) {
  }

  ionViewWillLoad() {
    if (this.platform.is('cordova')) {
      this.appVersion.getVersionNumber().then(version => {
        this.version = version;
      })
    }
    this.events.subscribe('lang_ready', (langCode) => {
      this.setUpPageElements();
    });
    this.platform.ready().then(() => {
      this.translate.get('app_name').subscribe(() => {
        this.setUpPageElements();
      });
    });
  }

  ionViewWillUnload() {
    this.events.unsubscribe('lang_ready');
  }

  setUpPageElements() {
    this.iconPath = "assets/img/" + this.translate.currentLang + "/icon.png";
  }

}
