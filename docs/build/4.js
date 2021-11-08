webpackJsonp([4],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoPageModule", function() { return BasicInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_info__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicInfoPageModule = /** @class */ (function () {
    function BasicInfoPageModule() {
    }
    BasicInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__basic_info__["a" /* BasicInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__basic_info__["a" /* BasicInfoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list_module__["a" /* ButtonsListComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__basic_info__["a" /* BasicInfoPage */]
            ]
        })
    ], BasicInfoPageModule);
    return BasicInfoPageModule;
}());

//# sourceMappingURL=basic-info.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_list__ = __webpack_require__(344);
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

/***/ 344:
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(28);
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
 * Generated class for the BasicInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BasicInfoPage = /** @class */ (function () {
    function BasicInfoPage(navCtrl, navParams, translate, sanitizer, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.youtubeLink = '';
        this.translate.onLangChange.subscribe(function () {
            _this.setUpPageElements();
        });
    }
    BasicInfoPage.prototype.ionViewWillLoad = function () {
        this.setUpPageElements();
    };
    BasicInfoPage.prototype.setUpPageElements = function () {
        this.youtubeLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.translate.instant('about_youtube_link'));
        this.buttons = [
            {
                title: this.translate.instant('what_are_activities'),
                component: "InfoListPage",
                pageCode: "page_info",
                pageFile: "pages/" + this.translate.currentLang + "/info.json"
            },
            {
                title: this.translate.instant('goal'),
                component: "InfoListPage",
                pageCode: "page_goal",
                pageFile: "pages/" + this.translate.currentLang + "/goal.json"
            },
            {
                title: this.translate.instant('value'),
                component: "InfoListPage",
                pageCode: "page_value",
                pageFile: "pages/" + this.translate.currentLang + "/value.json"
            }
        ];
    };
    BasicInfoPage.prototype.goTo = function (button) {
        this.navCtrl.push(button.component, { pageData: button });
    };
    BasicInfoPage.prototype.getContainerWidth = function () {
        // left + right padding of page is 32 pixels.
        return screen.width - 32;
    };
    BasicInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basic-info',template:/*ion-inline-start:"/home/paul/projects/dianoia/Dianoia-app/src/pages/basic-info/basic-info.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'basic_info_btn_title\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <buttons-list *ngIf=\'buttons?.length > 0\' [buttons]="buttons" (buttonClick)="goTo($event)"></buttons-list>\n\n  <div class="videoContainer" *ngIf="youtubeLink">\n    <iframe frameborder="0" class="video" width="{{getContainerWidth()}}"\n            [src]="youtubeLink">\n    </iframe>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/paul/projects/dianoia/Dianoia-app/src/pages/basic-info/basic-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], BasicInfoPage);
    return BasicInfoPage;
}());

//# sourceMappingURL=basic-info.js.map

/***/ })

});
//# sourceMappingURL=4.js.map