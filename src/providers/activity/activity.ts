import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiCallsProvider} from "../api-calls/api-calls";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityProvider {

  activities: [any];

  constructor(public http: Http, private apiCalls: ApiCallsProvider) {
    this.getAllActivities().subscribe(data => {
      this.activities = data;
    });
  }

  public getAllActivities(): Observable<any> {
    return this.apiCalls.getHttpCall("activities_all", () => {
      return this.http.get("assets/data_DB/activities/activities.json")
        .map(res => res.json());
    });
  }

  public getActivityById(activityId): Promise<any> {
    return new Promise((resolve, reject) => {
      if(this.activities.length == 0) {
        console.log("get new");
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

  public getActivitiesByIds(activityIds: [string]): Observable<any> {
    let activities = [];
    return Observable.create(observer => {
      for (let activityId of activityIds) {
        this.getActivityById(activityId).then(activity => {
          activities.push(activity);
        });
      }
      observer.next(activities);
      observer.complete();
    });
  }

  public getActivitiesByIdsSimple(activityIds: [string]) {
    let activities = [];
    for (let activityId of activityIds) {
      this.getActivityById(activityId).then(activity => {
        console.log(activity);
        activities.push(activity);
      });
    }
    console.log("activities", activities);
    return activities;
  }
}
