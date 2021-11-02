import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PageProvider} from "../../providers/page/page";

/**
 * Generated class for the InfoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info-list',
  templateUrl: 'info-list.html',
})
export class InfoListPage {

  pageFile: string = "";
  pageCode: string = "";
  title: string;
  description: string;
  bottomText: string;
  image: string;
  list: [string];
  cards: [any];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private pageProvider: PageProvider) {
    let pageData = this.navParams.get("pageData");
    this.pageFile = pageData.pageFile;
    this.pageCode = pageData.pageCode;
  }

  ionViewDidLoad() {
    if(this.pageCode != null && this.pageFile != null)
      this.pageProvider.getDataForPage(this.pageCode, this.pageFile).subscribe(pageData => {
        this.title = pageData.title;
        this.description = pageData.description;
        this.image = pageData.image;
        this.list = pageData.list;
        this.cards = pageData.cards;
        this.bottomText = pageData.bottom_text;
      });
  }

  selectCard(card) {
    this.navCtrl.push("ActivityPage", {activity: card, allActivities: this.cards, uniqueId: 'title'});
  }

}
