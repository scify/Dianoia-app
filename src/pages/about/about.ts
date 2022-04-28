import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';
import {TranslateService} from "@ngx-translate/core";
import consts from "../../consts";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

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
  youtubeLink: SafeResourceUrl = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private appVersion: AppVersion, public platform: Platform,
              public translate: TranslateService, public sanitizer: DomSanitizer) {

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
    this.youtubeLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.translate.instant('tutorial_youtube_link'));
    this.iconPath = "assets/img/" + this.translate.currentLang + "/icon.png";
  }

  getContainerWidth() {
    // left + right padding of page is 32 pixels.
    let width = screen.width;
    if (!this.platform.is('cordova'))
      width = 1000;
    return width - 32;
  }
}
