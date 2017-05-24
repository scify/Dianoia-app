import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {AppStorageProvider} from "../app-storage/app-storage";

@Injectable()
export class ApiCallsProvider {

  constructor(public http: Http, private storage: AppStorageProvider) {
  }

  getHttpCall(cacheKey, httpCall) {
    return Observable.create(observer => {
      // if value on local storage exists call observer next.
      this.storage.get(cacheKey).then((response) => {
        console.log("response", response);
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

}
