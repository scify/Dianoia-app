webpackJsonp([0],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cards_list_cards_list_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_buttons_list_buttons_list_module__ = __webpack_require__(292);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_cards_list_cards_list_module__["a" /* CardsListComponentModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_buttons_list_buttons_list_module__["a" /* ButtonsListComponentModule */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_list__ = __webpack_require__(295);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardsListComponentModule = (function () {
    function CardsListComponentModule() {
    }
    return CardsListComponentModule;
}());
CardsListComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cards_list__["a" /* CardsListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cards_list__["a" /* CardsListComponent */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__cards_list__["a" /* CardsListComponent */]
        ]
    })
], CardsListComponentModule);

//# sourceMappingURL=cards-list.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponent; });
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
var CardsListComponent = (function () {
    function CardsListComponent() {
        this.cardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
    }
    CardsListComponent.prototype.getCardsListTitle = function () {
        var title = this.cards.length;
        if (!this.cards)
            return '';
        if (this.cards[0].id) {
            return this.cards.length == 1 ? title + " δραστηριότητα:" : title + " δραστηριότητες:";
        }
    };
    CardsListComponent.prototype.onCardClick = function (card) {
        this.cardClick.emit(card);
    };
    return CardsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])('cards'),
    __metadata("design:type", Array)
], CardsListComponent.prototype, "cards", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
    __metadata("design:type", Object)
], CardsListComponent.prototype, "cardClick", void 0);
CardsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'cards-list',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/components/cards-list/cards-list.html"*/'\n<div class="title">{{ getCardsListTitle() }}</div>\n\n<ion-card mode="ios" *ngFor="let card of cards" (click)="onCardClick(card)">\n  <button ion-item no-padding>\n    <ion-item no-padding style="background: rgba(0,0,0,0);">\n      <ion-card-header text-wrap>\n        {{ card.title }}\n      </ion-card-header>\n      <ion-card-content>\n        <p>\n          {{ card.description }}\n        </p>\n      </ion-card-content>\n    </ion-item>\n  </button>\n\n</ion-card>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/components/cards-list/cards-list.html"*/
    }),
    __metadata("design:paramtypes", [])
], CardsListComponent);

//# sourceMappingURL=cards-list.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_activity_category_activity_category__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_difficulty_level_difficulty_level__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_storage_app_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, activityProvider, loaderService, activityCategoryProvider, difficultyLevelProvider, http, appStorage, alertProvider, platform) {
        // this.loaderService.showLoader();
        var _this = this;
        this.navCtrl = navCtrl;
        this.activityProvider = activityProvider;
        this.loaderService = loaderService;
        this.activityCategoryProvider = activityCategoryProvider;
        this.difficultyLevelProvider = difficultyLevelProvider;
        this.http = http;
        this.appStorage = appStorage;
        this.alertProvider = alertProvider;
        this.platform = platform;
        this.tab1Root = "RandomActivitiesPage";
        this.tab2Root = "RandomActivitiesPage";
        // this.activityCategoryProvider.getActivitiesForCategory("common_activities").subscribe(activityIds => {
        //   console.log(activityIds);
        //   this.activityProvider.getActivitiesByIds(this.shuffle(activityIds)).subscribe(activities => {
        //     this.activities = activities;
        //     this.loaderService.hideLoader();
        //   });
        // });
        this.buttons = [
            { id: "basic_info", title: 'Ας μάθουμε τα βασικά', subtitle: "Τι είναι - Σκοπός - Αξία", component: "BasicInfoPage" },
            { id: "mental_activities", title: 'Εκτυπώστε νοητικές ασκήσεις', subtitle: "Ασκήσεις με μολύβι και χαρτί", component: "InfoListPage", pageCode: "page_goal", pageFile: "pages/goal.json" },
            { id: "common_activities", title: 'Βρείτε δημιουργικές δραστηριότητες', subtitle: "Ιδέες για να περάσετε δημιουργικό χρόνο μαζί", component: "InfoListPage", pageCode: "page_value", pageFile: "pages/value.json" }
        ];
        this.appStorage.get('app_installed').then(function (data) {
            var dataInstalled = JSON.parse(data);
            if (dataInstalled) {
                _this.checkForAnnouncement();
            }
            _this.appStorage.set('app_installed', true);
        });
    }
    HomePage.prototype.checkForAnnouncement = function () {
        var _this = this;
        this.http.get('http://scify.org/dianoiaAnnouncement.html').subscribe(function (data) {
            if (data) {
                var lastUpdatedString = data.headers.get('last-modified');
                console.log(data);
                if (lastUpdatedString) {
                    var lastUpdatedDate = new Date(lastUpdatedString);
                    _this.showAnnouncementIfNewerThan(lastUpdatedDate, data.text());
                }
            }
        });
    };
    HomePage.prototype.showAnnouncementIfNewerThan = function (date, htmlToSHow) {
        var _this = this;
        console.log(date);
        var lastUpdatedMills = date.getTime();
        console.log("lastUpdatedMills", lastUpdatedMills);
        this.appStorage.get('announcement_last_modified').then(function (data) {
            var announcementLastUpdated = JSON.parse(data);
            if (announcementLastUpdated)
                announcementLastUpdated = parseInt(announcementLastUpdated);
            console.log("announcementLastUpdated", announcementLastUpdated);
            console.log("this.strip(htmlToSHow)", _this.strip(htmlToSHow) == "");
            if (announcementLastUpdated < lastUpdatedMills && _this.platform.is('cordova') && _this.strip(htmlToSHow) !== "") {
                console.log("Showing new announcement");
                console.log("htmlToSHow", htmlToSHow);
                _this.alertProvider.announcementDialog("Announcement", htmlToSHow);
                _this.appStorage.set('announcement_last_modified', lastUpdatedMills);
            }
        });
    };
    HomePage.prototype.strip = function (html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        var str = tmp.textContent || tmp.innerText || "";
        console.log(str.replace(/(\r\n|\n|\r)/gm, "").trim());
        return str.replace(/(\r\n|\n|\r)/gm, "").trim();
    };
    HomePage.prototype.selectActivity = function (activity) {
        this.navCtrl.push("ActivityPage", { activity: activity });
    };
    HomePage.prototype.shuffle = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    HomePage.prototype.goTo = function (button) {
        var _this = this;
        switch (button.id) {
            case "basic_info":
                this.navCtrl.push(button.component, { pageData: button });
                break;
            case "mental_activities":
                this.loaderService.showLoader();
                this.activityCategoryProvider.getSubcategoriesForCategory("mental_activities").then(function (subCategoriesIds) {
                    _this.activityCategoryProvider.getCategoriesByIds(subCategoriesIds).subscribe(function (categories) {
                        _this.navCtrl.push("ActivityCategoriesPage", { categories: categories, parentCategoryId: "mental_activities" });
                        _this.loaderService.hideLoader();
                    });
                });
                break;
            case "common_activities":
                this.loaderService.showLoader();
                this.getDifficultyLevelsForCategoryAndLoadPage("common_activities");
                break;
        }
    };
    HomePage.prototype.getDifficultyLevelsForCategoryAndLoadPage = function (categoryId) {
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
    HomePage.prototype.getDifficultyLevelsForActivitiesAndLoadPage = function (activities, categoryId) {
        var _this = this;
        this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities).then(function (difficultyLevels) {
            // this.loaderService.hideLoader();
            _this.navCtrl.push("DifficultyLevelsPage", { levels: difficultyLevels, categoryId: categoryId, activities: activities });
        });
    };
    HomePage.prototype.handleError = function (error) {
        console.log(error);
        this.loaderService.hideLoader();
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>διΆνοια</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div padding>\n    <div class="logoContainer">\n      <img class="logo" src="assets/img/icon.png">\n    </div>\n  </div>\n\n  <div class="activitiesContainer">\n    <div padding style="padding-bottom: 0">\n      <buttons-list *ngIf=\'buttons?.length > 0\' [buttons]="buttons" (buttonClick)="goTo($event)"></buttons-list>\n    </div>\n    <p padding>Δείτε περισσότερες επιλογές στο κεντρικό μενού</p>\n    <!--<cards-list *ngIf="activities?.length > 0" [cards]="activities" (cardClick)="selectActivity($event)"></cards-list>-->\n  </div>\n  <!--<ion-tabs>-->\n    <!--<ion-tab [root]="tab1Root" tabTitle="Activities" tabIcon="ios-list-outline"></ion-tab>-->\n    <!--<ion-tab [root]="tab2Root" tabTitle="Σχετικά" tabIcon="information-circle"></ion-tab>-->\n  <!--</ion-tabs>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__["a" /* ActivityProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_4__providers_activity_category_activity_category__["a" /* ActivityCategoryProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_difficulty_level_difficulty_level__["a" /* DifficultyLevelProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__providers_app_storage_app_storage__["a" /* AppStorageProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map