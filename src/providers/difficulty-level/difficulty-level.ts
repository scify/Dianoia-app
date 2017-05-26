import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {ApiCallsProvider} from "../api-calls/api-calls";

@Injectable()
export class DifficultyLevelProvider {

  difficultyLevels: [any];

  constructor(public http: Http, private apiCalls: ApiCallsProvider) {
    this.getAllDifficultyLevels().subscribe(data => {
      this.difficultyLevels = data;
    });
  }

  public getAllDifficultyLevels(): Observable<any> {
    return this.apiCalls.getHttpCall("activities_all", () => {
      return this.http.get("assets/data_DB/difficulty_levels/difficulty_levels.json")
        .map(res => res.json());
    });
  }

  public getDifficultyLevelById(difficultyLevelId): Observable<any> {
    return Observable.create(observer => {
      this.getAllDifficultyLevels().subscribe(difficultyLevels => {
        for(let difficultyLevel of difficultyLevels) {
          if(difficultyLevel.id == difficultyLevelId) {
            observer.next(difficultyLevel);
          }
        }
        observer.complete();
      });
    });
  }

  public getDifficultyLevelsForActivities(activities: any): Observable<any> {
    let difficultyLevelIds = [];
    for(let activity of activities) {
      if(activity.difficulty_level_id != null) {
        if(difficultyLevelIds.indexOf(activity.difficulty_level_id) == -1) {
          difficultyLevelIds.push(activity.difficulty_level_id);
        }
      }
    }
    let difficultyLevels = [];
    return Observable.create(observer => {
      for(let difficultyLevelId of difficultyLevelIds) {
          this.getDifficultyLevelById(difficultyLevelId).subscribe(difficultyLevel => {
            difficultyLevels.push(difficultyLevel);
          });
      }
      observer.next(difficultyLevels);
      observer.complete();
    });
  }
}
