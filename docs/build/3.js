webpackJsonp([3],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoListPageModule", function() { return InfoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_list__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cards_list_cards_list_module__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InfoListPageModule = /** @class */ (function () {
    function InfoListPageModule() {
    }
    InfoListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_list__["a" /* InfoListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_list__["a" /* InfoListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_cards_list_cards_list_module__["a" /* CardsListComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__info_list__["a" /* InfoListPage */]
            ]
        })
    ], InfoListPageModule);
    return InfoListPageModule;
}());

//# sourceMappingURL=info-list.module.js.map

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

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_page_page__ = __webpack_require__(235);
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
 * Generated class for the InfoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InfoListPage = /** @class */ (function () {
    function InfoListPage(navCtrl, navParams, pageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pageProvider = pageProvider;
        this.pageFile = "";
        this.pageCode = "";
        var pageData = this.navParams.get("pageData");
        this.pageFile = pageData.pageFile;
        this.pageCode = pageData.pageCode;
    }
    InfoListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.pageCode != null && this.pageFile != null)
            this.pageProvider.getDataForPage(this.pageCode, this.pageFile).subscribe(function (pageData) {
                _this.title = pageData.title;
                _this.description = pageData.description;
                _this.image = pageData.image;
                _this.list = pageData.list;
                _this.cards = pageData.cards;
                _this.bottomText = pageData.bottom_text;
            });
    };
    InfoListPage.prototype.selectCard = function (card) {
        this.navCtrl.push("ActivityPage", { activity: card, allActivities: this.cards, uniqueId: 'title' });
    };
    InfoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-list',template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/pages/info-list/info-list.html"*/'<!--\n  Generated template for the InfoListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div padding class="basicInfoContainer">\n  <div class="imgContainer" *ngIf="image">\n    <img [src]="\'assets/img/\' + image">\n  </div>\n\n  <div class="description">\n    {{ description }}\n  </div>\n  <ion-list class="aboutList" no-lines *ngIf="list">\n    <ion-item text-wrap *ngFor="let item of list">\n      <ion-icon name="ios-checkmark" item-left></ion-icon>\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n    <div class="bottom_text">\n      {{ bottomText }}\n    </div>\n  </div>\n\n\n\n  <div class="activitiesContainer" *ngIf=\'cards?.length > 0\'>\n    <cards-list [cards]="cards" (cardClick)="selectCard($event)"></cards-list>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/pages/info-list/info-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_page_page__["a" /* PageProvider */]])
    ], InfoListPage);
    return InfoListPage;
}());

//# sourceMappingURL=info-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map