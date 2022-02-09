import {Component} from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import {LoaderService} from "../../providers/loader-service/loader-service";
import {Http} from "@angular/http";
import {AppStorageProvider} from "../../providers/app-storage/app-storage";
import {AlertProvider} from "../../providers/alert/alert";
import {StatusBar} from "@ionic-native/status-bar";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {TranslateService} from "@ngx-translate/core";
import {ShapesApiProvider} from "../../providers/shapes-api/shapes-api";

let robotAPIStartCalled = false;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  activities: any[];
  buttons: any[];
  iconPath: string = 'assets/img/en/icon.png';
  authMode: boolean = false;

  constructor(public navCtrl: NavController,
              private loaderService: LoaderService, private http: Http,
              private appStorage: AppStorageProvider, public statusBar: StatusBar,
              private alertProvider: AlertProvider, public platform: Platform, private iab: InAppBrowser,
              private translate: TranslateService, public shapesApiProvider: ShapesApiProvider) {
    if (platform.is('cordova')) {
      if (platform.is('android')) {
        statusBar.overlaysWebView(false);
        statusBar.backgroundColorByHexString("#002984");
        statusBar.styleBlackOpaque();
      } else {
        statusBar.overlaysWebView(true);
        statusBar.styleDefault();
      }
      this.checkForAnnouncement();
    }
    this.translate.onLangChange.subscribe(() => {
      this.setUpPageElements();
    });
    this.appStorage.get("auth_mode").then((authMode) => {
      if (JSON.parse(authMode))
        this.authMode = JSON.parse(authMode);
    })
  }

  ionViewWillLoad() {
    this.setUpPageElements();
  }

  setUpPageElements() {
    this.iconPath = "assets/img/" + this.translate.currentLang + "/icon.png";
    this.buttons = [
      {
        id: "basic_info",
        title: this.translate.instant('basic_info_btn_title'),
        subtitle: this.translate.instant('basic_info_btn_subtitle'),
        component: "BasicInfoPage",
        pageName: 'basic-info'
      },
      {
        id: "carer_activities",
        title: this.translate.instant('carer_activities_btn_title'),
        subtitle: this.translate.instant('carer_activities_btn_subtitle'),
        component: "InfoListPage",
        pageCode: "page_value",
        pageFile: "pages/" + this.translate.currentLang + "/value.json"
      },
      {
        id: "mental_activities",
        title: this.translate.instant('mental_activities_btn_title'),
        subtitle: this.translate.instant('mental_activities_btn_subtitle'),
        component: "InfoListPage",
        pageCode: "page_goal",
        pageFile: "pages/" + this.translate.currentLang + "/goal.json"
      },
      {
        id: "common_activities",
        title: this.translate.instant('common_activities_btn_title'),
        subtitle: this.translate.instant('common_activities_btn_subtitle'),
        component: "InfoListPage",
        pageCode: "page_value",
        pageFile: "pages/" + this.translate.currentLang + "/value.json"
      },
      {
        id: "stories",
        title: this.translate.instant('stories_btn_title'),
        subtitle: this.translate.instant('stories_btn_subtitle'),
      }
    ];
    this.appStorage.get('auth_mode').then(authMode => {
      if (JSON.parse(authMode) && !robotAPIStartCalled) {
        robotAPIStartCalled = true;
        this.shapesApiProvider.postAppStateToRobotAPI("started");
      }
    });
  }

  checkForAnnouncement() {

    this.http.get('http://scify.org/dianoiaAnnouncement.html').subscribe(data => {

      if (data) {
        let lastUpdatedString = data.headers.get('last-modified');
        if (lastUpdatedString) {
          let lastUpdatedDate = new Date(lastUpdatedString);
          this.showAnnouncementIfNewerThan(lastUpdatedDate, data.text());
        }
      }
    });
  }

  showAnnouncementIfNewerThan(date: Date, htmlToSHow: string) {
    let lastUpdatedMills = date.getTime();
    this.appStorage.get('announcement_last_modified').then(data => {
      let announcementLastUpdated = JSON.parse(data);
      if (announcementLastUpdated)
        announcementLastUpdated = parseInt(announcementLastUpdated);

      if (announcementLastUpdated < lastUpdatedMills && this.platform.is('cordova') && this.strip(htmlToSHow) !== "") {
        this.alertProvider.announcementDialog("Announcement", htmlToSHow);
        this.appStorage.set('announcement_last_modified', lastUpdatedMills);
      }
    });
  }

  strip(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    let str = tmp.textContent || tmp.innerText || "";
    return str.replace(/(\r\n|\n|\r)/gm, "").trim();
  }

  goTo(button) {
    switch (button.id) {
      case "basic_info":
        this.navCtrl.push(button.pageName, {pageData: button});
        break;
      case "mental_activities":
        this.loaderService.showLoader();
        this.navCtrl.push("ActivityCategoriesPage", {
          parentCategoryId: "mental_activities"
        });
        break;
      default:
        this.loaderService.showLoader();
        this.navCtrl.push("DifficultyLevelsPage", {
          categoryId: button.id,
        });
        break;
    }
  }

  openLink(url) {
    this.iab.create(url);
  }

}
