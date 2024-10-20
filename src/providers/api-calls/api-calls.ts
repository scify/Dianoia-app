import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {AppStorageProvider} from "../app-storage/app-storage";


const COMMON_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

@Injectable()
export class ApiCallsProvider {

  public httpOptions: any;
  public API_BASE_URL = "//dianoia.scify.org/mobile/";

  constructor(public http: Http, private storage: AppStorageProvider) {
    if (location.protocol === "http:")
      this.API_BASE_URL = location.protocol + this.API_BASE_URL;
    else
      this.API_BASE_URL = "https:" + this.API_BASE_URL;

    this.httpOptions = {
      headers: new Headers({
        ...COMMON_HEADERS
      })
    };
  }

  getHttpCall(cacheKey, httpCall): Observable<any> {
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
    this.http.post(this.API_BASE_URL + "analytics/store", payload, this.httpOptions).subscribe({error: e => console.error(e)});
  }

}
