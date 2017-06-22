webpackJsonp([5],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_categories__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list_module__ = __webpack_require__(292);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopActivityCategoriesPageModule", function() { return TopActivityCategoriesPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TopActivityCategoriesPageModule = (function () {
    function TopActivityCategoriesPageModule() {
    }
    return TopActivityCategoriesPageModule;
}());
TopActivityCategoriesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__activity_categories__["a" /* ActivityCategoriesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_categories__["a" /* ActivityCategoriesPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list_module__["a" /* ButtonsListComponentModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__activity_categories__["a" /* ActivityCategoriesPage */]
        ]
    })
], TopActivityCategoriesPageModule);

//# sourceMappingURL=activity-categories.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_list__ = __webpack_require__(293);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsListComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonsListComponentModule = (function () {
    function ButtonsListComponentModule() {
    }
    return ButtonsListComponentModule;
}());
ButtonsListComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buttons_list__["a" /* ButtonsListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buttons_list__["a" /* ButtonsListComponent */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__buttons_list__["a" /* ButtonsListComponent */]
        ]
    })
], ButtonsListComponentModule);

//# sourceMappingURL=buttons-list.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ButtonsListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ButtonsListComponent = (function () {
    function ButtonsListComponent() {
        this.buttonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
    }
    ButtonsListComponent.prototype.onButtonClick = function (button) {
        this.buttonClick.emit(button);
    };
    return ButtonsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])('buttons'),
    __metadata("design:type", Array)
], ButtonsListComponent.prototype, "buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
    __metadata("design:type", Object)
], ButtonsListComponent.prototype, "buttonClick", void 0);
ButtonsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'buttons-list',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/components/buttons-list/buttons-list.html"*/'<!-- Generated template for the ButtonsListComponent component -->\n<div>\n  <div class="buttonsContainer">\n    <p *ngFor="let button of buttons">\n      <button [ngClass]="button.subtitle ? \'bigBtn\' : \'\'" mode="ios" ion-button full (click)="onButtonClick(button)">{{ button.title }} <div class="subtitle" *ngIf=\'button.subtitle\'>{{ button.subtitle }}</div></button>\n    </p>\n  </div>\n</div>\n\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/components/buttons-list/buttons-list.html"*/
    }),
    __metadata("design:paramtypes", [])
], ButtonsListComponent);

//# sourceMappingURL=buttons-list.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_category_activity_category__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_activity_activity__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_difficulty_level_difficulty_level__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_service_loader_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityCategoriesPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivityCategoriesPage = (function () {
    function ActivityCategoriesPage(navCtrl, navParams, activityCategoryProvider, activityProvider, difficultyLevelProvider, loaderService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityCategoryProvider = activityCategoryProvider;
        this.activityProvider = activityProvider;
        this.difficultyLevelProvider = difficultyLevelProvider;
        this.loaderService = loaderService;
        this.categories = this.navParams.get("categories");
        // if no categories passed as parameter, load top-level categories by default
        // this.loaderService.showLoader();
        if (this.categories == null) {
            this.activityCategoryProvider.getTopLevelCategories().then(function (categories) {
                _this.categories = categories;
                _this.loaderService.hideLoader();
            }).catch(function (error) {
                _this.handleError(error);
            });
        }
        else {
            this.parentCategoryId = this.navParams.get("parentCategoryId");
            this.activityCategoryProvider.getCategoryById(this.parentCategoryId).then(function (category) {
                _this.parentCategory = category;
                _this.loaderService.hideLoader();
            }).catch(function (error) {
                _this.handleError(error);
            });
        }
    }
    ActivityCategoriesPage.prototype.handleError = function (error) {
        console.log(error);
        this.loaderService.hideLoader();
    };
    ActivityCategoriesPage.prototype.getPageTitle = function () {
        return this.parentCategory != null ? this.parentCategory.title : "Κατηγορίες δραστηριοτήτων";
    };
    ActivityCategoriesPage.prototype.selectCategory = function (categoryButton) {
        var _this = this;
        // if the selected category has subcategories, get the subcategories and load the page again
        this.loaderService.showLoader();
        this.activityCategoryProvider.getRelationshipsForCategory(categoryButton.category_id).subscribe(function (categoryRelationships) {
            if (categoryRelationships.subcategories.length > 0) {
                _this.getSubcategoriesAndLoadPage(categoryButton.category_id);
            }
            else if (categoryRelationships.activities.length > 0) {
                _this.getDifficultyLevelsForCategoryAndLoadPage(categoryButton.category_id);
            }
        }, function (error) {
            _this.handleError(error);
        });
    };
    ActivityCategoriesPage.prototype.getDifficultyLevelsForCategoryAndLoadPage = function (categoryId) {
        var _this = this;
        this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(function (activitiesIds) {
            if (activitiesIds != null) {
                _this.activityProvider.getActivitiesByIds(activitiesIds).subscribe(function (activities) {
                    console.log(activities);
                    _this.getDifficultyLevelsForActivitiesAndLoadPage(activities, categoryId);
                }, function (error) {
                    _this.handleError(error);
                });
            }
        }, function (error) {
            _this.handleError(error);
        });
    };
    ActivityCategoriesPage.prototype.getDifficultyLevelsForActivitiesAndLoadPage = function (activities, categoryId) {
        var _this = this;
        this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities).then(function (difficultyLevels) {
            // this.loaderService.hideLoader();
            _this.navCtrl.push("DifficultyLevelsPage", { levels: difficultyLevels, categoryId: categoryId, activities: activities });
        });
    };
    ActivityCategoriesPage.prototype.getSubcategoriesAndLoadPage = function (categoryId) {
        var _this = this;
        this.activityCategoryProvider.getSubcategoriesForCategory(categoryId).then(function (subcategoriesIds) {
            console.log("subcategoriesIds", subcategoriesIds);
            if (subcategoriesIds != null) {
                _this.activityCategoryProvider.getCategoriesByIds(subcategoriesIds).subscribe(function (subcategories) {
                    // this.loaderService.hideLoader();
                    _this.navCtrl.push("ActivityCategoriesPage", { categories: subcategories, parentCategoryId: categoryId });
                });
            }
            else {
                _this.loaderService.hideLoader();
            }
        });
    };
    ActivityCategoriesPage.prototype.goToHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    return ActivityCategoriesPage;
}());
ActivityCategoriesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-activity-categories',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/activity-categories/activity-categories.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ getPageTitle() }}</ion-title>\n    <ion-buttons end>\n      <button (click)="goToHome()" class="homeBtn">\n        <ion-icon name="md-home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="description">Επιλέξτε μια κατηγορία</div>\n\n  <buttons-list *ngIf=\'categories?.length > 0\' [buttons]="categories" (buttonClick)="selectCategory($event)"></buttons-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/activity-categories/activity-categories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_activity_category_activity_category__["a" /* ActivityCategoryProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_activity_activity__["a" /* ActivityProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_difficulty_level_difficulty_level__["a" /* DifficultyLevelProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_loader_service_loader_service__["a" /* LoaderService */]])
], ActivityCategoriesPage);

//# sourceMappingURL=activity-categories.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map