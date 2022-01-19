import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

/**
 * Generated class for the SimpleCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'simple-card',
  templateUrl: 'simple-card.html'
})
export class SimpleCardComponent {

  card: any = {
    title: null,
    text: null,
    img: null
  };

  constructor(private navCtrl: NavController, private params: NavParams) {
    this.card = this.params.get("card");
  }

  dismiss() {
    this.navCtrl.pop();
  }
}
