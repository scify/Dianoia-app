import {Component, ViewChild} from "@angular/core";
import {Events, MenuController, Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {NotificationProvider} from "../providers/notification/notification";
import {AppStorageProvider} from "../providers/app-storage/app-storage";
import {Http} from "@angular/http";
import {ActivityCategoryProvider} from "../providers/activity-category/activity-category";
import {ActivityProvider} from "../providers/activity/activity";
import {DifficultyLevelProvider} from "../providers/difficulty-level/difficulty-level";
import {LoaderService} from "../providers/loader-service/loader-service";
import {AnalyticsFirebase} from '@ionic-native/analytics-firebase';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {AppVersion} from "@ionic-native/app-version";
import {TranslateService} from '@ngx-translate/core';
import {Globalization} from '@ionic-native/globalization';
import enTranslations from "./../assets/i18n/en.json";
import elTranslations from "./../assets/i18n/el.json";
import esTranslations from "./../assets/i18n/es.json";
import itTranslations from "./../assets/i18n/it.json";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  appVersionName: string = '2.2.0';
  onDemandLang: string;

  pages: Array<{ title: string, id?: any, component?: any, pageFile?: string, pageCode?: string, pageName?: string }>;
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
    },
    {
      "name": "Italiano",
      "code": "it"
    }
  ];

  constructor(public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen, private localNotifications: NotificationProvider,
              private appStorage: AppStorageProvider, private http: Http, private activityCategoryProvider: ActivityCategoryProvider,
              private activityProvider: ActivityProvider,
              private difficultyLevelProvider: DifficultyLevelProvider, private loaderService: LoaderService,
              private analyticsFirebase: AnalyticsFirebase, private iab: InAppBrowser, private appVersion: AppVersion,
              public translate: TranslateService, public events: Events, private menuController: MenuController,
              private globalization: Globalization) {
    translate.setTranslation('en', enTranslations);
    translate.setTranslation('es', esTranslations);
    translate.setTranslation('el', elTranslations);
    translate.setTranslation('it', itTranslations);

    this.initializeApp(platform, statusBar);
    this.translate.onLangChange.subscribe(data => {
      this.onDemandLang = data.lang;
      this.setLang(data.lang);
      this.setUpPageElements();
    });
  }

  initializeApp(platform, statusBar) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.appVersion.getVersionNumber().then((version) => this.appVersionName = version);

        if (platform.is('android')) {
          statusBar.overlaysWebView(false);
          statusBar.backgroundColorByHexString("#002984");
          statusBar.styleBlackOpaque();
        } else {
          statusBar.overlaysWebView(true);
          statusBar.styleDefault();
        }

        this.localNotifications.listenForNotificationClicks();
        this.setUpAnalyticsLogger();
        this.globalization.getPreferredLanguage().then((res) => {
          this.setTranslationSettings(res.value.substring(0, 2));
        });
      } else {
        this.setTranslationSettings(window.navigator.language.substring(0, 2));
      }
    });
  }

  setTranslationSettings(langCodeToTry) {
    const acceptableLanguageCodes = this.languages.map(l => l.code);
    let defaultLangCode = acceptableLanguageCodes[0];
    if (acceptableLanguageCodes.indexOf(langCodeToTry) > -1)
      defaultLangCode = langCodeToTry;

    this.appStorage.get('app_lang').then(lang => {
      const data = JSON.parse(lang);
      let langCode = defaultLangCode;
      if (data && data != "" && acceptableLanguageCodes.indexOf(data) > -1) {
        langCode = data;
      }
      if (!this.onDemandLang)
        this.setLang(langCode);
    });

  }

  setUpPageElements() {
    this.pages = [
      {title: this.translate.instant('menu_home'), component: "HomePage"},
      {title: this.translate.instant('menu_page_1'), component: "BasicInfoPage", pageName: 'basic-info'},
      {
        title: this.translate.instant('menu_page_2'),
        component: "InfoListPage",
        pageCode: "page_tips_list",
        pageFile: "pages/" + this.translate.currentLang + "/tips_list.json"
      },
      {title: this.translate.instant('activities_exercises'), component: "ActivityCategoriesPage"},
      {title: this.translate.instant('stories_btn_title'), id: "stories"},
      {title: this.translate.instant('carer_activities_btn_title'), id: "carer_activities"},
      {title: this.translate.instant('history'), component: "StatisticsPage"},
      {title: this.translate.instant('settings'), component: "SettingsPage"},
      {title: this.translate.instant('help'), component: "HelpPage"},
      {title: this.translate.instant('about'), component: "AboutPage"}
    ];
    if (this.platform.is('cordova')) {
      this.splashScreen.hide();
      console.log("DIANOIA_APP_STARTED_LANG_" + this.translate.currentLang);
    }
  }

  setLang(langCode) {
    this.translate.setDefaultLang(langCode);
    this.translate.use(langCode).subscribe(() => {
      this.appStorage.set('app_lang', langCode).then(() => {
        this.events.publish('lang_ready', langCode);
        this.menuController.close();
      });
    });
  }

  openPage(page) {
    console.log(page);
    if (page.id)
      this.getDifficultyLevelsForCategoryAndLoadPage(page.id);
    else
      this.nav.push(page.pageName ? page.pageName : page.component, {pageData: page});
  }

  getDifficultyLevelsForCategoryAndLoadPage(categoryId: string): any {
    console.log(categoryId);
    this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(activitiesIds => {
      if (activitiesIds != null) {
        this.activityProvider.getActivitiesByIds(activitiesIds).then(activities => {
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
    console.error(error);
    this.loaderService.hideLoader();
  }

  setUpAnalyticsLogger() {
    const eventParams = {};
    eventParams[this.analyticsFirebase.DEFAULT_PARAMS.LEVEL] = 29;
    eventParams['page'] = 'home';
    this.analyticsFirebase.logEvent('page_view', eventParams)
      .then((res: any) => console.log('Firebase: ' + res))
      .catch((error: any) => console.error(error));
  }

  openLink(url) {
    this.iab.create(url);
  }
}
