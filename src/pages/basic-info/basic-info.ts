import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BasicInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-basic-info',
  templateUrl: 'basic-info.html',
})
export class BasicInfoPage {

  buttons: [any];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.buttons = [
      {title: 'Τι είναι οι Μη Φαρμακευτικές Παρεμβάσεις', component: "InfoListPage", pageCode: "page_info", pageFile: "pages/info.json"},
      {title: 'Σκοπός', component: "InfoListPage", pageCode: "page_goal", pageFile: "pages/goal.json"},
      {title: 'Αξία', component: "InfoListPage", pageCode: "page_value", pageFile: "pages/value.json"}
    ];
  }

  goTo(button) {
    this.navCtrl.push(button.component, {pageData: button});
  }

  getContainerWidth() {
    // left + right padding of page is 32 pixels.
    return screen.width - 32;
  }

}
