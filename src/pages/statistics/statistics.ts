import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {LoaderService} from "../../providers/loader-service/loader-service";
import {TranslateService} from "@ngx-translate/core";

/**
 * Generated class for the StatisticsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  numberOfDaysForLastMonth: string;
  numberOfDaysForLastTwoWeeks: string;
  numberOfDaysForThreeMonths: string;
  statistics = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private activityProvider: ActivityProvider, private loaderService: LoaderService,
              public platform: Platform, private translate: TranslateService) {

    this.loaderService.showLoader();
    this.translate.get('app_name').subscribe((translated: string) => {
      this.setUpPageElements();
    });
  }

  setUpPageElements() {
    this.activityProvider.getNumberOfActivitiesForLastMonth().then(numberOfDays => {
      this.numberOfDaysForLastMonth = numberOfDays.filter(daysThatAreTrue).length.toString();
      this.statistics.push({title: this.translate.instant('for_the_last_month'), value: this.numberOfDaysForLastMonth});
    });

    this.activityProvider.getNumberOfActivitiesForLastTwoWeeks().then(numberOfDays => {
      this.numberOfDaysForLastTwoWeeks = numberOfDays.filter(daysThatAreTrue).length.toString();
      this.statistics.push({
        title: this.translate.instant('for_the_last_weeks'),
        value: this.numberOfDaysForLastTwoWeeks
      });
    });

    this.activityProvider.getNumberOfActivitiesForLastThreeMonths().then(numberOfDays => {
      this.numberOfDaysForThreeMonths = numberOfDays.filter(daysThatAreTrue).length.toString();
      this.statistics.push({
        title: this.translate.instant('for_the_last_months'),
        value: this.numberOfDaysForThreeMonths
      });

      this.loaderService.hideLoader();
    });

    function daysThatAreTrue(item) {
      return item == "true";
    }
  }

}
