webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_categories__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list__ = __webpack_require__(276);
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
            __WEBPACK_IMPORTED_MODULE_2__activity_categories__["a" /* ActivityCategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list__["a" /* ButtonsListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_categories__["a" /* ActivityCategoriesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__activity_categories__["a" /* ActivityCategoriesPage */]
        ]
    })
], TopActivityCategoriesPageModule);

//# sourceMappingURL=activity-categories.module.js.map

/***/ }),

/***/ 276:
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
        this.buttonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* EventEmitter */]();
    }
    ButtonsListComponent.prototype.ngAfterViewInit = function () {
        console.log("buttons", this.buttons);
    };
    ButtonsListComponent.prototype.onButtonClick = function (button) {
        this.buttonClick.emit(button);
    };
    return ButtonsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])('buttons'),
    __metadata("design:type", Array)
], ButtonsListComponent.prototype, "buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], ButtonsListComponent.prototype, "buttonClick", void 0);
ButtonsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'buttons-list',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/components/buttons-list/buttons-list.html"*/'<!-- Generated template for the ButtonsListComponent component -->\n<div>\n  <div class="buttonsContainer">\n    <p *ngFor="let button of buttons">\n      <button mode="ios" ion-button full (click)="onButtonClick(button)">{{ button.title }}</button>\n    </p>\n  </div>\n</div>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/components/buttons-list/buttons-list.html"*/
    }),
    __metadata("design:paramtypes", [])
], ButtonsListComponent);

//# sourceMappingURL=buttons-list.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_category_activity_category__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_activity_activity__ = __webpack_require__(203);
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
    function ActivityCategoriesPage(navCtrl, navParams, activityCategoryProvider, activityProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityCategoryProvider = activityCategoryProvider;
        this.activityProvider = activityProvider;
        this.categories = this.navParams.get("categories");
        // if no categories passed as parameter, load top-level categories
        if (this.categories == null) {
            this.activityCategoryProvider.getTopLevelCategories().then(function (categories) {
                _this.categories = categories;
            });
        }
    }
    ActivityCategoriesPage.prototype.selectCategory = function (categoryButton) {
        var _this = this;
        // if the selected category has subcategories, get the subcategories and load the page again
        this.activityCategoryProvider.getRelationshipsForCategory(categoryButton.category_id).subscribe(function (categoryRelationships) {
            if (categoryRelationships.subcategories.length > 0) {
                _this.getSubcategoriesAndLoadPage(categoryButton.category_id);
            }
            else if (categoryRelationships.activities.length > 0) {
                _this.getActivitiesAndLoadPage(categoryButton.category_id);
            }
        });
    };
    ActivityCategoriesPage.prototype.getActivitiesAndLoadPage = function (categoryId) {
        var _this = this;
        this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(function (activitiesIds) {
            if (activitiesIds != null) {
                _this.activityProvider.getActivitiesByIds(activitiesIds).subscribe(function (activities) {
                    console.log("activities", activities);
                });
            }
        });
    };
    ActivityCategoriesPage.prototype.getSubcategoriesAndLoadPage = function (categoryId) {
        var _this = this;
        this.activityCategoryProvider.getSubcategoriesForCategory(categoryId).subscribe(function (subcategoriesIds) {
            if (subcategoriesIds != null) {
                _this.activityCategoryProvider.getCategoriesByIds(subcategoriesIds).subscribe(function (subcategories) {
                    console.log("subcategories", subcategories);
                    _this.navCtrl.push("ActivityCategoriesPage", { categories: subcategories });
                });
            }
        });
    };
    return ActivityCategoriesPage;
}());
ActivityCategoriesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-activity-categories',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/activity-categories/activity-categories.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Κατηγορίες ασκήσεων</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="description">Select a category</div>\n\n  <buttons-list *ngIf=\'categories?.length > 0\' [buttons]="categories" (buttonClick)="selectCategory($event)"></buttons-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/activity-categories/activity-categories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_activity_category_activity_category__["a" /* ActivityCategoryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_activity_activity__["a" /* ActivityProvider */]])
], ActivityCategoriesPage);

//# sourceMappingURL=activity-categories.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map