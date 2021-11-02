import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


/**
 * Generated class for the BasicInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-basic-info',
  templateUrl: 'basic-info.html',
})
export class BasicInfoPage {

  buttons: any[];
  youtubeLink: SafeResourceUrl = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
              public translate: TranslateService, public sanitizer: DomSanitizer,
              public platform: Platform) {
  }

  ionViewWillLoad() {
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
    this.youtubeLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.translate.instant('about_youtube_link'));
    this.buttons = [
      {
        title: this.translate.instant('what_are_activities'),
        component: "InfoListPage",
        pageCode: "page_info",
        pageFile: "pages/info.json"
      },
      {
        title: this.translate.instant('goal'),
        component: "InfoListPage",
        pageCode: "page_goal",
        pageFile: "pages/goal.json"
      },
      {
        title: this.translate.instant('value'),
        component: "InfoListPage",
        pageCode: "page_value",
        pageFile: "pages/value.json"
      }
    ];
  }

  goTo(button) {
    this.navCtrl.push(button.component, {pageData: button});
  }

  getContainerWidth() {
    // left + right padding of page is 32 pixels.
    return screen.width - 32;
  }

}
