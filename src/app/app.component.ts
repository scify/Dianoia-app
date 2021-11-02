import {Component, ViewChild} from "@angular/core";
import {Events, Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {NotificationProvider} from "../providers/notification/notification";
import {AppStorageProvider} from "../providers/app-storage/app-storage";
import {Http} from "@angular/http";
import {AlertProvider} from "../providers/alert/alert";
import {ActivityCategoryProvider} from "../providers/activity-category/activity-category";
import {ActivityProvider} from "../providers/activity/activity";
import {DifficultyLevelProvider} from "../providers/difficulty-level/difficulty-level";
import {LoaderService} from "../providers/loader-service/loader-service";
import {AnalyticsFirebase} from '@ionic-native/analytics-firebase';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {AppVersion} from "@ionic-native/app-version";
import {TranslateService} from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  appVersionName: string = '1.5.0';

  pages: Array<{ title: string, id?: any, component?: any, pageFile?: string, pageCode?: string }>;
  languages = [
    {
      "name": "English",
      "code": "en"
    },
    {
      "name": "Ελληνικά",
      "code": "el"
    },
    {
      "name": "Español",
      "code": "es"
    }
  ];

  constructor(public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen, private localNotifications: NotificationProvider,
              private appStorage: AppStorageProvider, private http: Http, private activityCategoryProvider: ActivityCategoryProvider,
              private alertProvider: AlertProvider, private activityProvider: ActivityProvider,
              private difficultyLevelProvider: DifficultyLevelProvider, private loaderService: LoaderService,
              private analyticsFirebase: AnalyticsFirebase, private iab: InAppBrowser, private appVersion: AppVersion,
              public translate: TranslateService, public events: Events) {

    this.initializeApp(platform, statusBar);
  }

  initializeApp(platform, statusBar) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.appVersion.getVersionNumber().then((version) => this.appVersionName = version);
        this.splashScreen.hide();

        if (platform.is('android')) {
          statusBar.overlaysWebView(false);
          statusBar.backgroundColorByHexString("#002984");
          statusBar.styleBlackOpaque();
        } else {
          statusBar.overlaysWebView(true);
          statusBar.styleDefault();
        }

        this.localNotifications.listenForNotificationClicks();
        this.localNotifications.scheduleNextNotification();
        this.setUpAnalyticsLogger();
      }
      this.setTranslationSettings();
    });
  }

  setTranslationSettings() {
    this.translate.setDefaultLang('en');
    this.appStorage.get('app_lang').then(lang => {
      const data = JSON.parse(lang);
      let langCode = data ? data : this.translate.getDefaultLang();
      this.translate.use(langCode).subscribe(() => {
        this.events.publish('lang_ready', this.translate.currentLang);
      });
    });

    this.events.subscribe('lang_ready', () => {
      this.setUpPageElements();
    });
    this.translate.onLangChange.subscribe(() => {

    });
  }

  setUpPageElements() {
    this.pages = [
      {title: this.translate.instant('menu_home'), component: "HomePage"},
      {title: this.translate.instant('menu_page_1'), component: "BasicInfoPage"},
      {
        title: this.translate.instant('menu_page_2'),
        component: "InfoListPage",
        pageCode: "page_tips_list",
        pageFile: "pages/tips_list.json"
      },
      {title: this.translate.instant('activities_exercises'), component: "ActivityCategoriesPage"},
      {title: this.translate.instant('stories_btn_title'), id: "stories"},
      {title: this.translate.instant('carer_activities_btn_title'), id: "carer_activities"},
      {title: this.translate.instant('history'), component: "StatisticsPage"},
      {title: this.translate.instant('notification_settings'), component: "NotificationsPage"},
      {title: this.translate.instant('help'), component: "HelpPage"},
      {title: this.translate.instant('about'), component: "AboutPage"}
    ];
  }

  setLang(langCode) {
    this.translate.use(langCode).subscribe(() => {
      this.appStorage.set('app_lang', this.translate.currentLang);
      this.events.publish('lang_ready', this.translate.currentLang);
    });
  }

  openPage(page) {
    if (page.id)
      this.getDifficultyLevelsForCategoryAndLoadPage(page.id);
    else
      this.nav.push(page.component, {pageData: page});
  }

  getDifficultyLevelsForCategoryAndLoadPage(categoryId: string): any {
    this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(activitiesIds => {
      if (activitiesIds != null) {
        this.activityProvider.getActivitiesByIds(activitiesIds).then(activities => {
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
      this.nav.push("DifficultyLevelsPage", {levels: difficultyLevels, categoryId: categoryId, activities: activities});
    });
  }

  handleError(error) {
    console.log(error);
    this.loaderService.hideLoader();
  }

  setUpAnalyticsLogger() {
    const eventParams = {};
    eventParams[this.analyticsFirebase.DEFAULT_PARAMS.LEVEL] = 29;
    eventParams['page'] = 'home';
    this.analyticsFirebase.logEvent('page_view', eventParams)
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

  openLink(url) {
    this.iab.create(url);
  }
}
