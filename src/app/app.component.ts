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

  pages: Array<{title: string, component?: any, pageFile?: string, pageCode?: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Τι είναι οι Μη Φαρμακευτικές Παρεμβάσεις', component: "InfoListPage", pageCode: "page_info", pageFile: "pages/info.json"},
      { title: 'Σκοπός', component: "InfoListPage", pageCode: "page_goal", pageFile: "pages/goal.json" },
      { title: 'Αξία', component: "InfoListPage", pageCode: "page_value", pageFile: "pages/value.json" },
      { title: 'Τι να προσέξω', component: "InfoListPage", pageCode: "page_tips_list", pageFile: "pages/tips_list.json" },
      { title: 'Μ.Φ.Π.', component: "ActivityCategoriesPage"},
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
    this.nav.push(page.component, {pageData: page});
  }
}
