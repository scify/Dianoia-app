import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiCallsProvider} from "../api-calls/api-calls";

/*
  Generated class for the PageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PageProvider {
  endPoint: string;

  constructor(public http: Http, private apiCalls: ApiCallsProvider) {
    this.endPoint = "/assets/pages/";
  }

  getDataForPage(pageCode, pageFile) {
    return this.apiCalls.getHttpCall(pageCode, () => {
      return this.http.get(this.endPoint + pageFile)
        .map(res => res.json());
    });
  }

}
