webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_module__ = __webpack_require__("./src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_page4_page4_component__ = __webpack_require__("./src/app/pages/page4/page4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_page3_page3_component__ = __webpack_require__("./src/app/pages/page3/page3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_page2_page2_component__ = __webpack_require__("./src/app/pages/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_page1_page1_component__ = __webpack_require__("./src/app/pages/page1/page1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'page1', component: __WEBPACK_IMPORTED_MODULE_6__pages_page1_page1_component__["a" /* Page1Component */] },
    { path: 'page2', component: __WEBPACK_IMPORTED_MODULE_5__pages_page2_page2_component__["a" /* Page2Component */] },
    { path: 'page3', component: __WEBPACK_IMPORTED_MODULE_4__pages_page3_page3_component__["a" /* Page3Component */] },
    { path: 'page4', component: __WEBPACK_IMPORTED_MODULE_3__pages_page4_page4_component__["a" /* Page4Component */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/page1/page1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  page1 works!\r\n\r\n  <button (click)=\"next()\">NEXT</button>\r\n\r\n  <div>\r\n    <img src=\"/images/homer.gif\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/page1/page1.component.less":
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%;\n  background: lightblue;\n}\n.spinner {\n  margin-left: 50px;\n  position: fixed;\n}\n"

/***/ }),

/***/ "./src/app/pages/page1/page1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page1Component = /** @class */ (function () {
    function Page1Component(router) {
        this.router = router;
    }
    Page1Component.prototype.ngOnInit = function () {
    };
    Page1Component.prototype.next = function () {
        this.router.navigate(['/page2']);
    };
    Page1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page1',
            template: __webpack_require__("./src/app/pages/page1/page1.component.html"),
            styles: [__webpack_require__("./src/app/pages/page1/page1.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "./src/app/pages/page2/page2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\npage2 works!\r\n\r\n  <button (click)=\"next()\">NEXT</button>\r\n  <button (click)=\"prev()\">PREV</button>\r\n  <div class=\"spinner\">\r\n    <div class=\"lds-hourglass\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/page2/page2.component.less":
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%;\n  background: lightsalmon;\n}\n"

/***/ }),

/***/ "./src/app/pages/page2/page2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page2Component = /** @class */ (function () {
    function Page2Component(router) {
        this.router = router;
    }
    Page2Component.prototype.ngOnInit = function () {
    };
    Page2Component.prototype.next = function () {
        this.router.navigate(['/page3']);
    };
    Page2Component.prototype.prev = function () {
        this.router.navigate(['/page1']);
    };
    Page2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page2',
            template: __webpack_require__("./src/app/pages/page2/page2.component.html"),
            styles: [__webpack_require__("./src/app/pages/page2/page2.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "./src/app/pages/page3/page3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\npage3 works!\r\n\r\n  <button (click)=\"next()\">NEXT</button>\r\n  <button (click)=\"prev()\">PREV</button>\r\n  <div class=\"spinner\">\r\n    <div class=\"lds-circle\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/page3/page3.component.less":
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%;\n  background: lightseagreen;\n}\n.spinner {\n  margin-left: 50px;\n}\n"

/***/ }),

/***/ "./src/app/pages/page3/page3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page3Component = /** @class */ (function () {
    function Page3Component(router) {
        this.router = router;
    }
    Page3Component.prototype.ngOnInit = function () {
    };
    Page3Component.prototype.next = function () {
        this.router.navigate(['/page4']);
    };
    Page3Component.prototype.prev = function () {
        this.router.navigate(['/page2']);
    };
    Page3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page3',
            template: __webpack_require__("./src/app/pages/page3/page3.component.html"),
            styles: [__webpack_require__("./src/app/pages/page3/page3.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], Page3Component);
    return Page3Component;
}());



/***/ }),

/***/ "./src/app/pages/page4/page4.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"wrapper\">\r\n  <button (click)=\"next()\">NEXT</button>\r\n  <button (click)=\"prev()\">PREV</button>\r\n\r\n  <div class=\"parallax\">\r\n  </div>\r\n\r\n  <div class=\"section\">\r\n  </div>\r\n\r\n  <ngx-carousel [inputs]=\"carouselOne\">\r\n    <ngx-item NgxCarouselItem>\r\n      <div class=\"section\">\r\n        <div></div>\r\n        <img  src=\"https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&h=350\">\r\n      </div>\r\n    </ngx-item>\r\n    <ngx-item NgxCarouselItem>\r\n      <div class=\"section\">\r\n        <div></div>\r\n        <img src=\"https://images.pexels.com/photos/87840/daisy-pollen-flower-nature-87840.jpeg?auto=compress&cs=tinysrgb&h=350\">\r\n      </div>\r\n    </ngx-item>\r\n    <ngx-item NgxCarouselItem>\r\n      <div class=\"section\">\r\n        <div></div>\r\n          <img src=\"https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?auto=compress&cs=tinysrgb&h=350\">\r\n      </div>\r\n    </ngx-item>\r\n    <button NgxCarouselPrev class='leftRs'>&lt;</button>\r\n    <button NgxCarouselNext class='rightRs'>&gt;</button>\r\n  </ngx-carousel>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/page4/page4.component.less":
/***/ (function(module, exports) {

module.exports = ".parallax {\n  background-image: url(\"https://picsum.photos/500/300/?image=507\");\n  min-height: 200px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.section {\n  height: 1000px;\n  background-color: #bdbdbd;\n  font-size: 36px;\n}\nh1 {\n  margin: 0px;\n}\n.section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100px;\n  width: 100%;\n}\n.section > div {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  background: lightslategray;\n}\n.section img {\n  height: 100%;\n  width: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n"

/***/ }),

/***/ "./src/app/pages/page4/page4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page4Component = /** @class */ (function () {
    function Page4Component(router) {
        this.router = router;
    }
    Page4Component.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            custom: 'banner'
        };
    };
    Page4Component.prototype.next = function () {
        this.router.navigate(['/page4']);
    };
    Page4Component.prototype.prev = function () {
        this.router.navigate(['/page3']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Page4Component.prototype, "carouselOne", void 0);
    Page4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page4',
            template: __webpack_require__("./src/app/pages/page4/page4.component.html"),
            styles: [__webpack_require__("./src/app/pages/page4/page4.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], Page4Component);
    return Page4Component;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page1_page1_component__ = __webpack_require__("./src/app/pages/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page2_page2_component__ = __webpack_require__("./src/app/pages/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page3_page3_component__ = __webpack_require__("./src/app/pages/page3/page3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page4_page4_component__ = __webpack_require__("./src/app/pages/page4/page4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_carousel__ = __webpack_require__("./node_modules/ngx-carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page1_page1_component__["a" /* Page1Component */],
                __WEBPACK_IMPORTED_MODULE_3__page2_page2_component__["a" /* Page2Component */],
                __WEBPACK_IMPORTED_MODULE_4__page3_page3_component__["a" /* Page3Component */],
                __WEBPACK_IMPORTED_MODULE_5__page4_page4_component__["a" /* Page4Component */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map