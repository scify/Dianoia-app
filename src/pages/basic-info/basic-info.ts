import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {InAppBrowser} from '@ionic-native/in-app-browser';


/**
 * Generated class for the BasicInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'basic-info',
  segment: 'basics'
})
@Component({
  selector: 'page-basic-info',
  templateUrl: 'basic-info.html',
})
export class BasicInfoPage {

  buttons: any[];
  youtubeVideoId: string = '';
  youtubeThumbnail: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public translate: TranslateService, public platform: Platform,
              private iab: InAppBrowser) {
    this.translate.onLangChange.subscribe(() => {
      this.setUpPageElements();
    });
  }

  ionViewWillLoad() {
    this.setUpPageElements();
  }

  setUpPageElements() {
    const youtubeEmbedUrl = this.translate.instant('about_youtube_link');
    // Extract video ID from embed URL (format: https://www.youtube.com/embed/VIDEO_ID)
    const videoIdMatch = youtubeEmbedUrl.match(/\/embed\/([^?&]+)/);
    this.youtubeVideoId = videoIdMatch ? videoIdMatch[1] : '';
    this.youtubeThumbnail = this.youtubeVideoId ? `https://img.youtube.com/vi/${this.youtubeVideoId}/hqdefault.jpg` : '';
    this.buttons = [
      {
        title: this.translate.instant('what_are_activities'),
        component: "InfoListPage",
        pageCode: "page_info",
        pageFile: "pages/" + this.translate.currentLang + "/info.json"
      },
      {
        title: this.translate.instant('goal'),
        component: "InfoListPage",
        pageCode: "page_goal",
        pageFile: "pages/" + this.translate.currentLang + "/goal.json"
      },
      {
        title: this.translate.instant('value'),
        component: "InfoListPage",
        pageCode: "page_value",
        pageFile: "pages/" + this.translate.currentLang + "/value.json"
      }
    ];
  }

  goTo(button) {
    this.navCtrl.push(button.component, {pageData: button});
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
