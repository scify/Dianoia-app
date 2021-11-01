import {Component} from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {LoaderService} from "../../providers/loader-service/loader-service";
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {DifficultyLevelProvider} from "../../providers/difficulty-level/difficulty-level";
import {Http} from "@angular/http";
import {AppStorageProvider} from "../../providers/app-storage/app-storage";
import {AlertProvider} from "../../providers/alert/alert";
import {StatusBar} from "@ionic-native/status-bar";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {TranslateService} from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  activities: any[];
  buttons: any[];

  constructor(public navCtrl: NavController, private activityProvider: ActivityProvider,
              private loaderService: LoaderService, private activityCategoryProvider: ActivityCategoryProvider,
              private difficultyLevelProvider: DifficultyLevelProvider, private http: Http,
              private appStorage: AppStorageProvider, public statusBar: StatusBar,
              private alertProvider: AlertProvider, public platform: Platform, private iab: InAppBrowser,
              private translate: TranslateService) {
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

    this.translate.get('app_name').subscribe((translated: string) => {
      this.setUpPageElements();
    });
    this.translate.onLangChange.subscribe(() => {
      this.setUpPageElements();
    });
  }

  setUpPageElements() {
    this.buttons = [
      {
        id: "basic_info",
        title: this.translate.instant('basic_info_btn_title'),
        subtitle: this.translate.instant('basic_info_btn_subtitle'),
        component: "BasicInfoPage"
      },
      {
        id: "mental_activities",
        title: this.translate.instant('mental_activities_btn_title'),
        subtitle: this.translate.instant('mental_activities_btn_subtitle'),
        component: "InfoListPage",
        pageCode: "page_goal",
        pageFile: "pages/goal.json"
      },
      {
        id: "common_activities",
        title: this.translate.instant('common_activities_btn_title'),
        subtitle: this.translate.instant('common_activities_btn_subtitle'),
        component: "InfoListPage",
        pageCode: "page_value",
        pageFile: "pages/value.json"
      },
      {
        id: "stories",
        title: this.translate.instant('stories_btn_title'),
        subtitle: this.translate.instant('stories_btn_subtitle'),
      },
      {
        id: "carer_activities",
        title: this.translate.instant('carer_activities_btn_title'),
        subtitle: this.translate.instant('carer_activities_btn_subtitle'),
        component: "InfoListPage",
        pageCode: "page_value",
        pageFile: "pages/value.json"
      }
    ];
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
    console.log(str.replace(/(\r\n|\n|\r)/gm, "").trim());
    return str.replace(/(\r\n|\n|\r)/gm, "").trim();
  }

  selectActivity(activity) {
    this.navCtrl.push("ActivityPage", {activity: activity});
  }

  goTo(button) {
    switch (button.id) {
      case "basic_info":
        this.navCtrl.push(button.component, {pageData: button});
        break;
      case "mental_activities":
        this.loaderService.showLoader();
        this.activityCategoryProvider.getSubcategoriesForCategory("mental_activities").then(subCategoriesIds => {
          this.activityCategoryProvider.getCategoriesByIds(subCategoriesIds).subscribe(categories => {
            this.navCtrl.push("ActivityCategoriesPage", {
              categories: categories,
              parentCategoryId: "mental_activities"
            });
            this.loaderService.hideLoader();
          });

        });
        break;
      default:
        this.loaderService.showLoader();
        this.getDifficultyLevelsForCategoryAndLoadPage(button.id);
        break;
    }
  }

  getDifficultyLevelsForCategoryAndLoadPage(categoryId: string): any {
    this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(activitiesIds => {
      if (activitiesIds != null) {
        this.activityProvider.getActivitiesByIds(activitiesIds).subscribe(activities => {
          this.getDifficultyLevelsForActivitiesAndLoadPage(activities, categoryId);
        }, error => {
          this.handleError(error);
        });
      }
    }, error => {
      this.handleError(error);
    });
  }


  getDifficultyLevelsForActivitiesAndLoadPage(activities: any, categoryId) {
    this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities).then(difficultyLevels => {
      this.navCtrl.push("DifficultyLevelsPage", {
        levels: difficultyLevels,
        categoryId: categoryId,
        activities: activities
      });
    });
  }

  handleError(error) {
    console.error(error);
    this.loaderService.hideLoader();
  }

  openLink(url) {
    this.iab.create(url);
  }

}
