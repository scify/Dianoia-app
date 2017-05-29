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

  public getDifficultyLevelById(difficultyLevelId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getAllDifficultyLevels().subscribe(difficultyLevels => {
        for(let difficultyLevel of difficultyLevels) {
          if(difficultyLevel.id == difficultyLevelId) {
            resolve(difficultyLevel);
          }
        }
        reject("No difficulty level found")
      });
    });
  }

  public getDifficultyLevelsForActivities(activities: any): Promise<any> {
    let difficultyLevelIds = [];
    for(let activity of activities) {
      if(activity.difficulty_level_id != null) {
        if(difficultyLevelIds.indexOf(activity.difficulty_level_id) == -1) {
          difficultyLevelIds.push(activity.difficulty_level_id);
        }
      }
    }
    let difficultyLevels = [];
    for(let difficultyLevelId of difficultyLevelIds) {
      this.getDifficultyLevelById(difficultyLevelId).then(difficultyLevel => {
        difficultyLevels.push(difficultyLevel);
      });
    }
    return new Promise((resolve, reject) => {
      resolve(difficultyLevels);
    });
    // return Observable.forkJoin(difficultyLevels);
  }
}
