import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiCallsProvider} from "../api-calls/api-calls";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import {AppStorageProvider} from "../app-storage/app-storage";
import {Storage} from "@ionic/storage";

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityProvider {

  activities: [any];
  currentDateFormatted: string;

  constructor(public http: Http, private apiCalls: ApiCallsProvider, private appStorage: AppStorageProvider, private storage: Storage) {
    this.getAllActivities().subscribe(data => {
      this.activities = data;
    });

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 4);
    this.currentDateFormatted = currentDate.toDateString();
  }

  public getAllActivities(): Observable<any> {
    return this.apiCalls.getHttpCall("activities_all", () => {
      return this.http.get("assets/data_DB/activities/activities.json")
        .map(res => res.json());
    });
  }

  public getRandomActivity() {
    return new Promise((resolve, reject) => {
      if (this.activities.length == 0) {
        this.getAllActivities().subscribe(activities => {
          let randomActivity = activities[Math.floor(Math.random()*activities.length)];
          resolve(randomActivity);
        });
      } else {
        let randomActivity = this.activities[Math.floor(Math.random()*this.activities.length)];
        resolve(randomActivity);
      }
    });
  }

  public getActivityById(activityId): Promise<any> {
    return new Promise((resolve, reject) => {
      if(this.activities.length == 0) {
        this.getAllActivities().subscribe(activities => {
          for(let activity of activities) {
            if(activity.id == activityId) {
              resolve(activity);
            }
          }
        });
      } else {
        for(let activity of this.activities) {
          if(activity.id == activityId) {
            resolve(activity);
          }
        }
      }
    });
  }

  public getNumberOfActivitiesForLastMonth() {
    let currentDate = new Date();
    let dateAMonthAgo = new Date();
    dateAMonthAgo.setMonth(currentDate.getMonth() - 1);
    console.log("from", dateAMonthAgo);
    console.log("until", currentDate);
    let numberOfDays = 0;
    let promises = [];
    for (let date = dateAMonthAgo; date <= currentDate; date.setDate(date.getDate() + 1)) {
      let promise = this.appStorage.get("activity_completed_" + date.toDateString());

      promise.then(result => {
        if (result)
          numberOfDays++;
      });
      promises.push(promise);
    }
    return Promise.all(promises);
  }

  public getActivitiesByIds(activityIds: [string]): Observable<any> {
    let activities = [];
    activityIds.forEach(( activityId, index ) => {
      activities.push(this.getActivityById(activityId));
    });
    return Observable.forkJoin(activities);
  }

  public userHasCompletedActivityForToday() {
    return this.appStorage.get(this.currentDateFormatted);
  }

  public setActivityCompletedForToday() {
    return this.appStorage.set("activity_completed_" + this.currentDateFormatted, true);
  }
}
