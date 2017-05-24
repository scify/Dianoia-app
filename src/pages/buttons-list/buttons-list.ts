import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PageProvider} from "../../providers/page/page";

/**
 * Generated class for the ButtonsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-buttons-list',
  templateUrl: 'buttons-list.html',
})
export class ButtonsListPage {

  pageFile: string = "";
  pageCode: string = "";
  title: string;
  description: string;
  buttons: [any];

  constructor(public navCtrl: NavController, public navParams: NavParams, private pageProvider: PageProvider) {
    this.pageFile = this.navParams.get("pageFile");
    this.pageCode = this.navParams.get("pageCode");
  }

  ionViewDidLoad() {
    if(this.pageCode != null && this.pageFile != null)
      this.pageProvider.getDataForPage(this.pageCode, this.pageFile).subscribe(pageData => {
        this.title = pageData.title;
        this.description = pageData.description;
        this.buttons = pageData.buttons;
      });
  }

}
