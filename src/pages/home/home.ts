import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {IonicPage} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {LoaderService} from "../../providers/loader-service/loader-service";
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {DifficultyLevelProvider} from "../../providers/difficulty-level/difficulty-level";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = "RandomActivitiesPage";
  tab2Root = "RandomActivitiesPage";

  activities: any[];
  buttons: [any];

  constructor(public navCtrl: NavController, private activityProvider: ActivityProvider,
              private loaderService: LoaderService, private activityCategoryProvider: ActivityCategoryProvider,
              private difficultyLevelProvider: DifficultyLevelProvider) {

    this.loaderService.showLoader();

    this.activityCategoryProvider.getActivitiesForCategory("common_activities").subscribe(activityIds => {
      console.log(activityIds);
      this.activityProvider.getActivitiesByIds(this.shuffle(activityIds)).subscribe(activities => {
        this.activities = activities;
        this.loaderService.hideLoader();
      });
    });

    this.buttons = [
      {id: "basic_info", title: 'Ας μάθουμε τα βασικά', subtitle: "Τι είναι - Σκοπός - Αξία", component: "BasicInfoPage"},
      {id: "mental_activities", title: 'Εκτυπώστε νοητικές ασκήσεις', subtitle: "Ασκήσεις με μολύβι και χαρτί", component: "InfoListPage", pageCode: "page_goal", pageFile: "pages/goal.json"},
      {id: "common_activities", title: 'Βρείτε δημιουργικές δραστηριότητες', subtitle: "Ιδέες για να περάσετε δημιουργικό χρόνο μαζί", component: "InfoListPage", pageCode: "page_value", pageFile: "pages/value.json"}
    ];

  }

  selectActivity(activity) {
    this.navCtrl.push("ActivityPage", {activity: activity});
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  goTo(button) {
    switch (button.id) {
      case "basic_info":
        this.navCtrl.push(button.component, {pageData: button});
        break;
      case "mental_activities":
        this.loaderService.showLoader();
        this.activityCategoryProvider.getSubcategoriesForCategory("mental_activities").then(subCategoriesIds => {
          this.activityCategoryProvider.getCategoriesByIds(subCategoriesIds).subscribe(categories => {
            this.navCtrl.push("ActivityCategoriesPage", {categories: categories, parentCategoryId: "mental_activities"});
            this.loaderService.hideLoader();
          });

        });
        break;
      case "common_activities":
        this.loaderService.showLoader();
        this.getDifficultyLevelsForCategoryAndLoadPage("common_activities");
        break;
    }
  }

  getDifficultyLevelsForCategoryAndLoadPage(categoryId: string):any {
    this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(activitiesIds => {
      if(activitiesIds != null) {
        this.activityProvider.getActivitiesByIds(activitiesIds).subscribe(activities => {
          console.log(activities);
          this.getDifficultyLevelsForActivitiesAndLoadPage(activities, categoryId);
        }, error => {
          this.handleError(error);
        });
      }
    }, error => {
      this.handleError(error);
    });
  }


  getDifficultyLevelsForActivitiesAndLoadPage(activities: any, categoryId) {
    this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities).then(difficultyLevels => {
      // this.loaderService.hideLoader();
      this.navCtrl.push("DifficultyLevelsPage", {levels: difficultyLevels, categoryId: categoryId, activities: activities});
    });
  }

  handleError(error) {
    console.log(error);
    this.loaderService.hideLoader();
  }

}
