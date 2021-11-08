webpackJsonp([5],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopActivityCategoriesPageModule", function() { return TopActivityCategoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_categories__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TopActivityCategoriesPageModule = /** @class */ (function () {
    function TopActivityCategoriesPageModule() {
    }
    TopActivityCategoriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activity_categories__["a" /* ActivityCategoriesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_categories__["a" /* ActivityCategoriesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list_module__["a" /* ButtonsListComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__activity_categories__["a" /* ActivityCategoriesPage */]
            ]
        })
    ], TopActivityCategoriesPageModule);
    return TopActivityCategoriesPageModule;
}());

//# sourceMappingURL=activity-categories.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_list__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonsListComponentModule = /** @class */ (function () {
    function ButtonsListComponentModule() {
    }
    ButtonsListComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buttons_list__["a" /* ButtonsListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buttons_list__["a" /* ButtonsListComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__buttons_list__["a" /* ButtonsListComponent */]
            ]
        })
    ], ButtonsListComponentModule);
    return ButtonsListComponentModule;
}());

//# sourceMappingURL=buttons-list.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
var ButtonsListComponent = /** @class */ (function () {
    function ButtonsListComponent() {
        this.buttonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ButtonsListComponent.prototype.onButtonClick = function (button) {
        this.buttonClick.emit(button);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('buttons'),
        __metadata("design:type", Array)
    ], ButtonsListComponent.prototype, "buttons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ButtonsListComponent.prototype, "buttonClick", void 0);
    ButtonsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'buttons-list',template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/components/buttons-list/buttons-list.html"*/'<!-- Generated template for the ButtonsListComponent component -->\n<div>\n  <div class="buttonsContainer">\n    <p *ngFor="let button of buttons">\n      <button [ngClass]="button.subtitle ? \'bigBtn\' : \'\'" mode="ios" ion-button full (click)="onButtonClick(button)">{{ button.title }} <div class="subtitle" *ngIf=\'button.subtitle\'>{{ button.subtitle }}</div></button>\n    </p>\n  </div>\n</div>\n\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/components/buttons-list/buttons-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsListComponent);
    return ButtonsListComponent;
}());

//# sourceMappingURL=buttons-list.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_category_activity_category__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityCategoriesPage = /** @class */ (function () {
    function ActivityCategoriesPage(navCtrl, navParams, activityCategoryProvider, loaderService, translate, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityCategoryProvider = activityCategoryProvider;
        this.loaderService = loaderService;
        this.translate = translate;
        this.platform = platform;
        this.pageTitle = '';
        this.categories = this.navParams.get("categories");
        this.translate.onLangChange.subscribe(function () {
            _this.setUpPageElements();
        });
    }
    ActivityCategoriesPage.prototype.ionViewWillLoad = function () {
        this.setUpPageElements();
    };
    ActivityCategoriesPage.prototype.setUpPageElements = function () {
        var _this = this;
        this.pageTitle = this.translate.instant('activity_categories');
        this.loaderService.showLoader();
        this.parentCategoryId = this.navParams.get("parentCategoryId");
        if (this.parentCategoryId) {
            this.initParentCategoryPage();
        }
        else {
            this.activityCategoryProvider.getTopLevelCategories().then(function (categories) {
                _this.categories = categories;
                _this.loaderService.hideLoader();
            }).catch(function (error) {
                _this.handleError(error);
            });
        }
    };
    ActivityCategoriesPage.prototype.initParentCategoryPage = function () {
        var _this = this;
        this.activityCategoryProvider.getCategoryById(this.parentCategoryId).then(function (category) {
            _this.parentCategory = category;
            _this.pageTitle = _this.parentCategory != null ? _this.parentCategory.title : _this.translate.instant('activity_categories');
            _this.activityCategoryProvider.getSubcategoriesForCategory(_this.parentCategoryId).then(function (subcategoriesIds) {
                if (subcategoriesIds != null) {
                    _this.activityCategoryProvider.getCategoriesByIds(subcategoriesIds).subscribe(function (subcategories) {
                        _this.categories = subcategories;
                        _this.loaderService.hideLoader();
                    });
                }
                else {
                    _this.loaderService.hideLoader();
                }
            });
        }).catch(function (error) {
            _this.handleError(error);
        });
    };
    ActivityCategoriesPage.prototype.handleError = function (error) {
        console.error(error);
        this.loaderService.hideLoader();
    };
    ActivityCategoriesPage.prototype.selectCategory = function (categoryButton) {
        var _this = this;
        // if the selected category has subcategories, get the subcategories and load the page again
        this.activityCategoryProvider.getRelationshipsForCategory(categoryButton.category_id).subscribe(function (categoryRelationships) {
            if (categoryRelationships.subcategories.length > 0) {
                _this.navCtrl.push("ActivityCategoriesPage", { parentCategoryId: categoryButton.category_id });
            }
            else if (categoryRelationships.activities.length > 0) {
                _this.navCtrl.push("DifficultyLevelsPage", {
                    categoryId: categoryButton.category_id
                });
            }
        }, function (error) {
            _this.handleError(error);
        });
    };
    ActivityCategoriesPage.prototype.goToHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    ActivityCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity-categories',template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/pages/activity-categories/activity-categories.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ pageTitle }}</ion-title>\n    <ion-buttons end>\n      <button (click)="goToHome()" class="homeBtn">\n        <ion-icon name="md-home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="description">{{ \'select_category\' | translate}}</div>\n\n  <buttons-list *ngIf=\'categories?.length > 0\' [buttons]="categories" (buttonClick)="selectCategory($event)"></buttons-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/pages/activity-categories/activity-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_activity_category_activity_category__["a" /* ActivityCategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], ActivityCategoriesPage);
    return ActivityCategoriesPage;
}());

//# sourceMappingURL=activity-categories.js.map

/***/ })

});
//# sourceMappingURL=5.js.map