webpackJsonp([6],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageModule", function() { return StatisticsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistics__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StatisticsPageModule = /** @class */ (function () {
    function StatisticsPageModule() {
    }
    StatisticsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__statistics__["a" /* StatisticsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__statistics__["a" /* StatisticsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__statistics__["a" /* StatisticsPage */]
            ]
        })
    ], StatisticsPageModule);
    return StatisticsPageModule;
}());

//# sourceMappingURL=statistics.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(45);
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
 * Generated class for the StatisticsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StatisticsPage = /** @class */ (function () {
    function StatisticsPage(navCtrl, navParams, activityProvider, loaderService, events, translate, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityProvider = activityProvider;
        this.loaderService = loaderService;
        this.events = events;
        this.translate = translate;
        this.platform = platform;
        this.statistics = [];
        this.loaderService.showLoader();
    }
    StatisticsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.events.subscribe('lang_ready', function (langCode) {
            _this.setUpPageElements();
        });
        this.platform.ready().then(function () {
            _this.translate.get('app_name').subscribe(function () {
                _this.setUpPageElements();
            });
        });
    };
    StatisticsPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe('lang_ready');
    };
    StatisticsPage.prototype.setUpPageElements = function () {
        var _this = this;
        this.activityProvider.getNumberOfActivitiesForLastMonth().then(function (numberOfDays) {
            _this.numberOfDaysForLastMonth = numberOfDays.filter(daysThatAreTrue).length.toString();
            _this.statistics.push({ title: _this.translate.instant('for_the_last_month'), value: _this.numberOfDaysForLastMonth });
        });
        this.activityProvider.getNumberOfActivitiesForLastTwoWeeks().then(function (numberOfDays) {
            _this.numberOfDaysForLastTwoWeeks = numberOfDays.filter(daysThatAreTrue).length.toString();
            _this.statistics.push({
                title: _this.translate.instant('for_the_last_weeks'),
                value: _this.numberOfDaysForLastTwoWeeks
            });
        });
        this.activityProvider.getNumberOfActivitiesForLastThreeMonths().then(function (numberOfDays) {
            _this.numberOfDaysForThreeMonths = numberOfDays.filter(daysThatAreTrue).length.toString();
            _this.statistics.push({
                title: _this.translate.instant('for_the_last_months'),
                value: _this.numberOfDaysForThreeMonths
            });
            _this.loaderService.hideLoader();
        });
        function daysThatAreTrue(item) {
            return item == "true";
        }
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/pages/statistics/statistics.html"*/'<!--\n  Generated template for the StatisticsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'exercise_history\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h4>{{ \'days_that_exercises_were_performed\' | translate }}</h4>\n  <ion-grid>\n    <div class="statistics" *ngFor="let statistic of statistics">\n      <ion-row>\n        <ion-col col-9>\n          <p class="date">{{ statistic.title }}:</p>\n        </ion-col>\n        <ion-col col-3>\n          <p class="value">{{ statistic.value }}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/pages/statistics/statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ })

});
//# sourceMappingURL=6.js.map