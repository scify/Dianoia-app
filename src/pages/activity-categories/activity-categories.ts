import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {LoaderService} from "../../providers/loader-service/loader-service";
import {TranslateService} from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-activity-categories',
  templateUrl: 'activity-categories.html',
})
export class ActivityCategoriesPage {
  categories: any;
  parentCategoryId: string;
  parentCategory: any;
  pageTitle: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private activityCategoryProvider: ActivityCategoryProvider,
              private loaderService: LoaderService, public events: Events,
              public translate: TranslateService,
              public platform: Platform) {
    this.categories = this.navParams.get("categories");
  }

  ionViewWillLoad() {
    this.events.subscribe('lang_ready', (langCode) => {
      this.setUpPageElements();
    });
    this.platform.ready().then(() => {
      this.translate.get('app_name').subscribe(() => {
        this.setUpPageElements();
      });
    });
  }

  setUpPageElements() {
    this.pageTitle = this.translate.instant('activity_categories')
    this.loaderService.showLoader();
    this.parentCategoryId = this.navParams.get("parentCategoryId");
    if (this.parentCategoryId) {
      this.initParentCategoryPage();
    } else {
      this.activityCategoryProvider.getTopLevelCategories().then(categories => {
        this.categories = categories;
        this.loaderService.hideLoader();
      }).catch(error => {
        this.handleError(error);
      });
    }
  }

  initParentCategoryPage() {
    this.activityCategoryProvider.getCategoryById(this.parentCategoryId).then(category => {
      this.parentCategory = category;
      this.pageTitle = this.parentCategory != null ? this.parentCategory.title : this.translate.instant('activity_categories')
      this.activityCategoryProvider.getSubcategoriesForCategory(this.parentCategoryId).then(subcategoriesIds => {
        if (subcategoriesIds != null) {
          this.activityCategoryProvider.getCategoriesByIds(subcategoriesIds).subscribe(subcategories => {
            this.categories = subcategories;
            this.loaderService.hideLoader();
          });
        } else {
          this.loaderService.hideLoader();
        }
      });
    }).catch(error => {
      this.handleError(error);
    });
  }

  ionViewWillUnload() {
    this.events.unsubscribe('lang_ready');
  }

  handleError(error) {
    console.error(error);
    this.loaderService.hideLoader();
  }

  selectCategory(categoryButton: any): any {
    // if the selected category has subcategories, get the subcategories and load the page again
    this.activityCategoryProvider.getRelationshipsForCategory(categoryButton.category_id).subscribe(categoryRelationships => {
      if (categoryRelationships.subcategories.length > 0) {
        this.navCtrl.push("ActivityCategoriesPage", {parentCategoryId: categoryButton.category_id})
      }
      // else, if the selected has activities, get the activities and load the activities page
      else if (categoryRelationships.activities.length > 0) {
        this.navCtrl.push("DifficultyLevelsPage", {
          categoryId: categoryButton.category_id
        });
      }
    }, error => {
      this.handleError(error);
    });
  }

  goToHome() {
    this.navCtrl.setRoot('HomePage');
  }
}
