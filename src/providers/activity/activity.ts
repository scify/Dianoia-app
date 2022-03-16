import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiCallsProvider} from "../api-calls/api-calls";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import {AppStorageProvider} from "../app-storage/app-storage";
import {Events} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityProvider {

  activities = [];
  currentDateFormatted: string = '';
  currentLang: string = 'en';
  activitiesResponseFromServer: any;

  constructor(public http: Http, private apiCalls: ApiCallsProvider,
              private appStorage: AppStorageProvider, public events: Events,
              private translate: TranslateService) {
    this.events.subscribe('lang_ready', (langCode) => {
      this.reset(langCode);
    });
    this.translate.onLangChange.subscribe((lang) => {
      this.reset(lang.lang);
    });

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 4);
    this.currentDateFormatted = currentDate.toDateString();
  }

  reset(langCode) {
    this.activities = [];
    this.currentLang = langCode;
  }

  public getAllActivities(): Observable<any> {
    return this.apiCalls.getHttpCall("activities_all_" + this.currentLang, () => {
      return this.http.get("assets/data_DB/" + this.currentLang + "/activities/activities.json")
        .map(res => res.json());
    });
  }

  public getNumberOfActivitiesForLastThreeMonths() {
    let currentDate = new Date();
    let dateAMonthAgo = new Date();
    dateAMonthAgo.setMonth(currentDate.getMonth() - 3);
    return this.getNumberOfActivitiesForPeriod(dateAMonthAgo, currentDate);
  }

  public getNumberOfActivitiesForLastMonth() {
    let currentDate = new Date();
    let dateAMonthAgo = new Date();
    dateAMonthAgo.setMonth(currentDate.getMonth() - 1);
    return this.getNumberOfActivitiesForPeriod(dateAMonthAgo, currentDate);
  }

  public getNumberOfActivitiesForLastTwoWeeks() {
    let currentDate = new Date();
    let dateAWeekAgo = new Date();
    dateAWeekAgo.setDate(currentDate.getDate() - 14);
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

  public getActivitiesBySlugs(activitySlugs: Array<string>): Promise<any> {
    let activitiesToReturn = [];
    return new Promise((resolve, reject) => {
      if (!this.activities.length) {
        this.getAllActivities().subscribe(activities => {
          activitiesToReturn = [];
          this.activities = activities;
          for (let activity of activities) {
            if (activitySlugs.indexOf(activity.slug) > -1) {
              activitiesToReturn.push(activity);
            }
          }
          resolve(activitiesToReturn);
        });
      } else {
        for (let activity of this.activities) {
          if (activitySlugs.indexOf(activity.slug) > -1) {
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

  getActivitiesFromAPI(categorySlug: string, forceLoadMore: boolean = false): Observable<any> {
    if (!forceLoadMore && this.shouldReturnOnlyCachedActivities())
      return Observable.of(this.activitiesResponseFromServer.data);

    let url = this.apiCalls.API_BASE_URL + "exercises";
    if (this.activitiesResponseFromServer && this.activitiesResponseFromServer.next_page_url)
      url = this.activitiesResponseFromServer.next_page_url;
    url += url.includes("?") ? "&" : "?";
    url += "lang=" + this.currentLang + "&category=" + categorySlug;

    return Observable.create(observer => {
      this.apiCalls.getHttpCall("activities_api_" + this.currentLang, () => {
        return this.http.get(url)
          .map(res => res.json());
      }).subscribe(res => {
          this.activitiesResponseFromServer = res;
          observer.next(res.data);
        }, error => observer.error(error),
        () =>
          observer.complete()
      );
    });
  }

  shouldReturnOnlyCachedActivities(): boolean {
    return this.activitiesResponseFromServer
      && !this.activitiesResponseFromServer.next_page_url;
  }

  activitiesNotLoadedBefore(): boolean {
    return !this.activitiesResponseFromServer;
  }

  moreActivitiesExist(): boolean {
    return this.activitiesResponseFromServer && this.activitiesResponseFromServer.next_page_url;
  }
}
