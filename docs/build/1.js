webpackJsonp([1],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifficultyLevelsPageModule", function() { return DifficultyLevelsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__difficulty_levels__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cards_list_cards_list_module__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DifficultyLevelsPageModule = /** @class */ (function () {
    function DifficultyLevelsPageModule() {
    }
    DifficultyLevelsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__difficulty_levels__["a" /* DifficultyLevelsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__difficulty_levels__["a" /* DifficultyLevelsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list_module__["a" /* ButtonsListComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_cards_list_cards_list_module__["a" /* CardsListComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__difficulty_levels__["a" /* DifficultyLevelsPage */]
            ]
        })
    ], DifficultyLevelsPageModule);
    return DifficultyLevelsPageModule;
}());

//# sourceMappingURL=difficulty-levels.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_list__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardsListComponentModule = /** @class */ (function () {
    function CardsListComponentModule() {
    }
    CardsListComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cards_list__["a" /* CardsListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cards_list__["a" /* CardsListComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cards_list__["a" /* CardsListComponent */]
            ]
        })
    ], CardsListComponentModule);
    return CardsListComponentModule;
}());

//# sourceMappingURL=cards-list.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(45);
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
 * Generated class for the CardsListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var CardsListComponent = /** @class */ (function () {
    function CardsListComponent(platform, translate, events) {
        this.platform = platform;
        this.translate = translate;
        this.events = events;
        this.activityTranslationSingular = '';
        this.activityTranslationPlural = '';
        this.cardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CardsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.translate.get('activity_translation_singular').subscribe(function (translated) {
                _this.activityTranslationSingular = translated;
                _this.activityTranslationPlural = _this.translate.instant('activity_translation_plural');
            });
        });
        this.events.subscribe('lang_ready', function (langCode) {
            _this.activityTranslationSingular = _this.translate.instant('activity_translation_singular');
            _this.activityTranslationPlural = _this.translate.instant('activity_translation_plural');
        });
    };
    CardsListComponent.prototype.ngOnDestroy = function () {
    };
    CardsListComponent.prototype.getCardsListTitle = function () {
        var title = this.cards.length;
        if (!this.cards)
            return '';
        if (this.cards[0].id) {
            return this.cards.length == 1 ? title + " " + this.activityTranslationSingular + ":" : title + " " + this.activityTranslationPlural + ":";
        }
    };
    CardsListComponent.prototype.onCardClick = function (card) {
        this.cardClick.emit(card);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('cards'),
        __metadata("design:type", Array)
    ], CardsListComponent.prototype, "cards", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CardsListComponent.prototype, "cardClick", void 0);
    CardsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cards-list',template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/components/cards-list/cards-list.html"*/'\n<div class="title">{{ getCardsListTitle() }}</div>\n\n<ion-card mode="ios" *ngFor="let card of cards" (click)="onCardClick(card)">\n  <button ion-item no-padding>\n    <ion-item no-padding style="background: rgba(0,0,0,0);">\n      <ion-card-header text-wrap>\n        {{ card.title }}\n      </ion-card-header>\n      <ion-card-content>\n        <p>\n          {{ card.description }}\n        </p>\n      </ion-card-content>\n    </ion-item>\n  </button>\n\n</ion-card>\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/components/cards-list/cards-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], CardsListComponent);
    return CardsListComponent;
}());

//# sourceMappingURL=cards-list.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DifficultyLevelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_category_activity_category__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_difficulty_level_difficulty_level__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_activity_activity__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DifficultyLevelsPage = /** @class */ (function () {
    function DifficultyLevelsPage(navCtrl, navParams, loaderService, events, translate, platform, difficultyLevelProvider, activityCategoryProvider, activityProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loaderService = loaderService;
        this.events = events;
        this.translate = translate;
        this.platform = platform;
        this.difficultyLevelProvider = difficultyLevelProvider;
        this.activityCategoryProvider = activityCategoryProvider;
        this.activityProvider = activityProvider;
        this.pageTitle = '';
        this.categoryId = this.navParams.get("categoryId");
    }
    DifficultyLevelsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.events.subscribe('lang_ready', function (langCode) {
            _this.setUpPageElements();
        });
        this.platform.ready().then(function () {
            _this.translate.get('app_name').subscribe(function () {
                _this.setUpPageElements();
                _this.loaderService.hideLoader();
            });
        });
    };
    DifficultyLevelsPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe('lang_ready');
    };
    DifficultyLevelsPage.prototype.setUpPageElements = function () {
        var _this = this;
        this.pageTitle = this.translate.instant('activities_exercises');
        if (this.categoryId == null)
            return this.navCtrl.setRoot("HomePage");
        this.activityCategoryProvider.getActivitiesForCategory(this.categoryId).subscribe(function (activitiesIds) {
            if (activitiesIds != null) {
                _this.activityProvider.getActivitiesByIds(activitiesIds).then(function (activities) {
                    _this.allActivities = activities;
                    _this.activities = activities;
                    _this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities).then(function (difficultyLevels) {
                        _this.levels = difficultyLevels;
                        _this.levels.unshift({ id: "0", title: _this.translate.instant('all_difficulty_levels') });
                        _this.pageTitle = _this.category != null ? _this.category.title : _this.translate.instant('activities_exercises');
                        _this.loaderService.hideLoader();
                    });
                }, function (error) {
                    _this.handleError(error);
                });
            }
        }, function (error) {
            _this.handleError(error);
        });
    };
    DifficultyLevelsPage.prototype.selectLevel = function (levelButton) {
        if (levelButton.id == 0) {
            this.activities = this.allActivities;
        }
        else {
            this.activities = [];
            for (var _i = 0, _a = this.allActivities; _i < _a.length; _i++) {
                var activity = _a[_i];
                if (activity.difficulty_level_id == levelButton.id) {
                    this.activities.push(activity);
                }
            }
        }
    };
    DifficultyLevelsPage.prototype.selectActivity = function (activity) {
        this.navCtrl.push("ActivityPage", { activity: activity, allActivities: this.activities, uniqueId: 'id' });
    };
    DifficultyLevelsPage.prototype.goToHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    DifficultyLevelsPage.prototype.handleError = function (error) {
        console.error(error);
        this.loaderService.hideLoader();
    };
    DifficultyLevelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-difficulty-levels',template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/pages/difficulty-levels/difficulty-levels.html"*/'<!--\n  Generated template for the DifficultyLevelsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> {{ pageTitle }}</ion-title>\n    <ion-buttons end>\n      <button (click)="goToHome()" class="homeBtn">\n        <ion-icon name="md-home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div padding *ngIf=\'levels?.length > 2\'>\n    <div class="description">{{ \'select_difficulty_level\' | translate }}</div>\n    <buttons-list [buttons]="levels" (buttonClick)="selectLevel($event)"></buttons-list>\n  </div>\n\n  <div class="activitiesContainer">\n    <cards-list *ngIf=\'activities?.length > 0\' [cards]="activities" (cardClick)="selectActivity($event)"></cards-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/pages/difficulty-levels/difficulty-levels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_difficulty_level_difficulty_level__["a" /* DifficultyLevelProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_activity_category_activity_category__["a" /* ActivityCategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_activity_activity__["a" /* ActivityProvider */]])
    ], DifficultyLevelsPage);
    return DifficultyLevelsPage;
}());

//# sourceMappingURL=difficulty-levels.js.map

/***/ })

});
//# sourceMappingURL=1.js.map