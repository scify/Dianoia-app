import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import {Page} from "../models/page";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component?: any, data?: Page}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Τι είναι οι Μη Φαρμακευτικές Παρεμβάσεις', component: "TopActivityCategories", data: new Page("InfoListPage", "page_info", "pages/info.json") },
      { title: 'Σκοπός', data: new Page("InfoListPage", "page_goal", "pages/goal.json") },
      { title: 'Αξία', data: new Page("InfoListPage", "page_value", "pages/value.json") },
      { title: 'Τι να προσέξω', data: new Page("CardsListPage", "page_tips_list", "pages/tips_list.json") },
      { title: 'Μ.Φ.Π.', component: "ActivityCategoriesPage" , data: new Page("ButtonsListPage", "page_activity_categories", "pages/activity_categories.json") },
      { title: 'Ιστορικό Ασκήσεων/Δραστηριοτήτων', component: ListPage },
      { title: 'Ρυθμίσεις ειδοποιήσεων', component: ListPage },
      { title: 'Βοήθεια', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component, {pageData: page.data});
  }
}
