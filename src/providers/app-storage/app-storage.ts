import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";

@Injectable()
export class AppStorageProvider {

  constructor(public storage: Storage) {
  }

  set(dataKey, data): Promise<any> {
    return this.storage.set(dataKey, JSON.stringify(data));
  }

  get(dataKey): Promise<any> {
    return this.storage.get(dataKey);
  }

}
