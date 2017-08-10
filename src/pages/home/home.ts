import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {IonicPage} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {LoaderService} from "../../providers/loader-service/loader-service";
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {DifficultyLevelProvider} from "../../providers/difficulty-level/difficulty-level";
import {Http} from "@angular/http";
import {AppStorageProvider} from "../../providers/app-storage/app-storage";
import {AlertProvider} from "../../providers/alert/alert";
import {StatusBar} from "@ionic-native/status-bar";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = "RandomActivitiesPage";
  tab2Root = "RandomActivitiesPage";

  activities: any[];
  buttons: [any];

  constructor(public navCtrl: NavController, private activityProvider: ActivityProvider,
              private loaderService: LoaderService, private activityCategoryProvider: ActivityCategoryProvider,
              private difficultyLevelProvider: DifficultyLevelProvider, private http: Http,
              private appStorage: AppStorageProvider, public statusBar: StatusBar,
              private alertProvider: AlertProvider, private platform: Platform) {

    if (platform.is('android')) {
      statusBar.overlaysWebView(false);
      statusBar.backgroundColorByHexString("#002984");
      statusBar.styleBlackOpaque();
    } else {
      statusBar.overlaysWebView(true);
      statusBar.styleDefault();
    }

    // this.loaderService.showLoader();

    // this.activityCategoryProvider.getActivitiesForCategory("common_activities").subscribe(activityIds => {
    //   console.log(activityIds);
    //   this.activityProvider.getActivitiesByIds(this.shuffle(activityIds)).subscribe(activities => {
    //     this.activities = activities;
    //     this.loaderService.hideLoader();
    //   });
    // });

    this.buttons = [
      {id: "basic_info", title: 'Ας μάθουμε τα βασικά', subtitle: "Τι είναι - Σκοπός - Αξία", component: "BasicInfoPage"},
      {id: "mental_activities", title: 'Εκτυπώστε νοητικές ασκήσεις', subtitle: "Ασκήσεις με μολύβι και χαρτί", component: "InfoListPage", pageCode: "page_goal", pageFile: "pages/goal.json"},
      {id: "common_activities", title: 'Βρείτε δημιουργικές δραστηριότητες', subtitle: "Ιδέες για να περάσετε δημιουργικό χρόνο μαζί", component: "InfoListPage", pageCode: "page_value", pageFile: "pages/value.json"}
    ];

    // this.appStorage.get('app_installed').then(data => {
    //   let dataInstalled = JSON.parse(data);
    //   if(dataInstalled) {
    //     this.checkForAnnouncement();
    //   }
    //   this.appStorage.set('app_installed', true);
    // });
    this.checkForAnnouncement();
  }

  checkForAnnouncement() {

    this.http.get('http://scify.org/dianoiaAnnouncement.html').subscribe(data => {

      if(data) {
        let lastUpdatedString = data.headers.get('last-modified');
        console.log(data);
        if (lastUpdatedString) {
          let lastUpdatedDate = new Date(lastUpdatedString);
          this.showAnnouncementIfNewerThan(lastUpdatedDate, data.text());
        }
      }
    });
  }

  showAnnouncementIfNewerThan(date: Date, htmlToSHow: string) {
    console.log(date);
    let lastUpdatedMills = date.getTime();
    console.log("lastUpdatedMills", lastUpdatedMills);
    this.appStorage.get('announcement_last_modified').then(data => {
      let announcementLastUpdated = JSON.parse(data);
      if(announcementLastUpdated)
        announcementLastUpdated = parseInt(announcementLastUpdated);

      console.log("announcementLastUpdated", announcementLastUpdated);
      console.log("this.strip(htmlToSHow)", this.strip(htmlToSHow) == "");
      if(announcementLastUpdated < lastUpdatedMills && this.platform.is('cordova') && this.strip(htmlToSHow) !== "") {
        console.log("Showing new announcement");
        console.log("htmlToSHow", htmlToSHow);
        this.alertProvider.announcementDialog("Announcement", htmlToSHow);
        this.appStorage.set('announcement_last_modified', lastUpdatedMills);
      }
    });
  }

   strip(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    let str = tmp.textContent || tmp.innerText || "";
    console.log(str.replace(/(\r\n|\n|\r)/gm,"").trim());
    return str.replace(/(\r\n|\n|\r)/gm,"").trim();
  }

  selectActivity(activity) {
    this.navCtrl.push("ActivityPage", {activity: activity});
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
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
            this.navCtrl.push("ActivityCategoriesPage", {categories: categories, parentCategoryId: "mental_activities"});
            this.loaderService.hideLoader();
          });

        });
        break;
      case "common_activities":
        this.loaderService.showLoader();
        this.getDifficultyLevelsForCategoryAndLoadPage("common_activities");
        break;
    }
  }

  getDifficultyLevelsForCategoryAndLoadPage(categoryId: string):any {
    this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(activitiesIds => {
      if(activitiesIds != null) {
        this.activityProvider.getActivitiesByIds(activitiesIds).subscribe(activities => {
          console.log(activities);
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
      // this.loaderService.hideLoader();
      this.navCtrl.push("DifficultyLevelsPage", {levels: difficultyLevels, categoryId: categoryId, activities: activities});
    });
  }

  handleError(error) {
    console.log(error);
    this.loaderService.hideLoader();
  }

}
