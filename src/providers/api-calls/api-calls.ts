import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {AppStorageProvider} from "../app-storage/app-storage";

let API_BASE_URL = "//dianoia.scify.org/mobile/";
const COMMON_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

@Injectable()
export class ApiCallsProvider {

  httpOptions: any;

  constructor(public http: Http, private storage: AppStorageProvider) {
    if (location.protocol === "http:")
      API_BASE_URL = location.protocol + API_BASE_URL;
    else
      API_BASE_URL = "https:" + API_BASE_URL;

    this.httpOptions = {
      headers: new Headers({
        ...COMMON_HEADERS
      })
    };
  }

  getHttpCall(cacheKey, httpCall) {
    return Observable.create(observer => {
      // if value on local storage exists call observer next.
      this.storage.get(cacheKey).then((response) => {
        let data = JSON.parse(response);
        if (data != null)
          observer.next(data);
      });
      // do api call and call next again
      httpCall().subscribe(httpResponse => {
        this.storage.set(cacheKey, httpResponse);
        observer.next(httpResponse);
        observer.complete();// call complete if you want to close this stream (like a promise)
      });
    });
  }

  logAnalytics(payload: any) {
    this.http.post(API_BASE_URL + "analytics/store", payload, this.httpOptions).subscribe({error: e => console.error(e)});
  }

  getActivities() {
    this.http.get(API_BASE_URL + "exercises").subscribe((res) => {
      console.log(res.json());
    }, error => {
      console.error(error);
    })
  }
}
