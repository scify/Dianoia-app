import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiCallsProvider} from "../api-calls/api-calls";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the ActivityCategoryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityCategoryProvider {

  constructor(public http: Http, private apiCalls: ApiCallsProvider) {
  }

  public getAllCategoryRelationships() {
    return this.apiCalls.getHttpCall("top_level_categories", () => {
      return this.http.get("assets/data_DB/categories/category_relationships.json")
        .map(res => res.json());
    });
  }

  public getAllCategories() {
    return this.apiCalls.getHttpCall("categories_all", () => {
      return this.http.get("assets/data_DB/categories/categories.json")
        .map(res => res.json());
    });
  }

  public getTopLevelCategories(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.getAllCategoryRelationships().subscribe(categories => {
          let topLevelCategories = [];
          for(let category of categories) {
            if(category.is_root) {
              this.getCategoryById(category.parent_category_id).then(topLevelCategory => {
                topLevelCategories.push(topLevelCategory);
              });
            }
          }
          resolve(topLevelCategories);
        });
      });
  }

  public getCategoryById(categoryId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getAllCategories().subscribe(categories => {
        for(let category of categories) {
          if(category.category_id == categoryId) {
            resolve(category);
          }
        }
        // reject("No Category found");
      });
    });
  }

  public getRelationshipsForCategory(categoryId): Observable<any>{
    return Observable.create(observer => {
      this.getAllCategoryRelationships().subscribe(categories => {
        for(let category of categories) {
          if(category.parent_category_id == categoryId) {
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
    return Observable.create(observer => {
      for (let activityId of categoriesIds) {
        this.getCategoryById(activityId).then(activity => {
          categories.push(activity);
        });
      }
      observer.next(categories);
      observer.complete();
    });
  }

}
