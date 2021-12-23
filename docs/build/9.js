webpackJsonp([9],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActivityPageModule = /** @class */ (function () {
    function ActivityPageModule() {
    }
    ActivityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]
            ]
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());

//# sourceMappingURL=activity.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_storage_app_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ActivityPage = /** @class */ (function () {
    function ActivityPage(navCtrl, navParams, activityProvider, iab, platform, alert, socialSharing, viewCtrl, translate, appStorage, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityProvider = activityProvider;
        this.iab = iab;
        this.platform = platform;
        this.alert = alert;
        this.socialSharing = socialSharing;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.appStorage = appStorage;
        this.events = events;
        this.dailyActivityCompleted = false;
        this.allActivities = [];
        this.currentLang = 'en';
        this.setUpInProgress = false;
        this.activityUniqueId = this.navParams.get("uniqueId");
        var paramLang = this.navParams.get("lang");
        var langs = ['en', 'el', 'it', 'es'];
        this.translate.onLangChange.subscribe(function () {
            _this.setUpPageElements();
        });
        if (paramLang && langs.indexOf(paramLang) > -1) {
            var lang_1 = this.navParams.get("lang");
            this.translate.use(paramLang).subscribe(function () {
                _this.appStorage.set('app_lang', lang_1);
                _this.events.publish('lang_ready', lang_1);
            });
        }
    }
    ActivityPage.prototype.ionViewDidEnter = function () {
        this.setUpPageElements();
    };
    ActivityPage.prototype.setUpPageElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.setUpInProgress)
                            return [2 /*return*/];
                        this.setUpInProgress = true;
                        this.currentLang = this.translate.currentLang;
                        _a = this;
                        return [4 /*yield*/, this.getActivities()];
                    case 1:
                        _a.allActivities = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.getActivity()];
                    case 2:
                        _b.activity = _c.sent();
                        console.log("DIANOIA_EXERCISE_STARTED_" + this.activity.title + "_" + this.activity.description + "_LANG_" + this.translate.currentLang);
                        this.setUpInProgress = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ActivityPage.prototype.getActivities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function callback(resolve, reject) {
                        var activities = instance.navParams.get("activity");
                        if (activities && activities.length) {
                            resolve(activities);
                        }
                        else {
                            instance.activityProvider.getAllActivities().subscribe(function (activities) {
                                resolve(activities);
                            });
                        }
                    })];
            });
        });
    };
    ActivityPage.prototype.getActivity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function callback(resolve, reject) {
                        var activityObj = instance.navParams.get("activity");
                        if (activityObj)
                            resolve(activityObj);
                        else {
                            var paramId = instance.navParams.get("id");
                            if (paramId) {
                                instance.activityProvider.getActivitiesByIds([paramId]).then(function (activities) {
                                    if (!activities.length)
                                        resolve(instance.getRandomActivity());
                                    else
                                        resolve(activities[0]);
                                });
                            }
                            else {
                                resolve(instance.getRandomActivity());
                            }
                        }
                    })];
            });
        });
    };
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
            this.navCtrl.push("activity-page", {
                lang: this.translate.currentLang,
                id: nextActivity.id,
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
                _this.translate.get('activity_done').subscribe(function (translated) {
                    _this.alert.displayToast(translated);
                });
            }
            console.log("DIANOIA_EXERCISE_COMPLETED_LANG_" + _this.translate.currentLang);
        });
    };
    ActivityPage.prototype.openLink = function (url) {
        this.iab.create(url);
    };
    // tslint:disable-next-line:no-unused-variable
    ActivityPage.prototype.share = function (activity) {
        var _this = this;
        this.translate.get('app_activity').subscribe(function (translated) {
            var options = {
                message: translated + ': ' + activity.title + "    ",
                subject: translated + ': ' + activity.title,
                url: activity.link,
                chooserTitle: _this.translate.instant('share_with') + '...'
            };
            _this.socialSharing.shareWithOptions(options).then(function (result) {
                // if(result.completed)
                //this.alert.displayToast("Η δραστηριοτητα κοινοποιηθηκε");
            }).catch(function (error) {
                _this.alert.textDialog(_this.translate.instant('error'), _this.translate.instant('sharing_not_supported'));
            });
        });
    };
    ActivityPage.prototype.swipeActivity = function (event) {
        if (event.direction == 2) {
            this.nextActivity();
        }
        else if (event.direction == 4) {
            this.previousActivity();
        }
    };
    ActivityPage.prototype.getRandomActivity = function () {
        return this.allActivities[Math.floor(Math.random() * this.allActivities.length)];
    };
    ActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity',template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/pages/activity/activity.html"*/'<!--\n  Generated template for the ActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ activity?.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card (swipe)="swipeActivity($event)">\n\n    <ion-card-content>\n      <ion-row class="navigationContainer">\n        <ion-col col-6 style="text-align: left">\n          <button mode="ios" *ngIf="activityIsNotFirst()" class="activityNavigationBtn" no-padding ion-button icon-left\n                  clear small (click)="previousActivity()">\n            <ion-icon class="navLeft" name="ios-arrow-back"></ion-icon>\n            <div>{{ \'previous\' | translate }}</div>\n          </button>\n        </ion-col>\n        <ion-col col-6 style="text-align: right">\n          <button mode="ios" *ngIf="activityIsNotLast()" class="activityNavigationBtn" no-padding ion-button icon-left\n                  clear small (click)="nextActivity()">\n            <div>{{ \'next\' | translate }}</div>\n            <ion-icon class="navRight" name="ios-arrow-forward"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <h2 class="activityTitle">{{ activity?.title }}</h2>\n      <p class="activityBody">{{ activity?.description }}</p>\n      <img class="activityImg" *ngIf="activity?.img_url" [src]="\'assets/img/activities/\' + currentLang + \'/\' + activity.img_url">\n    </ion-card-content>\n    <ion-list no-lines class="activityActionsContainer">\n      <ion-item text-wrap *ngIf="activity?.link">\n        <a *ngIf="activity?.link && platform.is(\'core\')" href="{{ activity.link }}" target="_blank">\n          <button ion-button icon-left clear small>\n            <ion-icon name="ios-link"></ion-icon>\n            <div>{{ \'see_activity\' | translate }}</div>\n          </button>\n        </a>\n        <button mode="ios" *ngIf="activity?.link && !platform.is(\'core\')" ion-button icon-left clear small\n                (click)="openLink(activity.link)">\n          <ion-icon name="ios-link"></ion-icon>\n          <div>{{ \'see_activity\' | translate }}</div>\n        </button>\n      </ion-item>\n      <ion-item text-wrap *ngIf="activity?.link && platform.is(\'cordova\')">\n        <button mode="ios" *ngIf="activity?.link" ion-button icon-left clear small (click)="share(activity)">\n          <ion-icon name="ios-share-alt"></ion-icon>\n          <div>{{ \'share_and_print\' | translate }}</div>\n        </button>\n      </ion-item>\n      <ion-item text-wrap *ngIf="activity?.help_link">\n        <a *ngIf="activity?.help_link && platform.is(\'core\')" href="{{ activity.help_link }}" target="_blank">\n          <button mode="ios" ion-button icon-left clear small>\n            <ion-icon name="ios-help-buoy"></ion-icon>\n            <div>{{ \'more_info_help\' | translate }}</div>\n          </button>\n        </a>\n        <button mode="ios" *ngIf="activity?.help_link && !platform.is(\'core\')" ion-button icon-left clear small\n                (click)="openLink(activity.help_link)">\n          <ion-icon name="ios-help-buoy"></ion-icon>\n          <div>{{ \'more_info_help\' | translate }}</div>\n        </button>\n      </ion-item>\n      <ion-item text-wrap *ngIf="activity?.link && platform.is(\'cordova\')">\n        <button mode="ios" style="margin-bottom: 10px" *ngIf="activity?.id" clear ion-button icon-left small\n                [disabled]="dailyActivityCompleted"\n                (click)="activityDoneForToday()">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{ \'activity_done_btn\' | translate }}</div>\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/pages/activity/activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__providers_app_storage_app_storage__["a" /* AppStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ActivityPage);
    return ActivityPage;
}());

//# sourceMappingURL=activity.js.map

/***/ })

});
//# sourceMappingURL=9.js.map