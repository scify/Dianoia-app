import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {ApiCallsProvider} from "../api-calls/api-calls";
import {AppStorageProvider} from "../app-storage/app-storage";
import {Http} from "@angular/http";

/*
  Generated class for the ActivityRatingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityRatingProvider {

  userRatings: Array<any> = [];

  constructor(private apiCalls: ApiCallsProvider,
              private appStorage: AppStorageProvider,
              private http: Http) {
    this.appStorage.get('user_ratings').then(data => {
      data = JSON.parse(data);
      if (data)
        this.userRatings = data;
    });
  }

  public getAvgRatingForActivity(activity): Observable<any> {
    let url = this.apiCalls.API_BASE_URL + "resource/avg-rating";
    return Observable.create(observer => {
      const key = "activity_avg_rating_" + activity.slug;
      this.apiCalls.getHttpCall(key, () => {
        return this.http.get(url + "?resources_slug=" + activity.slug)
          .map(res => res.json());
      }).subscribe(res => {
          observer.next(res);
        }, error => observer.error(error),
        () =>
          observer.complete()
      );
    });
  }

  public getUserRatingForActivity(activity) {
    for (let activityRating of this.userRatings)
      if (activityRating.activity_slug === activity.slug)
        return activityRating.rating;
  }

  public rateActivity(rating, activity) {
    let url = this.apiCalls.API_BASE_URL + "resources/user-rating";
    const data = {
      resources_slug: activity.slug,
      rating: rating,
      activity_id: undefined
    }
    if (activity.id)
      data.activity_id = activity.id;

    let found = false;
    for (let activityRating of this.userRatings)
      if (activityRating.activity_slug === activity.slug) {
        activityRating.rating = rating;
        found = true;
      }

    if (!found) {
      this.userRatings.push({
        activity_slug: activity.slug,
        rating: rating
      });
    }

    this.appStorage.set('user_ratings', this.userRatings);

    return this.http.post(url, data, this.apiCalls.httpOptions).map(res => res.json());
  }

}
