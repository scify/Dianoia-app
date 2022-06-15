import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ApiCallsProvider} from '../providers/api-calls/api-calls';
import {Http, HttpModule} from "@angular/http";
import {PageProvider} from '../providers/page/page';
import {IonicStorageModule} from '@ionic/storage';
import {AppStorageProvider} from '../providers/app-storage/app-storage';
import {ActivityCategoryProvider} from '../providers/activity-category/activity-category';
import {ActivityProvider} from '../providers/activity/activity';
import {DifficultyLevelProvider} from '../providers/difficulty-level/difficulty-level';
import {LoaderService} from '../providers/loader-service/loader-service';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {AlertProvider} from '../providers/alert/alert';
import {SocialSharing} from "@ionic-native/social-sharing";
import {LocalNotifications} from '@ionic-native/local-notifications';
import {NotificationProvider} from '../providers/notification/notification';
import {AnalyticsFirebase} from '@ionic-native/analytics-firebase';
import {AppVersion} from '@ionic-native/app-version';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Globalization} from "@ionic-native/globalization";
import {ShapesApiProvider} from "../providers/shapes-api/shapes-api";
import {SimpleCardComponent} from "../components/simple-card/simple-card";
import { AnalyticsProvider } from '../providers/analytics/analytics';
import {Device} from "@ionic-native/device";
import { ActivityRatingProvider } from '../providers/activity-rating/activity-rating';
import {ComponentsModule} from "../components/components.module";
import {RateComponent} from "../components/rate/rate";

@NgModule({
  declarations: [
    MyApp,
    SimpleCardComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SimpleCardComponent,
    RateComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiCallsProvider,
    PageProvider,
    AppStorageProvider,
    ActivityCategoryProvider,
    ActivityProvider,
    DifficultyLevelProvider,
    LoaderService,
    InAppBrowser,
    AlertProvider,
    SocialSharing,
    LocalNotifications,
    NotificationProvider,
    AnalyticsFirebase,
    AppVersion,
    Globalization,
    ShapesApiProvider,
    AnalyticsProvider,
    Device,
    ActivityRatingProvider
  ]
})
export class AppModule {
}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
