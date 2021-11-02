import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiCallsProvider} from "../api-calls/api-calls";
import {Observable} from "rxjs/Observable";
import {Events} from "ionic-angular";

/*
  Generated class for the ActivityCategoryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityCategoryProvider {
  currentLang: string = 'en';

  constructor(public http: Http, private apiCalls: ApiCallsProvider,
              public events: Events) {
    this.events.subscribe('lang_ready', (langCode) => {
      this.currentLang = langCode;
    });
  }

  public getAllCategoryRelationships() {
    return this.apiCalls.getHttpCall("top_level_categories_" + this.currentLang, () => {
      return this.http.get("assets/data_DB/" + this.currentLang + "/categories/category_relationships.json")
        .map(res => res.json());
    });
  }

  public getAllCategories() {
    return this.apiCalls.getHttpCall("categories_all_" + this.currentLang, () => {
      return this.http.get("assets/data_DB/" + this.currentLang + "/categories/categories.json")
        .map(res => res.json());
    });
  }

  public getTopLevelCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getAllCategoryRelationships().subscribe(categories => {
        let topLevelCategories = [];
        let allCategories = [];
        this.getAllCategories().subscribe(c => {
          allCategories = c;
          for (let category of categories) {
            if (category.is_root) {
              for (let cat of allCategories) {
                if (cat.category_id === category.parent_category_id) {
                  topLevelCategories.push(cat);
                }
              }
            }
          }
          resolve(topLevelCategories);
        });
      });
    });
  }

  public getCategoryById(categoryId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getAllCategories().subscribe(categories => {
        for (let category of categories) {
          if (category.category_id == categoryId) {
            resolve(category);
          }
        }
      });
    });
  }

  public getRelationshipsForCategory(categoryId): Observable<any> {
    return Observable.create(observer => {
      this.getAllCategoryRelationships().subscribe(categories => {
        for (let category of categories) {
          if (category.parent_category_id == categoryId) {
            observer.next(category);
          }
        }
        observer.complete();
      });
    });
  }

  public getActivitiesForCategory(categoryId): Observable<any> {
    return Observable.create(observer => {
      this.getRelationshipsForCategory(categoryId).subscribe(category => {
        observer.next(category.activities);
        observer.complete();
      });
    });
  }

  public getSubcategoriesForCategory(categoryId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getRelationshipsForCategory(categoryId).subscribe(category => {
        resolve(category.subcategories);
      });
    });
  }

  public getCategoriesByIds(categoriesIds: [string]): Observable<any> {
    let categories = [];
    let allCategories = [];
    return Observable.create(observer => {
      for (let categoryId of categoriesIds) {
        this.getAllCategories().subscribe(c => {
          allCategories = c;
          for (let cat of allCategories) {
            if (cat.category_id === categoryId) {
              categories.push(cat);
            }
          }
        });
      }
      observer.next(categories);
      observer.complete();
    });
  }

}
