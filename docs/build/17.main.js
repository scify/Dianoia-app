webpackJsonp([17],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(296);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = (function () {
    function HelpPageModule() {
    }
    return HelpPageModule;
}());
HelpPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]
        ]
    })
], HelpPageModule);

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
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
 * Generated class for the HelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    return HelpPage;
}());
HelpPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Βοήθεια</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="basicInfoContainer">\n    <div class="imgContainer">\n      <img src="assets/img/help.png">\n    </div>\n  </div>\n\n    <div class="description">\n      <b>Εκτυπώσετε τις Νοητικές Ασκήσεις</b>\n      Μέσα από τη ΔιΆνοια, μπορείτε εύκολα να εκτυπώσετε τις Νοητικές Ασκήσεις!\n      <br>\n      <br>\n      Επιλέξτε την άσκηση που σας ενδιαφέρει και πατήστε το κουμπί "Share"\n      Επιλέξτε όποια εφαρμογή σας βολεύει για να αποκτήσετε την άσκηση σε εκτυπώσιμη μορφή.\n      <br>Μια πολύ συνηθισμένη λύση είναι να τη στείλετε στον εαυτό σας με e-mail. Ανοίγοντας το mail από τον υπολογιστή σας, μπορείτε άμεσα να την εκτυπώσετε.\n      <br>\n      <br>\n      <b>Κρατήστε το ιστορικό των ασκήσεων</b>\n      Μέσα από τη ΔιΆνοια, μπορείτε να καταγράψετε πόσο συχνά ο άνθρωπός σας ασχολείται με νοητικές ασκήσεις! <br>Κρατάτε έτσι ένα πολύτιμο ημερολόγιο με σχετικά στατιστικά.\n      Μην ξεχνάτε, η συχνότητα της εξάσκησης και η ποιότητα της σχέσης είναι αυτό που μετράει.\n      <br>\n      <br>\n      Επιλέξτε την άσκηση με την οποία ασχολήθηκε και πατήστε το κουμπί "Done".\n      Αυτόματα, καταγράφεται στο ημερολόγιο.\n      Μπορείτε να δείτε το ιστορικό στην ενότητα “Ιστορικό Ασκήσεων”\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/help/help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=17.main.js.map