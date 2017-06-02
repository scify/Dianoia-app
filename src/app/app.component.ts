import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component?: any, pageFile?: string, pageCode?: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp(platform, statusBar);
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Αρχική', component: "HomePage"},
      { title: 'Τι είναι οι Μη Φαρμακευτικές Παρεμβάσεις', component: "InfoListPage", pageCode: "page_info", pageFile: "pages/info.json"},
      { title: 'Σκοπός', component: "InfoListPage", pageCode: "page_goal", pageFile: "pages/goal.json" },
      { title: 'Αξία', component: "InfoListPage", pageCode: "page_value", pageFile: "pages/value.json" },
      { title: 'Τι να προσέξω', component: "InfoListPage", pageCode: "page_tips_list", pageFile: "pages/tips_list.json" },
      { title: 'Ξεκινήστε', component: "ActivityCategoriesPage"},
      { title: 'Ιστορικό Ασκήσεων/Δραστηριοτήτων', component: ListPage },
      { title: 'Ρυθμίσεις ειδοποιήσεων', component: ListPage },
      { title: 'Βοήθεια', component: "InfoListPage", pageCode: "page_help", pageFile: "pages/help.json" },
      { title: 'About', component: "InfoListPage", pageCode: "page_about", pageFile: "pages/about.json" }
    ];

  }

  initializeApp(platform, statusBar) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (platform.is('android')) {
        statusBar.overlaysWebView(false);
        statusBar.backgroundColorByHexString("#3f51b5");
        statusBar.styleBlackOpaque();
      } else {
        statusBar.overlaysWebView(true);
        statusBar.styleDefault();
      }
    });
  }

  openPage(page) {
    this.nav.push(page.component, {pageData: page});
  }
}
