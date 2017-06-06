webpackJsonp([5],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistics__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageModule", function() { return StatisticsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatisticsPageModule = (function () {
    function StatisticsPageModule() {
    }
    return StatisticsPageModule;
}());
StatisticsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__statistics__["a" /* StatisticsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__statistics__["a" /* StatisticsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__statistics__["a" /* StatisticsPage */]
        ]
    })
], StatisticsPageModule);

//# sourceMappingURL=statistics.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
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
var StatisticsPage = (function () {
    function StatisticsPage(navCtrl, navParams, activityProvider, loaderService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityProvider = activityProvider;
        this.loaderService = loaderService;
        this.statistics = [];
        this.loaderService.showLoader();
        activityProvider.getNumberOfActivitiesForLastMonth().then(function (numberOfDays) {
            console.log(numberOfDays.filter(daysThatAreTrue).length);
            _this.numberOfDaysForLastMonth = numberOfDays.filter(daysThatAreTrue).length.toString();
            _this.statistics.push({ title: "Για τον τελευταίο μήνα", value: _this.numberOfDaysForLastMonth });
        });
        activityProvider.getNumberOfActivitiesForLastTwoWeeks().then(function (numberOfDays) {
            console.log(numberOfDays.filter(daysThatAreTrue).length);
            _this.numberOfDaysForLastTwoWeeks = numberOfDays.filter(daysThatAreTrue).length.toString();
            _this.statistics.push({ title: "Για το τελευταίο 15 ήμερο", value: _this.numberOfDaysForLastTwoWeeks });
        });
        activityProvider.getNumberOfActivitiesForLastThreeMonths().then(function (numberOfDays) {
            console.log(numberOfDays.filter(daysThatAreTrue).length);
            _this.numberOfDaysForThreeMonths = numberOfDays.filter(daysThatAreTrue).length.toString();
            _this.statistics.push({ title: "Για το τελευταίο 3 μηνο", value: _this.numberOfDaysForThreeMonths });
            _this.loaderService.hideLoader();
        });
        function daysThatAreTrue(item) {
            return item == "true";
        }
    }
    StatisticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticsPage');
    };
    return StatisticsPage;
}());
StatisticsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-statistics',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/statistics/statistics.html"*/'<!--\n  Generated template for the StatisticsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ιστορικό Δραστηριοτήτων</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h4>Ημέρες που πραγματοποιήθηκαν ασκήσεις</h4>\n  <ion-grid>\n    <div class="statistics" *ngFor="let statistic of statistics">\n      <ion-row>\n        <ion-col col-9>\n          <p class="date">{{ statistic.title }}:</p>\n        </ion-col>\n        <ion-col col-3>\n          <p class="value">{{ statistic.value }}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/statistics/statistics.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loader_service_loader_service__["a" /* LoaderService */]])
], StatisticsPage);

//# sourceMappingURL=statistics.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map