import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiCallsProvider } from '../providers/api-calls/api-calls';
import {HttpModule} from "@angular/http";
import { PageProvider } from '../providers/page/page';
import { IonicStorageModule } from '@ionic/storage';
import { AppStorageProvider } from '../providers/app-storage/app-storage';
import { ActivityCategoryProvider } from '../providers/activity-category/activity-category';
import { ActivityProvider } from '../providers/activity/activity';
import { DifficultyLevelProvider } from '../providers/difficulty-level/difficulty-level';
import { LoaderService } from '../providers/loader-service/loader-service';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Printer} from "@ionic-native/printer";
import { AlertProvider } from '../providers/alert/alert';
import {Toast} from "@ionic-native/toast";
import {SocialSharing} from "@ionic-native/social-sharing";
import {LocalNotifications} from "@ionic-native/local-notifications";
import { NotificationProvider } from '../providers/notification/notification';
import {GoogleAnalytics} from "@ionic-native/google-analytics";

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
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
    Printer,
    AlertProvider,
    Toast,
    SocialSharing,
    LocalNotifications,
    NotificationProvider,
    GoogleAnalytics
  ]
})
export class AppModule {}
