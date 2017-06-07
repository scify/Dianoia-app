webpackJsonp([3],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cards_list_cards_list_module__ = __webpack_require__(291);
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
            __WEBPACK_IMPORTED_MODULE_3__components_cards_list_cards_list_module__["a" /* CardsListComponentModule */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_list__ = __webpack_require__(292);
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

/***/ 292:
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

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_activity_category_activity_category__ = __webpack_require__(206);
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
    function HomePage(navCtrl, activityProvider, loaderService, activityCategoryProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.activityProvider = activityProvider;
        this.loaderService = loaderService;
        this.activityCategoryProvider = activityCategoryProvider;
        this.tab1Root = "RandomActivitiesPage";
        this.tab2Root = "RandomActivitiesPage";
        this.loaderService.showLoader();
        this.activityCategoryProvider.getActivitiesForCategory("common_activities").subscribe(function (activityIds) {
            console.log(activityIds);
            _this.activityProvider.getActivitiesByIds(_this.shuffle(activityIds)).subscribe(function (activities) {
                _this.activities = activities;
                _this.loaderService.hideLoader();
            });
        });
    }
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
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>διΆνοια</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div padding>\n    <div class="logoContainer">\n      <img class="logo" src="assets/img/icon.png">\n    </div>\n  </div>\n\n\n  <div class="activitiesContainer">\n    <p padding>Επιλέξτε μια από τις κοινές δραστηριότητες, ή δείτε περισσότερες επιλέγοντας το μενού.</p>\n    <cards-list *ngIf="activities?.length > 0" [cards]="activities" (cardClick)="selectActivity($event)"></cards-list>\n  </div>\n  <!--<ion-tabs>-->\n    <!--<ion-tab [root]="tab1Root" tabTitle="Activities" tabIcon="ios-list-outline"></ion-tab>-->\n    <!--<ion-tab [root]="tab2Root" tabTitle="Σχετικά" tabIcon="information-circle"></ion-tab>-->\n  <!--</ion-tabs>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__["a" /* ActivityProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_4__providers_activity_category_activity_category__["a" /* ActivityCategoryProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map