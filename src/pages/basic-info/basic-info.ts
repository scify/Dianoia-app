import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
              public translate: TranslateService, public sanitizer: DomSanitizer) {

    this.platform.ready().then(() => {
      this.translate.get('about_youtube_link').subscribe((translated: string) => {
        this.youtubeLink = this.sanitizer.bypassSecurityTrustResourceUrl(translated);
        this.buttons = [
          {
            title: this.translate.instant('what_are_activities'),
            component: "InfoListPage",
            pageCode: "page_info",
            pageFile: "pages/info.json"
          },
          {title: this.translate.instant('goal'), component: "InfoListPage", pageCode: "page_goal", pageFile: "pages/goal.json"},
          {title: this.translate.instant('value'), component: "InfoListPage", pageCode: "page_value", pageFile: "pages/value.json"}
        ];
      });
    });
  }

  goTo(button) {
    this.navCtrl.push(button.component, {pageData: button});
  }

  getContainerWidth() {
    // left + right padding of page is 32 pixels.
    return screen.width - 32;
  }

}
