webpackJsonp([3],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_list__ = __webpack_require__(284);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoListPageModule", function() { return InfoListPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoListPageModule = (function () {
    function InfoListPageModule() {
    }
    return InfoListPageModule;
}());
InfoListPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__info_list__["a" /* InfoListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_list__["a" /* InfoListPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__info_list__["a" /* InfoListPage */]
        ]
    })
], InfoListPageModule);

//# sourceMappingURL=info-list.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_page_page__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoListPage; });
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
 * Generated class for the InfoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InfoListPage = (function () {
    function InfoListPage(navCtrl, navParams, pageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pageProvider = pageProvider;
        this.pageFile = "";
        this.pageCode = "";
        var pageData = this.navParams.get("pageData");
        this.pageFile = pageData.pageFile;
        this.pageCode = pageData.pageCode;
    }
    InfoListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.pageCode != null && this.pageFile != null)
            this.pageProvider.getDataForPage(this.pageCode, this.pageFile).subscribe(function (pageData) {
                console.log("pageData", pageData);
                _this.title = pageData.title;
                _this.description = pageData.description;
                _this.image = pageData.image;
                _this.list = pageData.list;
            });
    };
    return InfoListPage;
}());
InfoListPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-info-list',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/info-list/info-list.html"*/'<!--\n  Generated template for the InfoListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="imgContainer">\n    <img [src]="\'/assets/img/\' + image">\n  </div>\n\n  <div class="description">\n    {{ description }}\n  </div>\n  <ion-list class="aboutList" no-lines>\n    <ion-item text-wrap *ngFor="let item of list">\n      <ion-icon name="ios-checkmark" item-left></ion-icon>\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/info-list/info-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_page_page__["a" /* PageProvider */]])
], InfoListPage);

//# sourceMappingURL=info-list.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map