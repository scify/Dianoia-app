import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = "RandomActivitiesPage";
  tab2Root = "RandomActivitiesPage";

  constructor(public navCtrl: NavController, private activityProvider: ActivityProvider) {
    activityProvider.getNumberOfActivitiesForLastMonth().then(numberOfDays => {
      console.log(numberOfDays.filter(checkAdult).length);
    });

    function checkAdult(item) {
      return item == "true";
    }
  }

}
