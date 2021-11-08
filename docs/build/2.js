webpackJsonp([2],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomActivitiesPageModule", function() { return RandomActivitiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__random_activities__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cards_list_cards_list_module__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RandomActivitiesPageModule = /** @class */ (function () {
    function RandomActivitiesPageModule() {
    }
    RandomActivitiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__random_activities__["a" /* RandomActivitiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__random_activities__["a" /* RandomActivitiesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_cards_list_cards_list_module__["a" /* CardsListComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__random_activities__["a" /* RandomActivitiesPage */]
            ]
        })
    ], RandomActivitiesPageModule);
    return RandomActivitiesPageModule;
}());

//# sourceMappingURL=random-activities.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_list__ = __webpack_require__(345);
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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(37);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], CardsListComponent);
    return CardsListComponent;
}());

//# sourceMappingURL=cards-list.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RandomActivitiesPage = /** @class */ (function () {
    function RandomActivitiesPage(navCtrl, navParams, activityProvider, loaderService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityProvider = activityProvider;
        this.loaderService = loaderService;
        this.loaderService.showLoader();
        this.activityProvider.getAllActivities().subscribe(function (activities) {
            _this.activities = activities;
            _this.loaderService.hideLoader();
        });
    }
    RandomActivitiesPage.prototype.selectActivity = function (activity) {
        this.navCtrl.push("ActivityPage", { activity: activity });
    };
    RandomActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-random-activities',template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/pages/random-activities/random-activities.html"*/'\n<ion-content no-padding>\n\n\n  <cards-list *ngIf="activities?.length > 0" [cards]="activities" (cardClick)="selectActivity($event)"></cards-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/pages/random-activities/random-activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__["a" /* ActivityProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__["a" /* LoaderService */]])
    ], RandomActivitiesPage);
    return RandomActivitiesPage;
}());

//# sourceMappingURL=random-activities.js.map

/***/ })

});
//# sourceMappingURL=2.js.map