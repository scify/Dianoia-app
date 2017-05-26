import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {ActivityProvider} from "../../providers/activity/activity";
import {DifficultyLevelProvider} from "../../providers/difficulty-level/difficulty-level";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-activity-categories',
  templateUrl: 'activity-categories.html',
})
export class ActivityCategoriesPage {
  categories: any;
  tests: any[];
  parentCategoryId: string;
  parentCategory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private activityCategoryProvider: ActivityCategoryProvider,
              private activityProvider: ActivityProvider,
              private difficultyLevelProvider: DifficultyLevelProvider) {
    this.categories = this.navParams.get("categories");
    // if no categories passed as parameter, load top-level categories by default
    if(this.categories == null) {
      this.activityCategoryProvider.getTopLevelCategories().then(categories => {
        this.categories = categories;
      });
    } else {
      this.parentCategoryId = this.navParams.get("parentCategoryId");
      this.activityCategoryProvider.getCategoryById(this.parentCategoryId).subscribe(category => {
        this.parentCategory = category;
      });
    }
  }

  getPageTitle() {
    return this.parentCategory != null ?  this.parentCategory.title : "Κατηγορίες δραστηριοτήτων";
  }


  selectCategory(categoryButton: any):any {
    // if the selected category has subcategories, get the subcategories and load the page again
    this.activityCategoryProvider.getRelationshipsForCategory(categoryButton.category_id).subscribe(categoryRelationships => {
      if(categoryRelationships.subcategories.length > 0) {
        this.getSubcategoriesAndLoadPage(categoryButton.category_id);
      }
      // else, if the selected has activities, get the activities and load the activities page
      else if(categoryRelationships.activities.length > 0) {
        this.getDifficultyLevelsForCategoryAndLoadPage(categoryButton.category_id);
      }
    });
  }

  getDifficultyLevelsForCategoryAndLoadPage(categoryId: string):any {
    this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(activitiesIds => {
      if(activitiesIds != null) {
        this.activityProvider.getActivitiesByIds(activitiesIds).subscribe(activities => {
          this.tests = activities;
          setTimeout(() => { // <===
            this.getDifficultyLevelsForActivitiesAndLoadPage(activities, categoryId);
          }, 10);
        });
      }
    });
  }

  getDifficultyLevelsForActivitiesAndLoadPage(activities: Observable<any>, categoryId) {
    this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities).subscribe(difficultyLevels => {
      console.log("difficultyLevels", difficultyLevels);
      this.navCtrl.push("DifficultyLevelsPage", {levels: difficultyLevels, categoryId: categoryId, activities: activities});
    });
  }

  getActivitiesAndLoadPage(categoryId: string):any {
    this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(activitiesIds => {
      if(activitiesIds != null) {
        this.activityProvider.getActivitiesByIds(activitiesIds).subscribe(activities => {
        });
      }
    });
  }

  private getSubcategoriesAndLoadPage(categoryId: string):any {
    this.activityCategoryProvider.getSubcategoriesForCategory(categoryId).subscribe(subcategoriesIds => {
      if(subcategoriesIds != null) {
        this.activityCategoryProvider.getCategoriesByIds(subcategoriesIds).subscribe(subcategories => {
          this.navCtrl.push("ActivityCategoriesPage", {categories: subcategories, parentCategoryId: categoryId})
        });
      }
    });

  }
}
