import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppStorageProvider} from "../app-storage/app-storage";

/*
  Generated class for the ShapesApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ShapesApiProvider {
  BASE_URL = "https://kubernetes.pasiphae.eu/shapes/asapa/auth/"
  COMMON_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Shapes-Key': '7Msbb3w^SjVG%j'
  };
  auth_token: string = null;

  constructor(public http: Http, public appStorage: AppStorageProvider) {
    this.appStorage.get("auth_token").then(token => {
      token = JSON.parse(token);
      if (token)
        this.auth_token = token;
    })
  }

  public getIsTokenValid(token) {
    const httpOptions = {
      headers: new Headers({
        ...this.COMMON_HEADERS,
        'X-Pasiphae-Auth': token
      })
    };
    return this.http.get(this.BASE_URL + "token/verify", httpOptions);
  }

}
