webpackJsonp([9],{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity__ = __webpack_require__(860);
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

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__ = __webpack_require__(177);
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
    function ActivityPage(navCtrl, navParams, activityProvider, iab, platform, alert, socialSharing, notificationProvider, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityProvider = activityProvider;
        this.iab = iab;
        this.platform = platform;
        this.alert = alert;
        this.socialSharing = socialSharing;
        this.notificationProvider = notificationProvider;
        this.viewCtrl = viewCtrl;
        this.dailyActivityCompleted = false;
        this.allActivities = [];
        var activityObj = this.navParams.get("activity");
        console.log("activityObj", activityObj);
        if (!activityObj) {
            this.activityProvider.getRandomActivity().then(function (randomActivity) {
                _this.activity = randomActivity;
            });
        }
        else {
            this.activity = activityObj;
        }
        this.allActivities = this.navParams.get("allActivities");
        this.activityUniqueId = this.navParams.get("uniqueId");
        console.log(platform.is('cordova'));
    }
    ActivityPage.prototype.nextActivity = function () {
        for (var i = 0; i < this.allActivities.length; i++) {
            if (this.activityUniqueId == 'title') {
                if (this.activity.title == this.allActivities[i].title) {
                    this.loadNextActivity(this.allActivities[i + 1], 'forward');
                    break;
                }
            }
            else if (this.activityUniqueId == 'id') {
                if (this.activity.id == this.allActivities[i].id) {
                    this.loadNextActivity(this.allActivities[i + 1], 'forward');
                    break;
                }
            }
        }
    };
    ActivityPage.prototype.previousActivity = function () {
        for (var i = 0; i < this.allActivities.length; i++) {
            if (this.activityUniqueId == 'title') {
                if (this.activity.title == this.allActivities[i].title) {
                    this.loadNextActivity(this.allActivities[i - 1], 'back');
                    break;
                }
            }
            else if (this.activityUniqueId == 'id') {
                if (this.activity.id == this.allActivities[i].id) {
                    this.loadNextActivity(this.allActivities[i - 1], 'back');
                    break;
                }
            }
        }
    };
    ActivityPage.prototype.loadNextActivity = function (nextActivity, animationDirection) {
        var _this = this;
        if (nextActivity) {
            this.navCtrl.push("ActivityPage", {
                activity: nextActivity,
                allActivities: this.allActivities,
                uniqueId: this.activityUniqueId
            }, { animate: true, animation: 'ios-transition', direction: animationDirection }).then(function () {
                var index = _this.viewCtrl.index;
                _this.navCtrl.remove(index);
            });
        }
    };
    ActivityPage.prototype.activityIsNotFirst = function () {
        if (this.allActivities)
            return this.allActivities[0] !== this.activity;
        return false;
    };
    ActivityPage.prototype.activityIsNotLast = function () {
        if (this.allActivities)
            return this.allActivities[this.allActivities.length - 1] !== this.activity;
        return false;
    };
    ActivityPage.prototype.activityDoneForToday = function () {
        var _this = this;
        this.activityProvider.setActivityCompletedForToday().then(function (result) {
            _this.dailyActivityCompleted = true;
            if (!_this.platform.is('core')) {
                _this.alert.displayToast("Η άσκηση για σήμερα καταγράφηκε");
            }
        });
    };
    ActivityPage.prototype.openLink = function (url) {
        this.iab.create(url);
    };
    ActivityPage.prototype.share = function (activity) {
        var _this = this;
        var options = {
            message: 'ΔιΆνοια - δραστηριότητα: ' + activity.title + "    ",
            subject: 'ΔιΆνοια - δραστηριότητα: ' + activity.title,
            url: activity.link,
            chooserTitle: 'Κοινοποίηση με...'
        };
        this.socialSharing.shareWithOptions(options).then(function (result) {
            console.log(result);
            // if(result.completed)
            //this.alert.displayToast("Η δραστηριοτητα κοινοποιηθηκε");
        }).catch(function (error) {
            _this.alert.textDialog("Error", "Αυτή η συσκευή δεν υποστηρίζει κοινοποίηση");
        });
    };
    ActivityPage.prototype.swipeActivity = function (event) {
        console.log(event.direction);
        if (event.direction == 2) {
            this.nextActivity();
        }
        else if (event.direction == 4) {
            this.previousActivity();
        }
    };
    return ActivityPage;
}());
ActivityPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-activity',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/activity/activity.html"*/'<!--\n  Generated template for the ActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ activity?.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card (swipe)="swipeActivity($event)">\n\n    <ion-card-content>\n      <ion-row class="navigationContainer">\n        <ion-col col-6 style="text-align: left">\n          <button *ngIf="activityIsNotFirst()" class="activityNavigationBtn" no-padding ion-button icon-left clear small (click)="previousActivity()">\n            <ion-icon class="navLeft" name="ios-arrow-back"></ion-icon>\n            <div>Προηγουμενη</div>\n          </button>\n        </ion-col>\n        <ion-col col-6 style="text-align: right">\n          <button *ngIf="activityIsNotLast()" class="activityNavigationBtn" no-padding ion-button icon-left clear small (click)="nextActivity()">\n            <div>Επομενη</div>\n            <ion-icon class="navRight" name="ios-arrow-forward"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <h2 class="activityTitle">{{ activity?.title }}</h2>\n      <p class="activityBody">{{ activity?.description }}</p>\n      <img class="activityImg" *ngIf="activity?.img_url" [src]="\'assets/img/activities/\' + activity.img_url">\n\n      <!--<div *ngIf="activity?.id && activity?.instructions.length > 0" class="instructionsList">-->\n      <!--<p>Οδηγίες:</p>-->\n      <!--<ion-list no-lines>-->\n      <!--<ion-item text-wrap *ngFor="let instruction of activity?.instructions">-->\n      <!--<ion-icon name="ios-checkmark" item-left></ion-icon>-->\n      <!--{{ instruction }}-->\n      <!--</ion-item>-->\n      <!--</ion-list>-->\n      <!--</div>-->\n    </ion-card-content>\n\n    <!--<ion-row>-->\n    <!--<ion-col>-->\n    <!--<a *ngIf="activity?.link && platform.is(\'core\')" href="{{ activity.link }}" target="_blank">-->\n    <!--<button ion-button icon-left clear small>-->\n    <!--<ion-icon name="ios-link"></ion-icon>-->\n    <!--<div>Open link</div>-->\n    <!--</button>-->\n    <!--</a>-->\n    <!--<button *ngIf="activity?.link && !platform.is(\'core\')" ion-button icon-left clear small (click)="openLink(activity.link)">-->\n    <!--<ion-icon name="ios-link"></ion-icon>-->\n    <!--<div>Open link</div>-->\n    <!--</button>-->\n    <!--</ion-col>-->\n    <!--<ion-col>-->\n    <!--<button *ngIf="activity?.link" ion-button icon-left clear small (click)="share(activity)">-->\n    <!--<ion-icon name="ios-share-alt"></ion-icon>-->\n    <!--<div>Share</div>-->\n    <!--</button>-->\n    <!--</ion-col>-->\n    <!--<ion-col>-->\n    <!--<button *ngIf="activity?.id" clear ion-button icon-left small [disabled]="dailyActivityCompleted" (click)="activityDoneForToday()">-->\n    <!--<ion-icon name="thumbs-up"></ion-icon>-->\n    <!--<div>Done</div>-->\n    <!--</button>-->\n    <!--</ion-col>-->\n    <!--</ion-row>-->\n    <ion-list no-lines class="activityActionsContainer">\n      <ion-item text-wrap *ngIf="activity?.link">\n        <a *ngIf="activity?.link && platform.is(\'core\')" href="{{ activity.link }}" target="_blank">\n          <button ion-button icon-left clear small>\n            <ion-icon name="ios-link"></ion-icon>\n            <div>Δειτε την ασκηση</div>\n          </button>\n        </a>\n        <button *ngIf="activity?.link && !platform.is(\'core\')" ion-button icon-left clear small\n                (click)="openLink(activity.link)">\n          <ion-icon name="ios-link"></ion-icon>\n          <div>Δειτε την ασκηση</div>\n        </button>\n      </ion-item>\n      <ion-item text-wrap *ngIf="activity?.link">\n        <button *ngIf="activity?.link" ion-button icon-left clear small (click)="share(activity)">\n          <ion-icon name="ios-share-alt"></ion-icon>\n          <div>Μοιραστειτε και εκτυπωστε </div>\n        </button>\n      </ion-item>\n      <ion-item text-wrap *ngIf="activity?.help_link">\n        <a *ngIf="activity?.help_link && platform.is(\'core\')" href="{{ activity.help_link }}" target="_blank">\n          <button ion-button icon-left clear small>\n            <ion-icon name="ios-help-buoy"></ion-icon>\n            <div>Περισσοτερες επιλογες και βοηθεια</div>\n          </button>\n        </a>\n        <button *ngIf="activity?.help_link && !platform.is(\'core\')" ion-button icon-left clear small\n                (click)="openLink(activity.help_link)">\n          <ion-icon name="ios-help-buoy"></ion-icon>\n          <div>Περισσοτερες επιλογες και βοηθεια</div>\n        </button>\n      </ion-item>\n      <ion-item text-wrap>\n        <button style="margin-bottom: 10px" *ngIf="activity?.id" clear ion-button icon-left small [disabled]="dailyActivityCompleted"\n                (click)="activityDoneForToday()">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>Εγινε σημερα</div>\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/activity/activity.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], ActivityPage);

//# sourceMappingURL=activity.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map