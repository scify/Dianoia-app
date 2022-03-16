import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {LoaderService} from "../../providers/loader-service/loader-service";
import {TranslateService} from "@ngx-translate/core";
import {DifficultyLevelProvider} from "../../providers/difficulty-level/difficulty-level";
import {ActivityProvider} from "../../providers/activity/activity";
import {ApiCallsProvider} from "../../providers/api-calls/api-calls";
import * as _ from 'lodash';

@IonicPage({
  name: 'DifficultyLevelsPage',
  segment: ':lang/difficulty-levels/:categoryId'
})
@Component({
  selector: 'page-difficulty-levels',
  templateUrl: 'difficulty-levels.html',
})
export class DifficultyLevelsPage {
  levels: any[];
  allActivities: any[];
  activities: any[];
  activitiesFromServer: any[] = [];
  categoryId: string;
  category: any;
  pageTitle: string = '';
  setUpInProgress: boolean = false;
  activitiesFromServerLoading: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private loaderService: LoaderService,
              public translate: TranslateService, public platform: Platform,
              private difficultyLevelProvider: DifficultyLevelProvider,
              private activityCategoryProvider: ActivityCategoryProvider,
              private activityProvider: ActivityProvider,
              private apiCallsProvider: ApiCallsProvider) {

    this.categoryId = this.navParams.get("categoryId");
    this.activityCategoryProvider.currentLang = this.navParams.get("lang");
    this.translate.use(this.navParams.get("lang")).subscribe(() => {
      this.setUpPageElements();
    });
    this.translate.onLangChange.subscribe(() => {
      this.setUpPageElements();
    });
  }

  setUpPageElements() {
    if (this.setUpInProgress)
      return;
    this.setUpInProgress = true;
    this.activitiesFromServerLoading = true;
    if (this.categoryId == null)
      return this.navCtrl.setRoot("HomePage");

    this.allActivities = [];
    this.activities = [];

    this.activityCategoryProvider.getActivitySlugsForCategory(this.categoryId).subscribe(async activitySlugs => {
      if (!activitySlugs)
        return;
      await this.setUpPageActivities(activitySlugs);

    }, error => {
      this.handleError(error);
    });
  }

  async setUpPageActivities(activitySlugs: Array<any>) {
    const activities = await this.activityProvider.getActivitiesBySlugs(activitySlugs);
    this.category = await this.activityCategoryProvider.getCategoryBySlug(this.categoryId);
    this.allActivities = activities;
    this.activities = activities;
    await this.loadActivitiesFromServer();
    this.levels = await this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities);
    this.levels.unshift({id: "0", title: this.translate.instant('all_difficulty_levels')});
    this.pageTitle = this.category != null ? this.category.title : '';
    this.loaderService.hideLoader();
    this.setUpInProgress = false;
  }

  selectLevel(levelButton: any): any {
    if (levelButton.id == 0) {
      this.activities = this.allActivities;
    } else {
      this.activities = [];
      for (let activity of this.allActivities) {
        if (activity.difficulty_level_id == levelButton.id) {
          this.activities.push(activity);
        }
      }
    }

  }

  selectActivity(activity: any) {
    this.navCtrl.push("activity-page", {
      lang: this.translate.currentLang,
      slug: activity.slug,
      activity: activity,
      allActivities: this.activities
    });
  }

  goToHome() {
    this.navCtrl.setRoot('HomePage');
  }

  handleError(error) {
    console.error(error);
    this.loaderService.hideLoader();
  }

  loadMoreActivitiesFromServerBtnIsEnabled(): boolean {
    return (this.activityProvider.activitiesNotLoadedBefore()
        || this.activityProvider.moreActivitiesExist())
      && !this.activitiesFromServerLoading;
  }

  async loadActivitiesFromServer(forceLoadMore: boolean = false) {
    this.activityProvider.getActivitiesFromAPI(this.categoryId, forceLoadMore).subscribe((activities) => {
      this.addActivities(activities);
      this.activitiesFromServerLoading = false;
    })
  }

  addActivities(activities: Array<any>) {
    for (let activity of activities) {
      if (!_.find(this.activitiesFromServer, {slug: activity.slug})) {
        this.activitiesFromServer.push(activity);
      }
    }
  }
}
