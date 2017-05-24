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

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    AppStorageProvider
  ]
})
export class AppModule {}
