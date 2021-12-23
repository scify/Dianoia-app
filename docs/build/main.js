webpackJsonp([11],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the LoaderService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var LoaderService = /** @class */ (function () {
    function LoaderService(http, loadingCtrl, events, translate) {
        var _this = this;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.translate = translate;
        this.loaderOpen = false;
        this.loaderWaitText = '';
        this.events.subscribe('lang_ready', function () {
            _this.loaderWaitText = _this.translate.instant('please_wait');
        });
    }
    LoaderService.prototype.showLoader = function () {
        if (!this.loaderOpen) {
            this.loader = this.loadingCtrl.create({
                spinner: 'crescent',
                content: this.loaderWaitText + '...',
                cssClass: 'loader'
            });
            this.loader.present();
            this.loaderOpen = true;
        }
    };
    LoaderService.prototype.hideLoader = function () {
        if (this.loaderOpen) {
            this.loader.dismiss();
            this.loaderOpen = false;
        }
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], LoaderService);
    return LoaderService;
}());

//# sourceMappingURL=loader-service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_calls_api_calls__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_storage_app_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ActivityProvider = /** @class */ (function () {
    function ActivityProvider(http, apiCalls, appStorage, events) {
        var _this = this;
        this.http = http;
        this.apiCalls = apiCalls;
        this.appStorage = appStorage;
        this.events = events;
        this.activities = [];
        this.currentLang = 'en';
        this.events.subscribe('lang_ready', function (langCode) {
            _this.activities = [];
            _this.currentLang = langCode;
        });
        this.getAllActivities().subscribe(function (data) {
            _this.activities = data;
        });
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 4);
        this.currentDateFormatted = currentDate.toDateString();
    }
    ActivityProvider.prototype.getAllActivities = function () {
        var _this = this;
        return this.apiCalls.getHttpCall("activities_all_" + this.currentLang, function () {
            return _this.http.get("assets/data_DB/" + _this.currentLang + "/activities/activities.json")
                .map(function (res) { return res.json(); });
        });
    };
    ActivityProvider.prototype.getRandomActivity = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.activities.length) {
                _this.getAllActivities().subscribe(function (activities) {
                    var randomActivity = activities[Math.floor(Math.random() * activities.length)];
                    resolve(randomActivity);
                });
            }
            else {
                var randomActivity = _this.activities[Math.floor(Math.random() * _this.activities.length)];
                resolve(randomActivity);
            }
        });
    };
    ActivityProvider.prototype.getNumberOfActivitiesForLastThreeMonths = function () {
        var currentDate = new Date();
        var dateAMonthAgo = new Date();
        dateAMonthAgo.setMonth(currentDate.getMonth() - 3);
        return this.getNumberOfActivitiesForPeriod(dateAMonthAgo, currentDate);
    };
    ActivityProvider.prototype.getNumberOfActivitiesForLastMonth = function () {
        var currentDate = new Date();
        var dateAMonthAgo = new Date();
        dateAMonthAgo.setMonth(currentDate.getMonth() - 1);
        return this.getNumberOfActivitiesForPeriod(dateAMonthAgo, currentDate);
    };
    ActivityProvider.prototype.getNumberOfActivitiesForLastTwoWeeks = function () {
        var currentDate = new Date();
        var dateAWeekAgo = new Date();
        dateAWeekAgo.setDate(currentDate.getDate() - 14);
        return this.getNumberOfActivitiesForPeriod(dateAWeekAgo, currentDate);
    };
    ActivityProvider.prototype.getNumberOfActivitiesForPeriod = function (startDate, endDate) {
        var numberOfDays = 0;
        var promises = [];
        for (var date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            var promise = this.appStorage.get("activity_completed_" + date.toDateString());
            promise.then(function (result) {
                if (result)
                    numberOfDays++;
            });
            promises.push(promise);
        }
        return Promise.all(promises);
    };
    ActivityProvider.prototype.getActivitiesByIds = function (activityIds) {
        var _this = this;
        var activitiesToReturn = [];
        return new Promise(function (resolve, reject) {
            if (!_this.activities.length) {
                _this.getAllActivities().subscribe(function (activities) {
                    _this.activities = activities;
                    for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
                        var activity = activities_1[_i];
                        if (activityIds.indexOf(activity.id) > -1) {
                            activitiesToReturn.push(activity);
                        }
                    }
                    resolve(activitiesToReturn);
                });
            }
            else {
                for (var _i = 0, _a = _this.activities; _i < _a.length; _i++) {
                    var activity = _a[_i];
                    if (activityIds.indexOf(activity.id) > -1) {
                        activitiesToReturn.push(activity);
                    }
                }
                resolve(activitiesToReturn);
            }
        });
    };
    ActivityProvider.prototype.setActivityCompletedForToday = function () {
        return this.appStorage.set("activity_completed_" + this.currentDateFormatted, true);
    };
    ActivityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api_calls_api_calls__["a" /* ApiCallsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__app_storage_app_storage__["a" /* AppStorageProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* Events */]])
    ], ActivityProvider);
    return ActivityProvider;
}());

//# sourceMappingURL=activity.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityCategoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_calls_api_calls__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ActivityCategoryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ActivityCategoryProvider = /** @class */ (function () {
    function ActivityCategoryProvider(http, apiCalls, events) {
        var _this = this;
        this.http = http;
        this.apiCalls = apiCalls;
        this.events = events;
        this.currentLang = 'en';
        this.events.subscribe('lang_ready', function (langCode) {
            _this.currentLang = langCode;
        });
    }
    ActivityCategoryProvider.prototype.getAllCategoryRelationships = function () {
        var _this = this;
        return this.apiCalls.getHttpCall("top_level_categories_" + this.currentLang, function () {
            return _this.http.get("assets/data_DB/" + _this.currentLang + "/categories/category_relationships.json")
                .map(function (res) { return res.json(); });
        });
    };
    ActivityCategoryProvider.prototype.getAllCategories = function () {
        var _this = this;
        return this.apiCalls.getHttpCall("categories_all_" + this.currentLang, function () {
            return _this.http.get("assets/data_DB/" + _this.currentLang + "/categories/categories.json")
                .map(function (res) { return res.json(); });
        });
    };
    ActivityCategoryProvider.prototype.getTopLevelCategories = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAllCategoryRelationships().subscribe(function (categories) {
                var topLevelCategories = [];
                var allCategories = [];
                _this.getAllCategories().subscribe(function (c) {
                    allCategories = c;
                    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
                        var category = categories_1[_i];
                        if (category.is_root) {
                            for (var _a = 0, allCategories_1 = allCategories; _a < allCategories_1.length; _a++) {
                                var cat = allCategories_1[_a];
                                if (cat.category_id === category.parent_category_id) {
                                    topLevelCategories.push(cat);
                                }
                            }
                        }
                    }
                    resolve(topLevelCategories);
                });
            });
        });
    };
    ActivityCategoryProvider.prototype.getCategoryById = function (categoryId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAllCategories().subscribe(function (categories) {
                for (var _i = 0, categories_2 = categories; _i < categories_2.length; _i++) {
                    var category = categories_2[_i];
                    if (category.category_id == categoryId) {
                        resolve(category);
                    }
                }
            });
        });
    };
    ActivityCategoryProvider.prototype.getRelationshipsForCategory = function (categoryId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            _this.getAllCategoryRelationships().subscribe(function (categories) {
                for (var _i = 0, categories_3 = categories; _i < categories_3.length; _i++) {
                    var category = categories_3[_i];
                    if (category.parent_category_id == categoryId) {
                        observer.next(category);
                    }
                }
                observer.complete();
            });
        });
    };
    ActivityCategoryProvider.prototype.getActivitiesForCategory = function (categoryId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            _this.getRelationshipsForCategory(categoryId).subscribe(function (category) {
                observer.next(category.activities);
                observer.complete();
            });
        });
    };
    ActivityCategoryProvider.prototype.getSubcategoriesForCategory = function (categoryId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getRelationshipsForCategory(categoryId).subscribe(function (category) {
                resolve(category.subcategories);
            });
        });
    };
    ActivityCategoryProvider.prototype.getCategoriesByIds = function (categoriesIds) {
        var _this = this;
        var categories = [];
        var allCategories = [];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            var _loop_1 = function (categoryId) {
                _this.getAllCategories().subscribe(function (c) {
                    allCategories = c;
                    for (var _i = 0, allCategories_2 = allCategories; _i < allCategories_2.length; _i++) {
                        var cat = allCategories_2[_i];
                        if (cat.category_id === categoryId) {
                            categories.push(cat);
                        }
                    }
                });
            };
            for (var _i = 0, categoriesIds_1 = categoriesIds; _i < categoriesIds_1.length; _i++) {
                var categoryId = categoriesIds_1[_i];
                _loop_1(categoryId);
            }
            observer.next(categories);
            observer.complete();
        });
    };
    ActivityCategoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api_calls_api_calls__["a" /* ApiCallsProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* Events */]])
    ], ActivityCategoryProvider);
    return ActivityCategoryProvider;
}());

//# sourceMappingURL=activity-category.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DifficultyLevelProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_calls_api_calls__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DifficultyLevelProvider = /** @class */ (function () {
    function DifficultyLevelProvider(http, apiCalls, events) {
        var _this = this;
        this.http = http;
        this.apiCalls = apiCalls;
        this.events = events;
        this.currentLang = 'en';
        this.getAllDifficultyLevels().subscribe(function (data) {
            _this.difficultyLevels = data;
        });
        this.events.subscribe('lang_ready', function (langCode) {
            _this.currentLang = langCode;
        });
    }
    DifficultyLevelProvider.prototype.getAllDifficultyLevels = function () {
        var _this = this;
        return this.apiCalls.getHttpCall("difficulty_levels_" + this.currentLang, function () {
            return _this.http.get("assets/data_DB/" + _this.currentLang + "/difficulty_levels/difficulty_levels.json")
                .map(function (res) { return res.json(); });
        });
    };
    DifficultyLevelProvider.prototype.getDifficultyLevelById = function (difficultyLevelId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAllDifficultyLevels().subscribe(function (difficultyLevels) {
                for (var _i = 0, difficultyLevels_1 = difficultyLevels; _i < difficultyLevels_1.length; _i++) {
                    var difficultyLevel = difficultyLevels_1[_i];
                    if (difficultyLevel.id == difficultyLevelId) {
                        resolve(difficultyLevel);
                    }
                }
                reject("No difficulty level found");
            });
        });
    };
    DifficultyLevelProvider.prototype.getDifficultyLevelsForActivities = function (activities) {
        var difficultyLevelIds = [];
        for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
            var activity = activities_1[_i];
            if (activity.difficulty_level_id != null) {
                if (difficultyLevelIds.indexOf(activity.difficulty_level_id) == -1) {
                    difficultyLevelIds.push(activity.difficulty_level_id);
                }
            }
        }
        var difficultyLevels = [];
        for (var _a = 0, difficultyLevelIds_1 = difficultyLevelIds; _a < difficultyLevelIds_1.length; _a++) {
            var difficultyLevelId = difficultyLevelIds_1[_a];
            this.getDifficultyLevelById(difficultyLevelId).then(function (difficultyLevel) {
                difficultyLevels.push(difficultyLevel);
            });
        }
        return new Promise(function (resolve, reject) {
            resolve(difficultyLevels);
        });
        // return Observable.forkJoin(difficultyLevels);
    };
    DifficultyLevelProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api_calls_api_calls__["a" /* ApiCallsProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */]])
    ], DifficultyLevelProvider);
    return DifficultyLevelProvider;
}());

//# sourceMappingURL=difficulty-level.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_storage_app_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_calls_api_calls__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var NotificationProvider = /** @class */ (function () {
    function NotificationProvider(localNotifications, appStorage, http, apiCalls, events, translate) {
        var _this = this;
        this.localNotifications = localNotifications;
        this.appStorage = appStorage;
        this.http = http;
        this.apiCalls = apiCalls;
        this.events = events;
        this.translate = translate;
        this.notificationTitles = [];
        this.notificationTexts = [];
        this.events.subscribe('lang_ready', function (langCode) {
            _this.getAllNotifications(langCode).subscribe(function (data) {
                _this.notificationTitles = data.titles;
                _this.notificationTexts = data.texts;
                _this.scheduleNextNotification();
            });
        });
    }
    NotificationProvider_1 = NotificationProvider;
    NotificationProvider.prototype.getAllNotifications = function (langCode) {
        var _this = this;
        return this.apiCalls.getHttpCall("notifications_" + langCode, function () {
            return _this.http.get("assets/data_DB/" + langCode + "/notifications/notifications.json")
                .map(function (res) { return res.json(); });
        });
    };
    NotificationProvider.prototype.scheduleNextNotification = function () {
        var _this = this;
        this.appStorage.get('notification_frequency').then(function (data) {
            var frequency = JSON.parse(data);
            var date = new Date();
            var title = _this.translate.instant('app_name') + " - " + NotificationProvider_1.randomArrayElement(_this.notificationTitles);
            var text = "- " + NotificationProvider_1.randomArrayElement(_this.notificationTexts);
            switch (frequency) {
                case 'every_day':
                    date.setDate(date.getDate() + 1);
                    _this.scheduleNotificationFor(date, title, text, 'day');
                    break;
                case 'every_week':
                    date.setDate(date.getDate() + 7);
                    _this.scheduleNotificationFor(date, title, text, 'week');
                    break;
                case 'every_month':
                    date.setMonth(date.getMonth() + 1);
                    _this.scheduleNotificationFor(date, title, text, 'month');
                    break;
                case 'never':
                    break;
                case null:
                    date.setDate(date.getDate() + 1);
                    _this.scheduleNotificationFor(date, title, text, 'day');
                    break;
                default:
                    date.setDate(date.getDate() + 1);
                    _this.scheduleNotificationFor(date, title, text, 'day');
                    break;
            }
        });
    };
    NotificationProvider.prototype.scheduleNotificationFor = function (date, title, text, every, setHour) {
        if (setHour === void 0) { setHour = true; }
        //notification set for 11:00 AM.
        if (setHour) {
            date.setHours(11);
            date.setMinutes(0);
        }
        var options = {
            text: text,
            title: title,
            trigger: { at: date }
        };
        this.localNotifications.schedule(options);
    };
    NotificationProvider.prototype.listenForNotificationClicks = function () {
        var _this = this;
        this.localNotifications.on("click").subscribe(function (notification) {
            _this.scheduleNextNotification();
        });
    };
    NotificationProvider.randomArrayElement = function (items) {
        return items[Math.floor(Math.random() * items.length)];
    };
    NotificationProvider = NotificationProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_3__app_storage_app_storage__["a" /* AppStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__api_calls_api_calls__["a" /* ApiCallsProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], NotificationProvider);
    return NotificationProvider;
    var NotificationProvider_1;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		336,
		10
	],
	"../pages/activity-categories/activity-categories.module": [
		337,
		5
	],
	"../pages/activity/activity.module": [
		338,
		9
	],
	"../pages/basic-info/basic-info.module": [
		339,
		4
	],
	"../pages/difficulty-levels/difficulty-levels.module": [
		340,
		1
	],
	"../pages/help/help.module": [
		342,
		8
	],
	"../pages/home/home.module": [
		341,
		0
	],
	"../pages/info-list/info-list.module": [
		343,
		3
	],
	"../pages/notifications/notifications.module": [
		344,
		7
	],
	"../pages/random-activities/random-activities.module": [
		345,
		2
	],
	"../pages/statistics/statistics.module": [
		346,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 181;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AlertProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertController, toast, events, translate) {
        var _this = this;
        this.alertController = alertController;
        this.toast = toast;
        this.events = events;
        this.translate = translate;
        this.alertCloseBtnText = '';
        this.alertCancelBtnText = '';
        this.events.subscribe('lang_ready', function () {
            _this.alertCloseBtnText = _this.translate.instant('close');
            _this.alertCancelBtnText = _this.translate.instant('cancel');
        });
    }
    AlertProvider.prototype.textDialog = function (title, message) {
        var alert = this.alertController.create({
            mode: 'ios',
            title: title,
            message: message,
            buttons: [
                {
                    text: this.alertCloseBtnText,
                    role: this.alertCancelBtnText
                }
            ]
        });
        alert.present();
    };
    AlertProvider.prototype.announcementDialog = function (title, message) {
        var alert = this.alertController.create({
            mode: 'ios',
            title: title,
            message: message,
            buttons: [
                {
                    text: 'OK',
                    role: this.alertCancelBtnText
                }
            ]
        });
        alert.present();
    };
    AlertProvider.prototype.displayToast = function (message) {
        this.toast.show(message, '5000', 'center').subscribe(function (toast) {
            console.log(toast);
        });
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_calls_api_calls__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageProvider = /** @class */ (function () {
    function PageProvider(http, apiCalls) {
        this.http = http;
        this.apiCalls = apiCalls;
        this.endPoint = "assets/";
    }
    PageProvider.prototype.getDataForPage = function (pageCode, pageFile) {
        var _this = this;
        return this.apiCalls.getHttpCall(pageCode, function () {
            return _this.http.get(_this.endPoint + pageFile)
                .map(function (res) { return res.json(); });
        });
    };
    PageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api_calls_api_calls__["a" /* ApiCallsProvider */]])
    ], PageProvider);
    return PageProvider;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export createTranslateLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_calls_api_calls__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_page_page__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_app_storage_app_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_activity_category_activity_category__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_activity_activity__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_difficulty_level_difficulty_level__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_loader_service_loader_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_alert_alert__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_local_notifications__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_notification_notification__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_analytics_firebase__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_app_version__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_globalization__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-categories/activity-categories.module#TopActivityCategoriesPageModule', name: 'ActivityCategoriesPage', segment: 'activity-categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/activity.module#ActivityPageModule', name: 'activity-page', segment: 'activities/:lang/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basic-info/basic-info.module#BasicInfoPageModule', name: 'basic-info', segment: 'basics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/difficulty-levels/difficulty-levels.module#DifficultyLevelsPageModule', name: 'DifficultyLevelsPage', segment: 'difficulty-levels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-list/info-list.module#InfoListPageModule', name: 'InfoListPage', segment: 'info-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/random-activities/random-activities.module#RandomActivitiesPageModule', name: 'RandomActivitiesPage', segment: 'random-activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule', name: 'StatisticsPage', segment: 'statistics', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_api_calls_api_calls__["a" /* ApiCallsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_page_page__["a" /* PageProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_app_storage_app_storage__["a" /* AppStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_activity_category_activity_category__["a" /* ActivityCategoryProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_activity_activity__["a" /* ActivityProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_difficulty_level_difficulty_level__["a" /* DifficultyLevelProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_loader_service_loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_16__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_20__providers_notification_notification__["a" /* NotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_analytics_firebase__["a" /* AnalyticsFirebase */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_globalization__["a" /* Globalization */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_storage_app_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_activity_category_activity_category__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_activity_activity__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_difficulty_level_difficulty_level__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loader_service_loader_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_analytics_firebase__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_version__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_globalization__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__assets_i18n_en_json__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__assets_i18n_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__assets_i18n_en_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__assets_i18n_el_json__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__assets_i18n_el_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__assets_i18n_el_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_i18n_es_json__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_i18n_es_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__assets_i18n_es_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assets_i18n_it_json__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assets_i18n_it_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__assets_i18n_it_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, localNotifications, appStorage, http, activityCategoryProvider, activityProvider, difficultyLevelProvider, loaderService, analyticsFirebase, iab, appVersion, translate, events, menuController, globalization) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.localNotifications = localNotifications;
        this.appStorage = appStorage;
        this.http = http;
        this.activityCategoryProvider = activityCategoryProvider;
        this.activityProvider = activityProvider;
        this.difficultyLevelProvider = difficultyLevelProvider;
        this.loaderService = loaderService;
        this.analyticsFirebase = analyticsFirebase;
        this.iab = iab;
        this.appVersion = appVersion;
        this.translate = translate;
        this.events = events;
        this.menuController = menuController;
        this.globalization = globalization;
        this.rootPage = 'HomePage';
        this.appVersionName = '2.2.0';
        this.languages = [
            {
                "name": "English",
                "code": "en"
            },
            {
                "name": "Ελληνικά",
                "code": "el"
            },
            {
                "name": "Español",
                "code": "es"
            },
            {
                "name": "Italiano",
                "code": "it"
            }
        ];
        translate.setTranslation('en', __WEBPACK_IMPORTED_MODULE_16__assets_i18n_en_json___default.a);
        translate.setTranslation('es', __WEBPACK_IMPORTED_MODULE_18__assets_i18n_es_json___default.a);
        translate.setTranslation('el', __WEBPACK_IMPORTED_MODULE_17__assets_i18n_el_json___default.a);
        translate.setTranslation('it', __WEBPACK_IMPORTED_MODULE_19__assets_i18n_it_json___default.a);
        this.initializeApp(platform, statusBar);
        this.translate.onLangChange.subscribe(function (data) {
            _this.onDemandLang = data.lang;
            _this.setLang(data.lang);
            _this.setUpPageElements();
        });
    }
    MyApp.prototype.initializeApp = function (platform, statusBar) {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                _this.appVersion.getVersionNumber().then(function (version) { return _this.appVersionName = version; });
                if (platform.is('android')) {
                    statusBar.overlaysWebView(false);
                    statusBar.backgroundColorByHexString("#002984");
                    statusBar.styleBlackOpaque();
                }
                else {
                    statusBar.overlaysWebView(true);
                    statusBar.styleDefault();
                }
                _this.localNotifications.listenForNotificationClicks();
                _this.setUpAnalyticsLogger();
                _this.globalization.getPreferredLanguage().then(function (res) {
                    _this.setTranslationSettings(res.value.substring(0, 2));
                });
            }
            else {
                _this.setTranslationSettings(window.navigator.language.substring(0, 2));
            }
        });
    };
    MyApp.prototype.setTranslationSettings = function (langCodeToTry) {
        var _this = this;
        var acceptableLanguageCodes = this.languages.map(function (l) { return l.code; });
        var defaultLangCode = acceptableLanguageCodes[0];
        if (acceptableLanguageCodes.indexOf(langCodeToTry) > -1)
            defaultLangCode = langCodeToTry;
        this.appStorage.get('app_lang').then(function (lang) {
            var data = JSON.parse(lang);
            var langCode = defaultLangCode;
            if (data && data != "" && acceptableLanguageCodes.indexOf(data) > -1) {
                langCode = data;
            }
            if (!_this.onDemandLang)
                _this.setLang(langCode);
        });
    };
    MyApp.prototype.setUpPageElements = function () {
        this.pages = [
            { title: this.translate.instant('menu_home'), component: "HomePage" },
            { title: this.translate.instant('menu_page_1'), component: "BasicInfoPage", pageName: 'basic-info' },
            {
                title: this.translate.instant('menu_page_2'),
                component: "InfoListPage",
                pageCode: "page_tips_list",
                pageFile: "pages/" + this.translate.currentLang + "/tips_list.json"
            },
            { title: this.translate.instant('activities_exercises'), component: "ActivityCategoriesPage" },
            { title: this.translate.instant('stories_btn_title'), id: "stories" },
            { title: this.translate.instant('carer_activities_btn_title'), id: "carer_activities" },
            { title: this.translate.instant('history'), component: "StatisticsPage" },
            { title: this.translate.instant('notification_settings'), component: "NotificationsPage" },
            { title: this.translate.instant('help'), component: "HelpPage" },
            { title: this.translate.instant('about'), component: "AboutPage" }
        ];
        if (this.platform.is('cordova')) {
            this.splashScreen.hide();
            console.log("DIANOIA_APP_STARTED_LANG_" + this.translate.currentLang);
        }
    };
    MyApp.prototype.setLang = function (langCode) {
        var _this = this;
        this.translate.setDefaultLang(langCode);
        this.translate.use(langCode).subscribe(function () {
            _this.appStorage.set('app_lang', langCode).then(function () {
                _this.events.publish('lang_ready', langCode);
                _this.menuController.close();
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        console.log(page);
        if (page.id)
            this.getDifficultyLevelsForCategoryAndLoadPage(page.id);
        else
            this.nav.push(page.pageName ? page.pageName : page.component, { pageData: page });
    };
    MyApp.prototype.getDifficultyLevelsForCategoryAndLoadPage = function (categoryId) {
        var _this = this;
        console.log(categoryId);
        this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(function (activitiesIds) {
            if (activitiesIds != null) {
                _this.activityProvider.getActivitiesByIds(activitiesIds).then(function (activities) {
                    _this.getDifficultyLevelsForActivitiesAndLoadPage(activities, categoryId);
                }, function (error) {
                    _this.handleError(error);
                });
            }
        }, function (error) {
            _this.handleError(error);
        });
    };
    MyApp.prototype.getDifficultyLevelsForActivitiesAndLoadPage = function (activities, categoryId) {
        var _this = this;
        this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities).then(function (difficultyLevels) {
            // this.loaderService.hideLoader();
            _this.nav.push("DifficultyLevelsPage", { levels: difficultyLevels, categoryId: categoryId, activities: activities });
        });
    };
    MyApp.prototype.handleError = function (error) {
        console.error(error);
        this.loaderService.hideLoader();
    };
    MyApp.prototype.setUpAnalyticsLogger = function () {
        var eventParams = {};
        eventParams[this.analyticsFirebase.DEFAULT_PARAMS.LEVEL] = 29;
        eventParams['page'] = 'home';
        this.analyticsFirebase.logEvent('page_view', eventParams)
            .then(function (res) { return console.log('Firebase: ' + res); })
            .catch(function (error) { return console.error(error); });
    };
    MyApp.prototype.openLink = function (url) {
        this.iab.create(url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/app/app.html"*/'<ion-split-pane>\n  <ion-menu [content]="content" class="menu">\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons left>\n          <button *ngIf="platform.is(\'cordova\')" menuClose class="closeMenuBtn">\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title>{{ \'menu_title\' | translate }}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-item>\n          <ion-label mode="ios">\n            <button mode="ios" ion-button outline>{{ \'select_language\' | translate }}</button>\n          </ion-label>\n          <ion-select (ionChange)="setLang($event)">\n            <ion-option [selected]="lang.code === translate.store.currentLang" *ngFor="let lang of languages" [value]="lang.code">\n              {{ lang.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n        <div>\n          <button style="padding-top: 12px; padding-bottom: 12px;" padding mode="ios" ion-button\n                  *ngIf="!platform.is(\'cordova\')"\n                  (click)="openLink(\'https://play.google.com/store/apps/details?id=org.scify.dianoia.app&hl=el\')">\n            <img style="height: 100%; margin-right: 15px;" src="assets/img/google-play.png">\n            {{ \'download_app\' | translate }}\n          </button>\n        </div>\n        <p ion-item padding class="version">v{{appVersionName}}</p>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" #mainNav main></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app_storage_app_storage__["a" /* AppStorageProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_7__providers_activity_category_activity_category__["a" /* ActivityCategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_activity_activity__["a" /* ActivityProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_difficulty_level_difficulty_level__["a" /* DifficultyLevelProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_loader_service_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_analytics_firebase__["a" /* AnalyticsFirebase */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_globalization__["a" /* Globalization */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = {"app_name":"diAnoia","menu_title":"Menu","select_language":"Select Language","download_app":"Download the mobile app!","see_more_options":"See more options on the main menu","basic_info_btn_title":"Let's learn the basics","basic_info_btn_subtitle":"What is diAnoia - Goals - Values","mental_activities_btn_title":"Print cognitive activities","mental_activities_btn_subtitle":"Exercises with paper and pencil","common_activities_btn_title":"See cognitive activities","common_activities_btn_subtitle":"Ideas to have a constructive time together","stories_btn_title":"Storytelling","stories_btn_subtitle":"Creative and entertaining stories!","carer_activities_btn_title":"Activities for carers","carer_activities_btn_subtitle":"Ideas and activities for carers","menu_home":"Home","menu_page_1":"Let's learn the basics","menu_page_2":"What to keep in mind","activities_exercises":"Exercises - Activities","history":"History","notification_settings":"Notification settings","help":"Help","about":"About","about_text":"The “diAnoia” app was created by <a target=\"_blank\" href=\"https://www.scify.org/en\">The not-for-profit company SciFY</a> in the framework of the “Σημεία Στήριξης” program that is co-funded by the TIMA Foundation, the Latsis Foundation, the Hellenic Hope charity trust and the Bossodaki Foundation. The iOS version was realised thanks to the support and cooperation of Alzheimer Athens. <br> <br> More info can be found <a target=\"_blank\" href=\"https://www.scify.gr/site/en/impact-areas-en/assistive-technologies/dianoia-en\">here.</a>","version":"Version","about_youtube_link":"https://www.youtube.com/embed/hahvUXwTXE4","what_are_activities":"About Non-pharmaceutical Activities","goal":"Goal","value":"Value","select_category":"Select a category","activity_categories":"Activity Categories","all_difficulty_levels":"All levels","select_difficulty_level":"Select difficulty level","help_text":"<b>Print Cognitive Exercises</b> Select the desired activity and click “Share and Print”. Then select a sharing/and or printing app to view the exercise in printable format. <br>A common practice is to send the activity to your email. By opening the email from your computer or phone, you can then print it. <br> <br> <b>Keep the exercise history</b> Keep track of how often your loved ones exercise! <br>You kan keep a calendar with useful statistics. Don't forget, the quality of exercise and the quality of your relationship matters. <br> <br> Select the exercise that was performed and click on \"Done today\". Automatically, the exercise is saved in history. You can access your history in \"My History\".","receive_notifications":"Activities/Exercises reminders","save":"Save","notifications_not_supported":"This device does not support notifications.","every_day":"Every day","every_week":"Once a week","every_month":"Once a month","no_notifications":"I don't want to receive notifications.","settings_saved":"Settings were saved.","please_select":"Please select a choice","exercise_history":"Activities/Exercises History","days_that_exercises_were_performed":"Days that activities were completed","for_the_last_month":"For the last month","for_the_last_weeks":"For the last 2 weeks","for_the_last_months":"For the last 3 months","activity_done":"Activity done","app_activity":"diAnoia - Activity","share_with":"Share with","sharing_not_supported":"This device does not support activity sharing","error":"Error","previous":"Previous","next":"Next","see_activity":"View the activity","share_and_print":"Share and Print","more_info_help":"More info and help","activity_done_btn":"Activity done today","close":"Close","cancel":"Cancel","please_wait":"Please wait","activity_translation_singular":"activity","activity_translation_plural":"activities"}

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = {"app_name":"διΆνοια","menu_title":"Μενού","select_language":"Επιλέξτε γλώσσα","download_app":"Κατεβάστε τη διΆνοια!","see_more_options":"Δείτε περισσότερες επιλογές στο κεντρικό μενού","basic_info_btn_title":"Ας μάθουμε τα βασικά","basic_info_btn_subtitle":"Τι είναι - Σκοπός - Αξία","mental_activities_btn_title":"Εκτυπώστε νοητικές ασκήσεις","mental_activities_btn_subtitle":"Ασκήσεις με μολύβι και χαρτί","common_activities_btn_title":"Βρείτε δημιουργικές δραστηριότητες","common_activities_btn_subtitle":"Ιδέες για να περάσετε δημιουργικό χρόνο μαζί","stories_btn_title":"Λέμε ιστορίες","stories_btn_subtitle":"Δημιουργικές και διασκεδαστικές ιστορίες!","carer_activities_btn_title":"Δραστηριότητες για φροντιστές","carer_activities_btn_subtitle":"Ιδέες και δραστηριότητες για φροντιστές","menu_home":"Αρχική","menu_page_1":"Ας μάθουμε τα βασικά","menu_page_2":"Τι να προσέξουμε","activities_exercises":"Ασκήσεις - Δραστηριότητες","history":"Ιστορικό","notification_settings":"Ρυθμίσεις ειδοποιήσεων","help":"Βοήθεια","about":"Σχετικά","about_text":"Η εφαρμογή “Διάνοια” δημιουργήθηκε από τη <a href=\"https://www.scify.org/\">Μη Κερδοσκοπική Εταιρεία SciFY</a> στο πλαίσιο του προγράμματος “Σημεία Στήριξης” που συγχρηματοδοτείται από το ΤΙΜΑ Κοινωφελές Ίδρυμα, το Κοινωφελές Ίδρυμα Ιωάννη Σ. Λάτση, τη φιλανθρωπική οργάνωση Hellenic Hope και το Ίδρυμα Μποδοσάκη. <br> Η έκδοση για iOS υλοποιήθηκε χάρη στη στήριξη και συνεργασία της Εταιρείας Alzheimer Αθηνών. <br> <br> Περισσότερες πληροφορίες για το έργο <a href=\"https://www.scify.gr/site/el/impact-areas/assistive-technologies/dianoia\">σε αυτόν τον σύνδεσμο.</a>","version":"Έκδοση","about_youtube_link":"https://www.youtube.com/embed/Ej3T-QiBWVg","what_are_activities":"Τι είναι οι Μη Φαρμακευτικές Παρεμβάσεις","goal":"Σκοπός","value":"Αξία","select_category":"Επιλέξτε μια κατηγορία","activity_categories":"Κατηγορίες δραστηριοτήτων","all_difficulty_levels":"Όλα τα επίπεδα","select_difficulty_level":"Επιλέξτε επίπεδο δυσκολίας","help_text":"<b>Εκτυπώσετε τις Νοητικές Ασκήσεις</b> Επιλέξτε την άσκηση που σας ενδιαφέρει και πατήστε “Μοιραστείτε και Εκτυπώστε” Επιλέξτε όποια εφαρμογή σας βολεύει για να αποκτήσετε την άσκηση σε εκτυπώσιμη μορφή. <br>Μια πολύ συνηθισμένη λύση είναι να τη στείλετε στον εαυτό σας με e-mail. Ανοίγοντας το mail από τον υπολογιστή σας, μπορείτε άμεσα να την εκτυπώσετε. <br> <br> <b>Κρατήστε το ιστορικό των ασκήσεων</b> Καταγράψτε πόσο συχνά ο άνθρωπός σας ασχολείται με νοητικές ασκήσεις! <br>Κρατάτε έτσι ένα πολύτιμο ημερολόγιο με σχετικά στατιστικά. Μην ξεχνάτε, η συχνότητα της εξάσκησης και η ποιότητα της σχέσης είναι αυτό που μετράει. <br> <br> Επιλέξτε την άσκηση με την οποία ασχολήθηκε και πατήστε το κουμπί \"Έγινε σήμερα\". Αυτόματα, καταγράφεται στο ημερολόγιο. Μπορείτε να δείτε το ιστορικό στην ενότητα “Ιστορικό”","receive_notifications":"Να λαμβάνω ειδοποιήσεις για δραστηριότητες","save":"Αποθήκευση","notifications_not_supported":"Αυτή η συσκευή δεν υποστηρίζει ειδοποιήσεις.","every_day":"Κάθε μέρα","every_week":"Μια φορά την εβδομάδα","every_month":"Μια φορά το μήνα","no_notifications":"Να μην έρχονται ειδοποιήσεις","settings_saved":"Οι ρυθμίσεις αποθηκεύτηκαν.","please_select":"Πρέπει να δηλώσετε κάποια επιλογή","exercise_history":"Ιστορικό Δραστηριοτήτων","days_that_exercises_were_performed":"Ημέρες που πραγματοποιήθηκαν ασκήσεις","for_the_last_month":"Για τον τελευταίο μήνα","for_the_last_weeks":"Για το τελευταίο 15 ήμερο","for_the_last_months":"Για το τελευταίο 3 μηνο","activity_done":"Η άσκηση για σήμερα καταγράφηκε","app_activity":"ΔιΆνοια - δραστηριότητα","share_with":"Κοινοποίηση με","sharing_not_supported":"Αυτή η συσκευή δεν υποστηρίζει κοινοποίηση","error":"Σφάλμα","previous":"Προηγούμενη","next":"Επόμενη","see_activity":"Δείτε την άσκηση","share_and_print":"Μοιραστείτε και εκτυπώστε","more_info_help":"Περισσότερες επιλογές και βοήθεια","activity_done_btn":"Έγινε σήμερα","close":"Κλείσιμο","cancel":"Άκυρο","please_wait":"Παρακαλώ περιμένετε","activity_translation_singular":"δραστηριότητα","activity_translation_plural":"δραστηριότητες"}

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = {"app_name":"diAnoia","menu_title":"Menú","select_language":"Seleccione idioma","download_app":"¡Descargar Diania!","see_more_options":"Ver más opciones en el menú principal","basic_info_btn_title":"Aprendemos lo básico","basic_info_btn_subtitle":"Qué es - Objetivo - Valor","mental_activities_btn_title":"Impriman los ejercicios mentales","mental_activities_btn_subtitle":"Ejercicios con lápiz y papel","common_activities_btn_title":"Encuentren actividades creativas","common_activities_btn_subtitle":"Ideas para pasar tiempo creativo juntos","stories_btn_title":"Contamos historias","stories_btn_subtitle":"¡Historias creativas y divertidas!","carer_activities_btn_title":"Actividades para cuidadores ","carer_activities_btn_subtitle":"Ideas y actividades para cuidadores","menu_home":"Inicio","menu_page_1":"Aprendemos lo básico","menu_page_2":"A qué debemos prestar atención","activities_exercises":"Ejercicios - Actividades","history":"Historial","notification_settings":"Configuración de notificaciones","help":"Ayuda","about":"Sobre","about_text":"La aplicación \"Dianoia\" fue creada por la empresa sin fines de lucro <a href=\"https://www.scify.org/\">SciFY</a> en el marco del programa \"Puntos de apoyo\" cofinanciado por la Fundación Caritativa “TIMA”, la Fundación Caritativa “Ioannis S. Latsis”, la Organización Benéfica Hellenic Hope y la Fundación Bodossaki. <br> La versión iOS se implementó gracias al apoyo y la cooperación de la Sociedad de Alzheimer de Atenas. <br> <br> Más información sobre el proyecto <a href=\"https://www.scify.gr/site/el/impact-areas/assistive-technologies/dianoia\">en este enlace.</a>","version":"Versión","about_youtube_link":"https://www.youtube.com/embed/FAy7KH-02XY","what_are_activities":"Intervenciones no farmacológicas","goal":"Objetivo","value":"Valor","select_category":"Seleccionar una categoría","activity_categories":"Categorías de actividades","all_difficulty_levels":"Todos los niveles","select_difficulty_level":"Seleccionar el nivel de dificultad","help_text":"<b>Imprimir los Ejercicios Mentales</b> Seleccionen el ejercicio que les interesa y hagan clic en \"Compartir e Imprimir\". Seleccionen la aplicación que más les convenga para obtener el ejercicio en forma imprimible. <br>Una solución muy común es enviárselo este archivo a ustedes mismos por correo electrónico. Al abrir el correo desde su ordenador, pueden imprimirlo inmediatamente. <br> <br> <b>Mantener el historial de los ejercicios</b> ¡Registren la frecuencia con la que se realizan los ejercicios mentales! <br>De esta forma, pueden mantener un valioso diario con estadísticas relevantes.\nRecuerden que lo que más cuenta es la frecuencia de la práctica y la calidad de la relación. <br> <br> Seleccionen el ejercicio que hizo y hagan clic en el botón \"Hecho hoy\". Así se ingresa automáticamente en el registro. Pueden consultar el historial en la sección \"Historial\"","receive_notifications":"Recibir notificaciones de actividades","save":"Ahorrar","notifications_not_supported":"Este dispositivo no admite notificaciones.","every_day":"Diariamente","every_week":"Una vez por semana","every_month":"Mensualmente","no_notifications":"No recibir notificaciones","settings_saved":"La configuración se ha guardado correctamente.","please_select":"Debes indicar una elección","exercise_history":"Historial de actividades","days_that_exercises_were_performed":"Días de ejercicios","for_the_last_month":"Durante el último mes","for_the_last_weeks":"Durante los últimos 15 días","for_the_last_months":"Durante los últimos 3 meses","activity_done":"Se grabó el ejercicio de hoy","app_activity":"diAnoia - actividad","share_with":"Intercambio","sharing_not_supported":"Este dispositivo no admite notificaciones","error":"Error","previous":"Anterior","next":"Siguiente","see_activity":"Ver el ejercicio","share_and_print":"Compartir e Imprimir","more_info_help":"Más opciones y ayuda","activity_done_btn":"Hecho hoy","close":"Cierre","cancel":"Cancelar","please_wait":"Espere por favor","activity_translation_singular":"actividad","activity_translation_plural":"actividades"}

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = {"app_name":"diAnoia","menu_title":"Menu","select_language":"Seleziona la lingua","download_app":"Scarica l'app mobile!","see_more_options":"Trova ulteriori opzioni nel menu principale","basic_info_btn_title":"Impariamo le basi","basic_info_btn_subtitle":"Che cos’è diAnoia – Obiettivo - Valore ","mental_activities_btn_title":"Stampa esercizi per la mente","mental_activities_btn_subtitle":"Esercizi con carta e penna","common_activities_btn_title":"Trova attività creative","common_activities_btn_subtitle":"Idee per spendere del tempo creativo insiem","stories_btn_title":"Raccontiamo delle storie","stories_btn_subtitle":"Storie creative e divertenti!","carer_activities_btn_title":"Attività per accompagnatori","carer_activities_btn_subtitle":"Idee e attività per accompagnatori","menu_home":"Home","menu_page_1":"Impariamo le basi","menu_page_2":"A cosa fare attenzione","activities_exercises":"Esercizi – Attività","history":"Cronologia","notification_settings":"Impostazioni di notifica","help":"Aiuto","about":"Di diAnoia","about_text":"L'applicazione \"diAnoia\" è stata creata dalla Società No-Profit <a target=\"_blank\" href=\"https://www.scify.org/en\">SciFY</a> nell'ambito del programma \"Punti di Supporto\" cofinanziato dalla Fondazione Benefica TIMA, la Fondazione Benefica Ioannis S. Latsis, l'organizzazione benefica Hellenic Hope e l’Istituto Mpodosakis.  La versione iOS è stata implementata grazie al supporto e alla collaborazione della Società Alzheimer di Atene. <br> <br> Maggiori informazioni sul progetto si possono trovare seguendo <a target=\"_blank\" href=\"https://www.scify.gr/site/en/impact-areas-en/assistive-technologies/dianoia-en\">questo link.</a>","version":"Versione","about_youtube_link":"https://www.youtube.com/embed/DZGJDz9mYvY","what_are_activities":"Cosa sono gli Interventi Non Farmacologici","goal":"Obiettivo","value":"Valore","select_category":"Seleziona una categoria","activity_categories":"Categorie di attività","all_difficulty_levels":"Tutti I livelli","select_difficulty_level":"Scegli il livello di difficoltà","help_text":"<b>Stampa gli esercizi mentali</b> Seleziona l'esercizio che ti interessa e fai clic su \"Condividi e stampa\" Scegli l'applicazione adatta a te per ottenere l'esercizio in forma stampabile. Una soluzione molto comune è inviarlo a te stesso tramite e-mail. Aprendo la mail dal tuo computer, puoi stamparla immediatamente. <br> <br> <b>Mantieni la cronologia degli esercizi</b> Registra quanto spesso la tua persona si impegna in esercizi mentali! In questo modo tieni un prezioso diario con relative statistiche. Ricorda, ciò che conta di più è la frequenza della pratica e la qualità della relazione. <br> <br> Seleziona l'esercizio che ha svolto e fai clic sul pulsante \"Eseguito oggi\". Automaticamente, esso viene registrato nel registro. Puoi vedere la cronologia nella sezione \"Cronologia\"","receive_notifications":"Ricevi notifiche di attività","save":"Salva","notifications_not_supported":"Questo dispositivo non supporta le notifiche.","every_day":"Ogni giorno","every_week":"Una volta a settimana","every_month":"Una volta al mese","no_notifications":"Questo dispositivo non supporta le notifiche.","settings_saved":"Le impostazioni sono state salvate.","please_select":"Si prega di selezionare una scelta","exercise_history":"Cronologia di Attività","days_that_exercises_were_performed":"Giorni nei quali sono stati eseguiti esercizi","for_the_last_month":"L’ultimo mese","for_the_last_weeks":"Gli ultimi 15 giorni","for_the_last_months":"L’ultimo trimestre","activity_done":"Attività completata","app_activity":"diAnoia - Attività","share_with":"Condividi con","sharing_not_supported":"Questo dispositivo non supporta la condivisione delle attività","error":"Errore","previous":"Precedente","next":"Prossimo","see_activity":"Visualizza l'attività","share_and_print":"Condividi e stampa","more_info_help":"Ulteriori opzioni e aiuto","activity_done_btn":"Attività svolta oggi","close":"Chiudere","cancel":"Annulla","please_wait":"Attendere prego","activity_translation_singular":"attività","activity_translation_plural":"attività"}

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCallsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_storage_app_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiCallsProvider = /** @class */ (function () {
    function ApiCallsProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ApiCallsProvider.prototype.getHttpCall = function (cacheKey, httpCall) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            // if value on local storage exists call observer next.
            _this.storage.get(cacheKey).then(function (response) {
                var data = JSON.parse(response);
                if (data != null)
                    observer.next(data);
            });
            // do api call and call next again
            httpCall().subscribe(function (httpResponse) {
                _this.storage.set(cacheKey, httpResponse);
                observer.next(httpResponse);
                observer.complete(); // call complete if you want to close this stream (like a promise)
            });
        });
    };
    ApiCallsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__app_storage_app_storage__["a" /* AppStorageProvider */]])
    ], ApiCallsProvider);
    return ApiCallsProvider;
}());

//# sourceMappingURL=api-calls.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppStorageProvider = /** @class */ (function () {
    function AppStorageProvider(storage) {
        this.storage = storage;
    }
    AppStorageProvider.prototype.set = function (dataKey, data) {
        return this.storage.set(dataKey, JSON.stringify(data));
    };
    AppStorageProvider.prototype.get = function (dataKey) {
        return this.storage.get(dataKey);
    };
    AppStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], AppStorageProvider);
    return AppStorageProvider;
}());

//# sourceMappingURL=app-storage.js.map

/***/ })

},[237]);
//# sourceMappingURL=main.js.map