import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';
import {TranslateService} from "@ngx-translate/core";
import consts from "../../consts";
import {InAppBrowser} from '@ionic-native/in-app-browser';

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
  youtubeVideoId: string = '';
  youtubeThumbnail: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private appVersion: AppVersion, public platform: Platform,
              public translate: TranslateService, private iab: InAppBrowser) {

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
    const youtubeEmbedUrl = this.translate.instant('tutorial_youtube_link');
    // Extract video ID from embed URL (format: https://www.youtube.com/embed/VIDEO_ID)
    const videoIdMatch = youtubeEmbedUrl.match(/\/embed\/([^?&]+)/);
    this.youtubeVideoId = videoIdMatch ? videoIdMatch[1] : '';
    this.youtubeThumbnail = this.youtubeVideoId ? `https://img.youtube.com/vi/${this.youtubeVideoId}/hqdefault.jpg` : '';
    this.iconPath = "assets/img/" + this.translate.currentLang + "/icon.png";
  }

  getContainerWidth() {
    // left + right padding of page is 32 pixels.
    let width = screen.width;
    if (!this.platform.is('cordova'))
      width = 1000;
    return width - 32;
  }

  openYoutubeVideo() {
    if (!this.youtubeVideoId) return;
    const youtubeUrl = `https://www.youtube.com/watch?v=${this.youtubeVideoId}`;
    if (this.platform.is('cordova')) {
      this.iab.create(youtubeUrl, '_system');
    } else {
      window.open(youtubeUrl, '_blank');
    }
  }
}
