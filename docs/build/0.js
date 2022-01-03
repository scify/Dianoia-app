webpackJsonp([0],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cards_list_cards_list_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_buttons_list_buttons_list_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_cards_list_cards_list_module__["a" /* CardsListComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_buttons_list_buttons_list_module__["a" /* ButtonsListComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_list__ = __webpack_require__(348);
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

/***/ 348:
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_list__ = __webpack_require__(350);
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loader_service_loader_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_storage_app_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loaderService, http, appStorage, statusBar, alertProvider, platform, iab, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loaderService = loaderService;
        this.http = http;
        this.appStorage = appStorage;
        this.statusBar = statusBar;
        this.alertProvider = alertProvider;
        this.platform = platform;
        this.iab = iab;
        this.translate = translate;
        this.iconPath = 'assets/img/en/icon.png';
        if (platform.is('cordova')) {
            if (platform.is('android')) {
                statusBar.overlaysWebView(false);
                statusBar.backgroundColorByHexString("#002984");
                statusBar.styleBlackOpaque();
            }
            else {
                statusBar.overlaysWebView(true);
                statusBar.styleDefault();
            }
            this.checkForAnnouncement();
        }
        this.translate.onLangChange.subscribe(function () {
            _this.setUpPageElements();
        });
    }
    HomePage.prototype.ionViewWillLoad = function () {
        this.setUpPageElements();
    };
    HomePage.prototype.setUpPageElements = function () {
        this.iconPath = "assets/img/" + this.translate.currentLang + "/icon.png";
        this.buttons = [
            {
                id: "basic_info",
                title: this.translate.instant('basic_info_btn_title'),
                subtitle: this.translate.instant('basic_info_btn_subtitle'),
                component: "BasicInfoPage",
                pageName: 'basic-info'
            },
            {
                id: "mental_activities",
                title: this.translate.instant('mental_activities_btn_title'),
                subtitle: this.translate.instant('mental_activities_btn_subtitle'),
                component: "InfoListPage",
                pageCode: "page_goal",
                pageFile: "pages/" + this.translate.currentLang + "/goal.json"
            },
            {
                id: "common_activities",
                title: this.translate.instant('common_activities_btn_title'),
                subtitle: this.translate.instant('common_activities_btn_subtitle'),
                component: "InfoListPage",
                pageCode: "page_value",
                pageFile: "pages/" + this.translate.currentLang + "/value.json"
            },
            {
                id: "stories",
                title: this.translate.instant('stories_btn_title'),
                subtitle: this.translate.instant('stories_btn_subtitle'),
            },
            {
                id: "carer_activities",
                title: this.translate.instant('carer_activities_btn_title'),
                subtitle: this.translate.instant('carer_activities_btn_subtitle'),
                component: "InfoListPage",
                pageCode: "page_value",
                pageFile: "pages/" + this.translate.currentLang + "/value.json"
            }
        ];
    };
    HomePage.prototype.checkForAnnouncement = function () {
        var _this = this;
        this.http.get('http://scify.org/dianoiaAnnouncement.html').subscribe(function (data) {
            if (data) {
                var lastUpdatedString = data.headers.get('last-modified');
                if (lastUpdatedString) {
                    var lastUpdatedDate = new Date(lastUpdatedString);
                    _this.showAnnouncementIfNewerThan(lastUpdatedDate, data.text());
                }
            }
        });
    };
    HomePage.prototype.showAnnouncementIfNewerThan = function (date, htmlToSHow) {
        var _this = this;
        var lastUpdatedMills = date.getTime();
        this.appStorage.get('announcement_last_modified').then(function (data) {
            var announcementLastUpdated = JSON.parse(data);
            if (announcementLastUpdated)
                announcementLastUpdated = parseInt(announcementLastUpdated);
            if (announcementLastUpdated < lastUpdatedMills && _this.platform.is('cordova') && _this.strip(htmlToSHow) !== "") {
                _this.alertProvider.announcementDialog("Announcement", htmlToSHow);
                _this.appStorage.set('announcement_last_modified', lastUpdatedMills);
            }
        });
    };
    HomePage.prototype.strip = function (html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        var str = tmp.textContent || tmp.innerText || "";
        return str.replace(/(\r\n|\n|\r)/gm, "").trim();
    };
    HomePage.prototype.goTo = function (button) {
        console.log(button);
        switch (button.id) {
            case "basic_info":
                this.navCtrl.push(button.pageName, { pageData: button });
                break;
            case "mental_activities":
                this.loaderService.showLoader();
                this.navCtrl.push("ActivityCategoriesPage", {
                    parentCategoryId: "mental_activities"
                });
                break;
            default:
                this.loaderService.showLoader();
                this.navCtrl.push("DifficultyLevelsPage", {
                    categoryId: button.id,
                });
                break;
        }
    };
    HomePage.prototype.openLink = function (url) {
        this.iab.create(url);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'app_name\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div padding>\n    <div class="logoContainer">\n      <img class="logo" [src]="iconPath">\n    </div>\n  </div>\n\n  <div class="activitiesContainer">\n    <div padding style="padding-bottom: 0">\n      <buttons-list *ngIf=\'buttons?.length > 0\' [buttons]="buttons" (buttonClick)="goTo($event)"></buttons-list>\n      <div class="buttonsContainer">\n        <button padding mode="ios" ion-button full\n                style="padding-top: 12px; padding-bottom: 12px;"\n                *ngIf="!platform.is(\'cordova\')"\n                (click)="openLink(\'https://play.google.com/store/apps/details?id=org.scify.dianoia.app&hl=el\')">\n          <img style="height: 100%; margin-right: 15px;" src="assets/img/google-play.png">\n          {{ \'download_app\' | translate }}\n        </button>\n      </div>\n    </div>\n    <p padding class="text-center">{{ \'see_more_options\' | translate }}</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loader_service_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_storage_app_storage__["a" /* AppStorageProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map