import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {ActivityRatingProvider} from "../../providers/activity-rating/activity-rating";
import {AlertProvider} from "../../providers/alert/alert";
import {TranslateService} from "@ngx-translate/core";

/**
 * Generated class for the RateComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rate',
  templateUrl: 'rate.html'
})
export class RateComponent {

  activity = {};
  userRating: number = 0;
  userRatingResponse = {};

  constructor(public navParams: NavParams, public viewCtrl: ViewController,
              private activityRatingProvider: ActivityRatingProvider,
              private alert: AlertProvider, private translate: TranslateService) {
    this.activity = this.navParams.get('activity');
    this.userRating = this.activityRatingProvider.getUserRatingForActivity(this.activity);
  }

  dismiss() {
    this.viewCtrl.dismiss(this.userRatingResponse);
  }

  getIconName(index) {
    return index <= this.userRating ? "ios-star" : "ios-star-outline";
  }

  rate(index) {
    this.userRating = index;
    this.activityRatingProvider.rateActivity(index, this.activity).subscribe((response) => {
      this.userRatingResponse = response;
      this.alert.displayToast(this.translate.instant('activity_rating_thanks'));
    });
  }

}
