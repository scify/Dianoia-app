import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Storage} from "@ionic/storage";

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
