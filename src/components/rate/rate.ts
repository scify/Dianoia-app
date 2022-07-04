import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {ActivityRatingProvider} from "../../providers/activity-rating/activity-rating";
import {AlertProvider} from "../../providers/alert/alert";
import {TranslateService} from "@ngx-translate/core";
import {AnalyticsProvider} from "../../providers/analytics/analytics";

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

  activity: any;
  userRating: number = 0;
  userRatingResponse = {};

  constructor(public navParams: NavParams, public viewCtrl: ViewController,
              private activityRatingProvider: ActivityRatingProvider,
              private alert: AlertProvider, private translate: TranslateService,
              private analyticsProvider: AnalyticsProvider) {
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

    const title = "DIANOIA_EXERCISE_RATED_" + this.activity.title + "_LANG_" + this.translate.currentLang;
    this.analyticsProvider.logAction(
      title,
      {
        title: this.activity.title,
        slug: this.activity.slug,
        category: this.activity.category,
        difficulty_level_id: this.activity.difficulty_level_id
      }, title);

  }

}
