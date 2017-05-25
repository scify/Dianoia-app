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
    console.log('Hello ActivityProvider Provider');
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

  public getActivityById(activityId): Observable<any> {
    return Observable.create(observer => {
      this.getAllActivities().subscribe(activities => {
        for(let activity of activities) {
          if(activity.id == activityId) {
            observer.next(activity);
          }
        }
        observer.complete();
      });
    });
  }

  public getActivitiesByIds(activityIds: [string]): Observable<any> {
    let activities = [];
    return Observable.create(observer => {
      for (let activityId of activityIds) {
        console.log(activityId);
        this.getActivityById(activityId).subscribe(activity => {
          activities.push(activity);
        });
      }
      console.log("activities" , activities);
      observer.next(activities);
      observer.complete();
    });
  }
}
