import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {LoaderService} from "../../providers/loader-service/loader-service";

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
              private activityProvider: ActivityProvider, private loaderService: LoaderService) {

    this.loaderService.showLoader();

    activityProvider.getNumberOfActivitiesForLastMonth().then(numberOfDays => {
      console.log(numberOfDays.filter(daysThatAreTrue).length);
      this.numberOfDaysForLastMonth = numberOfDays.filter(daysThatAreTrue).length.toString();
      this.statistics.push({title: "Για τον τελευταίο μήνα", value: this.numberOfDaysForLastMonth});
    });

    activityProvider.getNumberOfActivitiesForLastTwoWeeks().then(numberOfDays => {
      console.log(numberOfDays.filter(daysThatAreTrue).length);
      this.numberOfDaysForLastTwoWeeks = numberOfDays.filter(daysThatAreTrue).length.toString();
      this.statistics.push({title: "Για το τελευταίο 15 ήμερο", value: this.numberOfDaysForLastTwoWeeks});
    });

    activityProvider.getNumberOfActivitiesForLastThreeMonths().then(numberOfDays => {
      console.log(numberOfDays.filter(daysThatAreTrue).length);
      this.numberOfDaysForThreeMonths = numberOfDays.filter(daysThatAreTrue).length.toString();
      this.statistics.push({title: "Για το τελευταίο 3 μηνο", value: this.numberOfDaysForThreeMonths});

      this.loaderService.hideLoader();
    });

    function daysThatAreTrue(item) {
      return item == "true";
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
  }

}
