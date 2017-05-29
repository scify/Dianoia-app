webpackJsonp([5],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity__ = __webpack_require__(286);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivityPageModule = (function () {
    function ActivityPageModule() {
    }
    return ActivityPageModule;
}());
ActivityPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]
        ]
    })
], ActivityPageModule);

//# sourceMappingURL=activity.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(207);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPage; });
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
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ActivityPage = (function () {
    function ActivityPage(navCtrl, navParams, activityProvider, iab, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityProvider = activityProvider;
        this.iab = iab;
        this.platform = platform;
        this.dailyActivityCompleted = false;
        var activityObj = this.navParams.get("activity");
        if (activityObj == null) {
            this.activityProvider.getRandomActivity().then(function (randomActivity) {
                _this.activity = randomActivity;
            });
        }
        else {
            this.activity = activityObj;
        }
        this.activityProvider.userHasCompletedActivityForToday().then(function (activityDone) {
            console.log(activityDone);
            activityDone == null ? _this.dailyActivityCompleted = false : _this.dailyActivityCompleted = true;
        });
    }
    ActivityPage.prototype.activityDoneForToday = function () {
        var _this = this;
        this.activityProvider.setActivityCompletedForToday().then(function (result) {
            _this.dailyActivityCompleted = true;
        });
    };
    ActivityPage.prototype.openLink = function (url) {
        this.iab.create(url);
    };
    return ActivityPage;
}());
ActivityPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-activity',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/activity/activity.html"*/'<!--\n  Generated template for the ActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ activity?.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-item>\n      <h2>{{ activity?.title }}</h2>\n      <!--<p>November 5, 1955</p>-->\n    </ion-item>\n\n    <!--<img src="img/advance-card-bttf.png">-->\n\n    <ion-card-content>\n      <p>{{ activity?.description }}</p>\n\n      <p *ngFor="let instruction of activity?.instructions">\n        {{ instruction }}\n      </p>\n      <div class="cardFooterContainer">\n        <a *ngIf="activity?.link && platform.is(\'core\')" href="{{ activity.link }}" target="_blank">Σύνδεσμος άσκησης</a>\n        <a *ngIf="activity?.link && !platform.is(\'core\')" (click)="openLink(activity.link)">Σύνδεσμος άσκησης</a>\n        <button ion-button icon-left small [disabled]="dailyActivityCompleted" (click)="activityDoneForToday()">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>Done</div>\n        </button>\n      </div>\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/activity/activity.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], ActivityPage);

//# sourceMappingURL=activity.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map