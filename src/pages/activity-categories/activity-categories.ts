import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {ActivityProvider} from "../../providers/activity/activity";

@IonicPage()
@Component({
  selector: 'page-activity-categories',
  templateUrl: 'activity-categories.html',
})
export class ActivityCategoriesPage {
  categories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private activityCategoryProvider: ActivityCategoryProvider, private activityProvider: ActivityProvider) {
    this.categories = this.navParams.get("categories");
    // if no categories passed as parameter, load top-level categories
    if(this.categories == null) {
      this.activityCategoryProvider.getTopLevelCategories().then(categories => {
        this.categories = categories;
      });
    }
  }


  selectCategory(categoryButton: any) {
    // if the selected category has subcategories, get the subcategories and load the page again
    this.activityCategoryProvider.getRelationshipsForCategory(categoryButton.category_id).subscribe(categoryRelationships => {
      if(categoryRelationships.subcategories.length > 0) {
        this.getSubcategoriesAndLoadPage(categoryButton.category_id);
      }
      // else, if the selected has activities, get the activities and load the activities page
      else if(categoryRelationships.activities.length > 0) {
        this.getActivitiesAndLoadPage(categoryButton.category_id);
      }
    });
  }

  getActivitiesAndLoadPage(categoryId: string) {
    this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(activitiesIds => {
      if(activitiesIds != null) {
        this.activityProvider.getActivitiesByIds(activitiesIds).subscribe(activities => {
          console.log("activities", activities);
        });
      }
    });
  }

  private getSubcategoriesAndLoadPage(categoryId: string) {
    this.activityCategoryProvider.getSubcategoriesForCategory(categoryId).subscribe(subcategoriesIds => {
      if(subcategoriesIds != null) {
        this.activityCategoryProvider.getCategoriesByIds(subcategoriesIds).subscribe(subcategories => {
          console.log("subcategories", subcategories);
          this.navCtrl.push("ActivityCategoriesPage", {categories: subcategories})
        });
      }
    });

  }
}
