import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiCallsProvider} from "../api-calls/api-calls";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import {AppStorageProvider} from "../app-storage/app-storage";
import {Events} from "ionic-angular";

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityProvider {

  activities = [];
  currentDateFormatted: string;
  currentLang: string = 'en';

  constructor(public http: Http, private apiCalls: ApiCallsProvider,
              private appStorage: AppStorageProvider, public events: Events) {
    this.events.subscribe('lang_ready', (langCode) => {
      this.activities = [];
      this.currentLang = langCode;
    });

    this.getAllActivities().subscribe(data => {
      this.activities = data;
    });

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 4);
    this.currentDateFormatted = currentDate.toDateString();
  }

  public getAllActivities(): Observable<any> {
    return this.apiCalls.getHttpCall("activities_all_" + this.currentLang, () => {
      return this.http.get("assets/data_DB/" + this.currentLang + "/activities/activities.json")
        .map(res => res.json());
    });
  }

  public getRandomActivity() {
    return new Promise((resolve, reject) => {
      if (!this.activities.length) {
        this.getAllActivities().subscribe(activities => {
          let randomActivity = activities[Math.floor(Math.random() * activities.length)];
          resolve(randomActivity);
        });
      } else {
        let randomActivity = this.activities[Math.floor(Math.random() * this.activities.length)];
        resolve(randomActivity);
      }
    });
  }


  public getNumberOfActivitiesForLastThreeMonths() {
    let currentDate = new Date();
    let dateAMonthAgo = new Date();
    dateAMonthAgo.setMonth(currentDate.getMonth() - 3);
    console.log("from", dateAMonthAgo);
    console.log("until", currentDate);
    return this.getNumberOfActivitiesForPeriod(dateAMonthAgo, currentDate);
  }

  public getNumberOfActivitiesForLastMonth() {
    let currentDate = new Date();
    let dateAMonthAgo = new Date();
    dateAMonthAgo.setMonth(currentDate.getMonth() - 1);
    console.log("from", dateAMonthAgo);
    console.log("until", currentDate);
    return this.getNumberOfActivitiesForPeriod(dateAMonthAgo, currentDate);
  }

  public getNumberOfActivitiesForLastTwoWeeks() {
    let currentDate = new Date();
    let dateAWeekAgo = new Date();
    dateAWeekAgo.setDate(currentDate.getDate() - 14);
    console.log("from", dateAWeekAgo);
    console.log("until", currentDate);
    return this.getNumberOfActivitiesForPeriod(dateAWeekAgo, currentDate);
  }

  private getNumberOfActivitiesForPeriod(startDate, endDate) {
    let numberOfDays = 0;
    let promises = [];
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      let promise = this.appStorage.get("activity_completed_" + date.toDateString());

      promise.then(result => {
        if (result)
          numberOfDays++;
      });
      promises.push(promise);
    }
    return Promise.all(promises);
  }

  public getActivitiesByIds(activityIds: Array<string>): Promise<any> {
    let activitiesToReturn = [];
    return new Promise((resolve, reject) => {
      if (!this.activities.length) {
        this.getAllActivities().subscribe(activities => {
          this.activities = activities;
          for (let activity of activities) {
            if (activityIds.indexOf(activity.id) > -1) {
              activitiesToReturn.push(activity);
            }
          }
          resolve(activitiesToReturn);
        });
      } else {
        for (let activity of this.activities) {
          if (activityIds.indexOf(activity.id) > -1) {
            activitiesToReturn.push(activity);
          }
        }
        resolve(activitiesToReturn);
      }
    });
  }

  public setActivityCompletedForToday() {
    return this.appStorage.set("activity_completed_" + this.currentDateFormatted, true);
  }
}
