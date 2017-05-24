import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from "@ionic/storage";

/*
  Generated class for the AppStorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppStorageProvider {

  constructor(public storage: Storage) {
    console.log('Hello AppStorageProvider Provider');
  }

  set(dataKey, data) {
    return this.storage.set(dataKey, JSON.stringify(data));
  }

  get(dataKey) {
    return this.storage.get(dataKey);
  }

}
