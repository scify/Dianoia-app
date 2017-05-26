import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DifficultyLevelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-difficulty-levels',
  templateUrl: 'difficulty-levels.html',
})
export class DifficultyLevelsPage {
  levels: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.levels = this.navParams.get("levels");
    console.log(this.levels);
    if(this.levels == null) {
      this.navCtrl.setRoot("HomePage");
    }
  }

  ionViewDidLoad() {
  }

  selectLevel(levelButton: any):any {
    console.log(levelButton);
  }

}
