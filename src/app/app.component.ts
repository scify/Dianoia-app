import {Component, ViewChild} from "@angular/core";
import {Events, MenuController, Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {NotificationProvider} from "../providers/notification/notification";
import {AppStorageProvider} from "../providers/app-storage/app-storage";
import {Http, URLSearchParams} from "@angular/http";
import {ActivityCategoryProvider} from "../providers/activity-category/activity-category";
import {ActivityProvider} from "../providers/activity/activity";
import {DifficultyLevelProvider} from "../providers/difficulty-level/difficulty-level";
import {LoaderService} from "../providers/loader-service/loader-service";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {AppVersion} from "@ionic-native/app-version";
import {TranslateService} from '@ngx-translate/core';
import {Globalization} from '@ionic-native/globalization';
import enTranslations from "./../assets/i18n/en.json";
import elTranslations from "./../assets/i18n/el.json";
import esTranslations from "./../assets/i18n/es.json";
import itTranslations from "./../assets/i18n/it.json";
import {ShapesApiProvider} from "../providers/shapes-api/shapes-api";
import {AnalyticsProvider} from "../providers/analytics/analytics";
import consts from "../consts";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  appVersionName: string = consts.APP_VERSION;
  onDemandLang: string;
  shapesMode: false;

  pages: Array<any>;
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
              private analyticsProvider: AnalyticsProvider, private iab: InAppBrowser, private appVersion: AppVersion,
              public translate: TranslateService, public events: Events, private menuController: MenuController,
              private globalization: Globalization,
              public shapesApiProvider: ShapesApiProvider) {
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

  async initializeApp(platform, statusBar) {
    this.loaderService.showLoader();
    await this.platform.ready();
    const authMode = this.getURLParam("auth_mode");
    if (authMode)
      await this.appStorage.set("auth_mode", authMode);
    const robot_api = this.getURLParam("robot_api");
    if (robot_api)
      await this.appStorage.set("robot_api", robot_api);
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
      this.analyticsProvider.setUpAnalyticsLogger();
    }
    await this.setTranslationSettings();
    console.log("DIANOIA_APP_FINISHED_LANG_" + this.translate.currentLang);
  }

  async setTranslationSettings() {
    let langCodeToTry = this.getURLParam("lang");
    if (!langCodeToTry) {
      if (this.platform.is('cordova')) {
        const langFromGlobalization = await this.globalization.getPreferredLanguage();
        if (langFromGlobalization && langFromGlobalization.value)
          langCodeToTry = langFromGlobalization.value.substring(0, 2);
      } else {
        langCodeToTry = window.navigator.language.substring(0, 2);
      }
    }

    const acceptableLanguageCodes = this.languages.map(l => l.code);
    let defaultLangCode = acceptableLanguageCodes[0];
    if (acceptableLanguageCodes.indexOf(langCodeToTry) > -1)
      defaultLangCode = langCodeToTry;

    let appLang = JSON.parse(await this.appStorage.get('app_lang'));
    let langCode = defaultLangCode;
    if (appLang && appLang != "" && acceptableLanguageCodes.indexOf(appLang) > -1 && !this.getURLParam("lang")) {
      langCode = appLang;
    }
    if (!this.onDemandLang)
      this.setLang(langCode);
    const shouldShowLoginPage = await this.shouldShowLoginPage();
    if (shouldShowLoginPage) {
      // await this.appStorage.set('auth_token', null);
      this.nav.setRoot("SignInPage").then(() => {
        this.loaderService.hideLoader();
      });
    } else {
      this.loaderService.hideLoader();
    }
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
      {title: this.translate.instant('carer_activities_btn_title'), id: "carer_activities"},
      {title: this.translate.instant('activities_exercises'), component: "ActivityCategoriesPage", parentCategoryId: "mental_activities"},
      {title: this.translate.instant('common_activities_btn_title'), id: "common_activities"},
      {title: this.translate.instant('stories_btn_title'), id: "stories"},
      //{title: this.translate.instant('history'), component: "StatisticsPage"},
      {title: this.translate.instant('settings'), component: "SettingsPage"},
      {title: this.translate.instant('help'), component: "HelpPage"},
      {title: this.translate.instant('about'), component: "AboutPage"}
    ];
    if (this.platform.is('cordova')) {
      this.splashScreen.hide();
      console.log("DIANOIA_APP_STARTED_LANG_" + this.translate.currentLang);
    }
    this.appStorage.get('auth_mode').then(authMode => {
      if (JSON.parse(authMode)) {
        this.shapesMode = JSON.parse(authMode);
      }
    })
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

  async shouldShowLoginPage(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const authMode = JSON.parse(await this.appStorage.get('auth_mode'));
      if (!authMode)
        return resolve(false);

      const tokenParam = this.getURLParam("auth_token");
      if (tokenParam) {
        await this.appStorage.set('auth_token', tokenParam);
        return resolve(false);
      }
      const token = JSON.parse(await this.appStorage.get('auth_token'));
      if (!token) {
        return resolve(true);
      }
      this.shapesApiProvider.getIsTokenValid(token).subscribe(data => {
        console.log('token valid', data.json());
        resolve(false);
      }, error => {
        resolve(true)
      });
    });
  }

  getURLParam(paramName) {
    const params = new URLSearchParams(window.location.search);
    let tokenParamArr = params.paramsMap.get("?" + paramName) ? params.paramsMap.get("?" + paramName) : params.paramsMap.get(paramName);
    if (!tokenParamArr)
      tokenParamArr = [];
    let tokenParam = null;
    if (tokenParamArr.length)
      tokenParam = tokenParamArr[0];
    return tokenParam;
  }

  openPage(page) {
    if (page.id)
      this.getDifficultyLevelsForCategoryAndLoadPage(page.id);
    else
      this.nav.push(page.pageName ? page.pageName : page.component, {pageData: page, parentCategoryId: page.parentCategoryId});
  }

  getDifficultyLevelsForCategoryAndLoadPage(categoryId: string): any {
    this.activityCategoryProvider.getActivitySlugsForCategory(categoryId).subscribe(activitySlugs => {
      if (activitySlugs != null) {
        this.activityProvider.getActivitiesBySlugs(activitySlugs).then(activities => {
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
      this.nav.push("DifficultyLevelsPage", {levels: difficultyLevels, categoryId: categoryId, activities: activities});
    });
  }

  handleError(error) {
    console.error(error);
    this.loaderService.hideLoader();
  }

  openLink(url) {
    this.iab.create(url);
  }

  exitApp() {
    this.shapesApiProvider.postAppStateToRobotAPI("finished");
  }


}
