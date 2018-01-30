webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'manager' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fm-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mock_backend_mock_backend__ = __webpack_require__("../../../../../src/app/mock-backend/mock-backend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manager_manager_module__ = __webpack_require__("../../../../../src/app/manager/manager.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var httpModules = [
    __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpClientModule */]
];
if (__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].useMockBackend) {
    httpModules.push(__WEBPACK_IMPORTED_MODULE_7_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__mock_backend_mock_backend__["a" /* MockBackend */], { delay: 200, apiBase: '' }));
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["e" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot()
            ].concat(httpModules, [
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_11__manager_manager_module__["a" /* ManagerModule */]
            ]),
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth', component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */], children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] }
        ]
    }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col col-sm-6 col-md-5 col-lg-4 col-xl-3\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <ul class=\"nav nav-fill nav-tabs card-header-tabs\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"./login\"\n                 routerLinkActive=\"active\" href=\"#\">Login</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"./register\"\n                 routerLinkActive=\"active\" href=\"#\">Register</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-block\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid, .row {\n  height: 100%; }\n\n.container-fluid .row {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.container-fluid .row .col {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.container-fluid .row .col .card {\n      border-radius: 0;\n      -webkit-box-shadow: 2px 2px 5px #eaeaea;\n              box-shadow: 2px 2px 5px #eaeaea;\n      margin: auto;\n      width: 100%; }\n\n.container-fluid .row .col .card .card-block {\n        padding: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fm-login',
            template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth.component.scss")]
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('user')) {
            return true;
        }
        this.router.navigate(['auth']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__token_interceptor__ = __webpack_require__("../../../../../src/app/auth/token.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_11__token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.authBaseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].restApiUrl + "auth";
        this.storage = localStorage;
    }
    AuthService.prototype.login = function (loginForm) {
        return this.http.post(this.authBaseUrl + "/login", loginForm)
            .do(this.saveUserToStorage.bind(this));
    };
    AuthService.prototype.register = function (registerForm) {
        return this.http.post(this.authBaseUrl + "/register", registerForm)
            .do(this.saveUserToStorage.bind(this));
    };
    AuthService.prototype.getUser = function () {
        return JSON.parse(this.storage.getItem('user'));
    };
    AuthService.prototype.logout = function () {
        this.removeUserFromStorage();
        this.router.navigate(['auth']);
    };
    AuthService.prototype.checkEmailTaken = function (email) {
        return this.http.get(this.authBaseUrl + "/check-email-taken/" + email)
            .map(function (response) { return response.taken; });
    };
    AuthService.prototype.saveUserToStorage = function (user) {
        this.storage.setItem('user', JSON.stringify(user));
    };
    AuthService.prototype.removeUserFromStorage = function () {
        this.storage.removeItem('user');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" (submit)=\"myForm.valid && login()\">\n  <div class=\"form-group\">\n    <input\n      type=\"email\"\n      formControlName=\"email\"\n      class=\"form-control\"\n      placeholder=\"Email\"\n      autocomplete=\"off\"\n    >\n  </div>\n  <div class=\"form-group\">\n    <input\n      type=\"password\"\n      formControlName=\"password\"\n      class=\"form-control\"\n      placeholder=\"Password\"\n    >\n  </div>\n  <div *ngIf=\"wrongCredentials\" class=\"alert alert-danger\" role=\"alert\">\n    <strong>Oops!</strong> Wrong credentials!\n  </div>\n  <div class=\"text-center\">\n    <button type=\"submit\" [disabled]=\"!myForm.valid\"\n            class=\"btn btn-primary\">Login</button>\n  </div>\n</form>\n<div *ngIf=\"loading\" class=\"overlay\">\n  <i class=\"fa fa-spinner rotating\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, fb, router) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.loading = false;
        this.wrongCredentials = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authService.login(this.myForm.value).subscribe(function () { return _this.onSuccessfulLogin(); }, function () { return _this.onFailedLogin(); });
    };
    LoginComponent.prototype.onSuccessfulLogin = function () {
        this.loading = false;
        this.router.navigate(['/']);
    };
    LoginComponent.prototype.onFailedLogin = function () {
        this.myForm.reset();
        this.wrongCredentials = true;
        this.loading = false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fm-auth-login',
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/register/register-form.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PasswordValidators; });
var EmailValidators = (function () {
    function EmailValidators() {
    }
    EmailValidators.emailTaken = function (authService) {
        return function (c) {
            return authService.checkEmailTaken(c.value).map(function (isTaken) { return isTaken ? { emailTaken: true } : null; });
        };
    };
    return EmailValidators;
}());

var PasswordValidators = (function () {
    function PasswordValidators() {
    }
    PasswordValidators.valuesMatch = function (fg) {
        var val = fg.controls['val'];
        var confirmVal = fg.controls['confirmVal'];
        var errors;
        if (val.value !== confirmVal.value) {
            errors = { valuesMatch: true };
        }
        confirmVal.setErrors(errors);
        return errors;
    };
    return PasswordValidators;
}());



/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" (submit)=\"myForm.valid && register()\">\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input\n      type=\"email\"\n      id=\"email\"\n      formControlName=\"email\"\n      class=\"form-control\"\n      autocomplete=\"off\"\n      fmValidationStatus=\"ivp\"\n    >\n    <i class=\"fa fa-spinner rotating\"></i>\n    <span fmValidationFeedback=\"email\" error=\"email\">\n      Invalid email address.</span>\n    <span fmValidationFeedback=\"email\" error=\"emailTaken\">\n      Sorry, that email is already taken.</span>\n    <span fmValidationFeedback=\"email\" error=\"required\">\n      This field is required.</span>\n  </div>\n  <div class=\"form-group\" formGroupName=\"password\">\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input\n        type=\"password\"\n        id=\"password\"\n        formControlName=\"val\"\n        class=\"form-control\"\n        fmValidationStatus\n      >\n      <span fmValidationFeedback=\"password.val\" error=\"minlength\">\n      Password must have at least 5 characters.</span>\n      <span fmValidationFeedback=\"password.val\" error=\"required\">\n      This field is required.</span>\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"password\"\n        formControlName=\"confirmVal\"\n        class=\"form-control\"\n        placeholder=\"Confirm password\"\n        fmValidationStatus\n      >\n      <span fmValidationFeedback=\"password\" error=\"valuesMatch\">\n      Passwords don't match.</span>\n    </div>\n  </div>\n  <div class=\"text-center\">\n    <button type=\"submit\" [disabled]=\"!myForm.valid\"\n            class=\"btn btn-primary\">Create Account</button>\n  </div>\n</form>\n<div *ngIf=\"loading\" class=\"overlay\">\n  <i class=\"fa fa-spinner rotating\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_form_validators__ = __webpack_require__("../../../../../src/app/auth/register/register-form.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(authService, fb, router) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            // EMAIL INPUT
            email: [
                '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email],
                __WEBPACK_IMPORTED_MODULE_3__register_form_validators__["a" /* EmailValidators */].emailTaken(this.authService)
            ],
            // PASSWORD GROUP
            password: this.fb.group({
                val: ['', [
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(5)
                    ]],
                confirmVal: ''
            }, { validator: __WEBPACK_IMPORTED_MODULE_3__register_form_validators__["b" /* PasswordValidators */].valuesMatch })
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        var registerForm = {
            email: this.myForm.value.email,
            password: this.myForm.value.password.val
        };
        this.authService.register(registerForm).subscribe(function () { return _this.onSuccessfulRegister(); });
    };
    RegisterComponent.prototype.onSuccessfulRegister = function () {
        this.router.navigate(['/']);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fm-auth-register',
            template: __webpack_require__("../../../../../src/app/auth/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = (function () {
    function TokenInterceptor(injector) {
        this.injector = injector;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var user = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]).getUser();
        if (user) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + user.token
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/manager/dashboard/add-operation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOperationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_service__ = __webpack_require__("../../../../../src/app/manager/wallet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddOperationComponent = (function () {
    function AddOperationComponent(bsModalRef, fb, walletService) {
        this.bsModalRef = bsModalRef;
        this.fb = fb;
        this.walletService = walletService;
        this.categories = [];
        this.currencies = [];
    }
    AddOperationComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            date: [new Date().toLocaleDateString(), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            value: [0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            currency: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
    };
    AddOperationComponent.prototype.addOperation = function () {
        if (this.myForm.valid) {
            var operation = this.myForm.value;
            operation.date = __WEBPACK_IMPORTED_MODULE_0_moment__(operation.date).toDate();
            this.walletService.addOperation(operation);
            this.bsModalRef.hide();
        }
    };
    AddOperationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'fm-add-operation',
            template: "\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">New Operation</h5>\n      <button type=\"button\" class=\"close\" (click)=\"bsModalRef.hide()\">\n        <span>&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"myForm\" (submit)=\"addOperation()\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-sm-6\">\n            <label for=\"date\">Date</label>\n            <input bsDatepicker\n                   type=\"text\"\n                   formControlName=\"date\"\n                   class=\"form-control\"\n                   fmValidationStatus=\"i\"\n                   id=\"date\">\n          </div>\n          <div class=\"form-group col-sm-6\">\n            <label for=\"category\">Category</label>\n            <input type=\"text\"\n                   formControlName=\"category\"\n                   [typeahead]=\"categories\"\n                   [typeaheadOptionsLimit]=\"5\"\n                   [typeaheadMinLength]=\"1\"\n                   class=\"form-control\"\n                   autocomplete=\"off\"\n                   fmValidationStatus=\"i\"\n                   id=\"category\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-sm-6\">\n            <label for=\"value\">Value</label>\n            <input type=\"number\"\n                   formControlName=\"value\"\n                   class=\"form-control\"\n                   fmValidationStatus=\"i\"\n                   id=\"value\">\n          </div>\n          <div class=\"form-group col-sm-6\">\n            <label for=\"currency\">Currency</label>\n            <input type=\"text\"\n                   formControlName=\"currency\"\n                   [typeahead]=\"currencies\"\n                   [typeaheadOptionsLimit]=\"5\"\n                   [typeaheadMinLength]=\"1\"\n                   class=\"form-control\"\n                   autocomplete=\"off\"\n                   fmValidationStatus=\"i\"\n                   id=\"currency\">\n          </div>\n        </div>\n        <button type=\"submit\" class=\"d-none\"></button>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              [disabled]=\"!myForm.valid\" (click)=\"addOperation()\">Add\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary\"\n              (click)=\"bsModalRef.hide()\">Close\n      </button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__wallet_service__["a" /* WalletService */]])
    ], AddOperationComponent);
    return AddOperationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/dashboard/charts/category-chart-config.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryChartConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_config_model__ = __webpack_require__("../../../../../src/app/manager/dashboard/charts/chart-config.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_utils__ = __webpack_require__("../../../../../src/app/manager/dashboard/charts/data-utils.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CategoryChartConfig = (function (_super) {
    __extends(CategoryChartConfig, _super);
    function CategoryChartConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = {
            animation: false
        };
        return _this;
    }
    CategoryChartConfig.prototype.recalculate = function (operations) {
        var _a = __WEBPACK_IMPORTED_MODULE_1_ramda__["d" /* pipe */](__WEBPACK_IMPORTED_MODULE_2__data_utils__["c" /* filterExpenses */], __WEBPACK_IMPORTED_MODULE_2__data_utils__["d" /* reduceByCategory */], __WEBPACK_IMPORTED_MODULE_2__data_utils__["f" /* toDataAndLabels */])(operations), data = _a.data, labels = _a.labels;
        this.datasets = [{ data: data, label: operations[0] && operations[0].currency }];
        this.labels = labels;
    };
    return CategoryChartConfig;
}(__WEBPACK_IMPORTED_MODULE_0__chart_config_model__["a" /* ChartConfig */]));



/***/ }),

/***/ "../../../../../src/app/manager/dashboard/charts/chart-config.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartConfig; });
var ChartConfig = (function () {
    function ChartConfig() {
        this.datasets = [];
        this.labels = [];
        this.options = {};
    }
    return ChartConfig;
}());



/***/ }),

/***/ "../../../../../src/app/manager/dashboard/charts/charts-data-filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsDataFiltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_model__ = __webpack_require__("../../../../../src/app/manager/wallet.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_utils__ = __webpack_require__("../../../../../src/app/manager/dashboard/charts/data-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartsDataFiltersComponent = (function () {
    function ChartsDataFiltersComponent() {
        this.operationsRecalculated = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.reportingMonth = new Date();
    }
    ChartsDataFiltersComponent.prototype.ngOnChanges = function () {
        this.resetReportingCurrency();
        this.updateFilters();
    };
    ChartsDataFiltersComponent.prototype.updateFilters = function () {
        var filteredOperations = __WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* pipe */](Object(__WEBPACK_IMPORTED_MODULE_4__data_utils__["a" /* filterByCurrency */])(this.reportingCurrency), Object(__WEBPACK_IMPORTED_MODULE_4__data_utils__["b" /* filterByMonth */])(this.reportingMonth))(this.wallet.operations);
        this.operationsRecalculated.emit(filteredOperations);
    };
    ChartsDataFiltersComponent.prototype.formatReportingMonth = function () {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(this.reportingMonth).format('MMMM YYYY');
    };
    ChartsDataFiltersComponent.prototype.changeMonth = function (action) {
        this.reportingMonth = __WEBPACK_IMPORTED_MODULE_1_moment__(this.reportingMonth)[action](1, 'months').toDate();
        this.updateFilters();
    };
    ChartsDataFiltersComponent.prototype.resetReportingCurrency = function () {
        var currencies = this.wallet.getCurrencies();
        if (!currencies.includes(this.reportingCurrency)) {
            this.reportingCurrency = currencies[0];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__wallet_model__["a" /* Wallet */])
    ], ChartsDataFiltersComponent.prototype, "wallet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], ChartsDataFiltersComponent.prototype, "operationsRecalculated", void 0);
    ChartsDataFiltersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'fm-charts-data-filters',
            template: "\n    <select\n      class=\"form-control\" [(ngModel)]=\"reportingCurrency\"\n      (ngModelChange)=\"updateFilters()\">\n      <option *ngFor=\"let ccy of wallet.getCurrencies()\" [value]=\"ccy\">\n        {{ ccy }}\n      </option>\n    </select>\n    <div class=\"my-4 text-center\">\n      <div (click)=\"changeMonth('subtract')\" class=\"btn btn-dark w-20\">Prev</div>\n      <div class=\"d-inline-block w-50\">{{ formatReportingMonth() }}</div>\n      <div (click)=\"changeMonth('add')\" class=\"btn btn-dark w-20\">Next</div>\n    </div>\n  "
        })
    ], ChartsDataFiltersComponent);
    return ChartsDataFiltersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/dashboard/charts/dashboard-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_model__ = __webpack_require__("../../../../../src/app/manager/wallet.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_chart_config_model__ = __webpack_require__("../../../../../src/app/manager/dashboard/charts/summary-chart-config.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_chart_config_model__ = __webpack_require__("../../../../../src/app/manager/dashboard/charts/category-chart-config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardChartsComponent = (function () {
    function DashboardChartsComponent() {
        this.charts = {
            summary: new __WEBPACK_IMPORTED_MODULE_2__summary_chart_config_model__["a" /* SummaryChartConfig */](),
            category: new __WEBPACK_IMPORTED_MODULE_3__category_chart_config_model__["a" /* CategoryChartConfig */]()
        };
    }
    DashboardChartsComponent.prototype.recalculateCharts = function (operations) {
        this.filteredOperations = operations;
        for (var chart in this.charts) {
            this.charts[chart].recalculate(operations);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__wallet_model__["a" /* Wallet */])
    ], DashboardChartsComponent.prototype, "wallet", void 0);
    DashboardChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fm-dashboard-charts',
            template: "\n    <div *ngIf=\"!wallet.isEmpty()\">\n      <h5 class=\"my-4\">Statistics</h5>\n      <fm-charts-data-filters\n        [wallet]=\"wallet\"\n        (operationsRecalculated)=\"recalculateCharts($event)\">\n      </fm-charts-data-filters>\n      <div *ngIf=\"filteredOperations && filteredOperations.length > 0\">\n        <canvas baseChart class=\"my-4\"\n                [chartType]=\"'line'\"\n                [options]=\"charts.summary.options\"\n                [datasets]=\"charts.summary.datasets\"\n                [labels]=\"charts.summary.labels\"></canvas>\n        <canvas baseChart class=\"my-4\"\n                [chartType]=\"'pie'\"\n                [options]=\"charts.category.options\"\n                [datasets]=\"charts.category.datasets\"\n                [labels]=\"charts.category.labels\"></canvas>\n      </div>\n      <div class=\"my-4\" *ngIf=\"filteredOperations && filteredOperations.length === 0\">\n        There are no operations matching this criteria.\n      </div>\n    </div>\n    <h5 *ngIf=\"wallet.isEmpty()\">The wallet is empty.</h5>\n  "
        })
    ], DashboardChartsComponent);
    return DashboardChartsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/dashboard/charts/data-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reduceByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reduceByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterExpenses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterByCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return filterByMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return toDataAndLabels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");

var reduceByDate = __WEBPACK_IMPORTED_MODULE_0_ramda__["h" /* reduceBy */](function (acc, op) { return acc + op.value; }, 0, function (op) { return op.date.toDateString(); });
var reduceByCategory = __WEBPACK_IMPORTED_MODULE_0_ramda__["h" /* reduceBy */](function (acc, op) { return acc + Math.abs(op.value); }, 0, function (op) { return op.category; });
var filterExpenses = __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* filter */](function (op) { return op.value < 0; });
var filterByCurrency = function (currency) { return __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* filter */](__WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* propEq */]('currency', currency)); };
var filterByMonth = function (date) { return __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* filter */](__WEBPACK_IMPORTED_MODULE_0_ramda__["f" /* propSatisfies */](function (d) { return d.getMonth() === date.getMonth()
    && d.getFullYear() === date.getFullYear(); }, 'date')); };
var toDataAndLabels = __WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* pipe */](__WEBPACK_IMPORTED_MODULE_0_ramda__["i" /* toPairs */], __WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* reduce */](function (acc, pair) { return ({
    data: acc.data.concat([pair[1]]),
    labels: acc.labels.concat([pair[0]])
}); }, { data: [], labels: [] }));


/***/ }),

/***/ "../../../../../src/app/manager/dashboard/charts/summary-chart-config.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryChartConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_config_model__ = __webpack_require__("../../../../../src/app/manager/dashboard/charts/chart-config.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_utils__ = __webpack_require__("../../../../../src/app/manager/dashboard/charts/data-utils.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SummaryChartConfig = (function (_super) {
    __extends(SummaryChartConfig, _super);
    function SummaryChartConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = {
            animation: false,
            legend: false,
            scales: {
                xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'day',
                            unitStepSize: 1,
                            displayFormats: {
                                'day': 'MMM DD'
                            }
                        }
                    }]
            }
        };
        return _this;
    }
    SummaryChartConfig.prototype.recalculate = function (operations) {
        var prev = 0;
        var adjustValues = __WEBPACK_IMPORTED_MODULE_1_ramda__["d" /* pipe */](__WEBPACK_IMPORTED_MODULE_1_ramda__["i" /* toPairs */], __WEBPACK_IMPORTED_MODULE_1_ramda__["b" /* forEach */](function (pair) {
            return prev = (pair[1] += prev);
        }), __WEBPACK_IMPORTED_MODULE_1_ramda__["c" /* fromPairs */]);
        var _a = __WEBPACK_IMPORTED_MODULE_1_ramda__["d" /* pipe */](__WEBPACK_IMPORTED_MODULE_2__data_utils__["e" /* reduceByDate */], adjustValues, __WEBPACK_IMPORTED_MODULE_2__data_utils__["f" /* toDataAndLabels */])(operations), data = _a.data, labels = _a.labels;
        this.datasets = [{ data: data, label: operations[0] && operations[0].currency }];
        this.labels = labels.map(function (t) { return new Date(t); });
    };
    return SummaryChartConfig;
}(__WEBPACK_IMPORTED_MODULE_0__chart_config_model__["a" /* ChartConfig */]));



/***/ }),

/***/ "../../../../../src/app/manager/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_service__ = __webpack_require__("../../../../../src/app/manager/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auto_unsubscribe_annotation__ = __webpack_require__("../../../../../src/app/shared/auto-unsubscribe.annotation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(walletService) {
        this.walletService = walletService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.walletService.getWallet()
            .subscribe(function (wallet) { return _this.wallet = wallet; });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fm-dashboard',
            template: "\n    <div *ngIf=\"wallet\" class=\"container-fluid py-3 px-md-5\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6\">\n          <fm-dashboard-charts [wallet]=\"wallet\"></fm-dashboard-charts>\n        </div>\n        <div class=\"col-sm-12 col-md-6\">\n          <fm-operations-list [wallet]=\"wallet\"></fm-operations-list>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!wallet\" class=\"overlay\">\n      <i class=\"fa fa-spinner rotating\"></i>\n    </div>\n  "
        }),
        __WEBPACK_IMPORTED_MODULE_2__shared_auto_unsubscribe_annotation__["a" /* AutoUnsubscribe */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__wallet_service__["a" /* WalletService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/dashboard/operations-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  font-size: 13px;\n  text-align: center; }\n  table tbody {\n    display: block;\n    max-height: 300px;\n    overflow-y: scroll; }\n  table thead, table tr {\n    display: table;\n    table-layout: fixed;\n    width: 100%; }\n  table thead {\n    width: calc(100% - 1em); }\n  table .fa-trash {\n    cursor: pointer;\n    color: gray;\n    font-size: 15px; }\n  table .fa-trash:hover {\n      color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/dashboard/operations-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_model__ = __webpack_require__("../../../../../src/app/manager/wallet.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_service__ = __webpack_require__("../../../../../src/app/manager/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_operation_component__ = __webpack_require__("../../../../../src/app/manager/dashboard/add-operation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OperationsListComponent = (function () {
    function OperationsListComponent(walletService, modalService) {
        this.walletService = walletService;
        this.modalService = modalService;
    }
    OperationsListComponent.prototype.deleteOperation = function (operationId) {
        this.walletService.deleteOperation(operationId);
    };
    OperationsListComponent.prototype.showAddOperationModal = function () {
        var bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__add_operation_component__["a" /* AddOperationComponent */]);
        bsModalRef.content.categories = this.wallet.getCategories();
        bsModalRef.content.currencies = this.wallet.getCurrencies();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__wallet_model__["a" /* Wallet */])
    ], OperationsListComponent.prototype, "wallet", void 0);
    OperationsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fm-operations-list',
            template: "\n    <h5 class=\"my-4\">Operations List</h5>\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Value</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\"></th>\n      </tr>\n      </thead>\n      <tbody *ngIf=\"!wallet.isEmpty()\">\n      <tr *ngFor=\"let op of wallet.operations\">\n        <td>{{ op.date.toLocaleDateString() }}</td>\n        <td>{{ op.value + ' ' + op.currency }}</td>\n        <td>{{ op.category }}</td>\n        <td><i (click)=\"deleteOperation(op.id)\" class=\"fa fa-trash\"></i></td>\n      </tr>\n      </tbody>\n    </table>\n    <button (click)=\"showAddOperationModal()\" type=\"button\" class=\"btn btn-primary pull-right\">\n      Add Operation\n    </button>\n  ",
            styles: [__webpack_require__("../../../../../src/app/manager/dashboard/operations-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["c" /* BsModalService */]])
    ], OperationsListComponent);
    return OperationsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/manager-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagerNavbarComponent = (function () {
    function ManagerNavbarComponent(authService) {
        this.authService = authService;
    }
    ManagerNavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    ManagerNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fm-manager-navbar',
            template: "\n    <nav class=\"navbar navbar-light bg-light justify-content-between px-md-5\">\n      <a class=\"navbar-brand\" routerLink=\"/\">Finance Manager</a>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"logout()\">Logout</button>\n    </nav>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], ManagerNavbarComponent);
    return ManagerNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/manager-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_component__ = __webpack_require__("../../../../../src/app/manager/manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/manager/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'manager', component: __WEBPACK_IMPORTED_MODULE_2__manager_component__["a" /* ManagerComponent */], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__["a" /* AuthGuard */]] }
];
var ManagerRoutingModule = (function () {
    function ManagerRoutingModule() {
    }
    ManagerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ManagerRoutingModule);
    return ManagerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/manager/manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_service__ = __webpack_require__("../../../../../src/app/manager/wallet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagerComponent = (function () {
    function ManagerComponent(walletService) {
        this.walletService = walletService;
        this.walletService.loadWallet();
    }
    ManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fm-manager',
            template: "\n    <fm-manager-navbar></fm-manager-navbar>\n    <router-outlet></router-outlet>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__wallet_service__["a" /* WalletService */]])
    ], ManagerComponent);
    return ManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/manager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_component__ = __webpack_require__("../../../../../src/app/manager/manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_routing_module__ = __webpack_require__("../../../../../src/app/manager/manager-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/manager/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manager_navbar_component__ = __webpack_require__("../../../../../src/app/manager/manager-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallet_service__ = __webpack_require__("../../../../../src/app/manager/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_x__ = __webpack_require__("../../../../ng2-charts-x/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_charts_dashboard_charts_component__ = __webpack_require__("../../../../../src/app/manager/dashboard/charts/dashboard-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_operations_list_component__ = __webpack_require__("../../../../../src/app/manager/dashboard/operations-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_charts_charts_data_filters_component__ = __webpack_require__("../../../../../src/app/manager/dashboard/charts/charts-data-filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_add_operation_component__ = __webpack_require__("../../../../../src/app/manager/dashboard/add-operation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ManagerModule = (function () {
    function ManagerModule() {
    }
    ManagerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__manager_routing_module__["a" /* ManagerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts_x__["a" /* ChartsModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["d" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["e" /* TypeaheadModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["a" /* BsDatepickerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__manager_component__["a" /* ManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__manager_navbar_component__["a" /* ManagerNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_charts_dashboard_charts_component__["a" /* DashboardChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_charts_charts_data_filters_component__["a" /* ChartsDataFiltersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_operations_list_component__["a" /* OperationsListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_add_operation_component__["a" /* AddOperationComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__dashboard_add_operation_component__["a" /* AddOperationComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__wallet_service__["a" /* WalletService */]
            ]
        })
    ], ManagerModule);
    return ManagerModule;
}());



/***/ }),

/***/ "../../../../../src/app/manager/wallet.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wallet; });
var Wallet = (function () {
    function Wallet(operations) {
        if (operations === void 0) { operations = []; }
        this.operations = operations;
        // On creation, sort operations array
        // by date, from oldest to newest.
        this.operations.sort(function (a, b) {
            return a.date.getTime() - b.date.getTime();
        });
    }
    Wallet.prototype.getCurrencies = function () {
        return this.operations
            .map(function (op) { return op.currency; })
            .filter(function (ccy, idx, arr) { return arr.indexOf(ccy) === idx; });
    };
    Wallet.prototype.getCategories = function () {
        return this.operations
            .map(function (op) { return op.category; })
            .filter(function (ccy, idx, arr) { return arr.indexOf(ccy) === idx; });
    };
    Wallet.prototype.isEmpty = function () {
        return this.operations.length === 0;
    };
    return Wallet;
}());



/***/ }),

/***/ "../../../../../src/app/manager/wallet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_model__ = __webpack_require__("../../../../../src/app/manager/wallet.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WalletService = (function () {
    function WalletService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.operationsBaseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].restApiUrl + "manager/operations";
    }
    WalletService.prototype.getWallet = function () {
        return this.wallet$.asObservable();
    };
    WalletService.prototype.loadWallet = function () {
        this.wallet$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.http.get(this.operationsBaseUrl)
            .subscribe(this.updateState.bind(this));
    };
    WalletService.prototype.deleteOperation = function (operationId) {
        var _this = this;
        var updatedOperations = this.operations
            .filter(function (op) { return op.id !== operationId; });
        this.http.delete(this.operationsBaseUrl + "/" + operationId)
            .subscribe(function () { return _this.updateState(updatedOperations); });
    };
    WalletService.prototype.addOperation = function (operation) {
        var _this = this;
        var updatedOperations = this.operations.concat([operation]);
        operation.issuerId = this.authService.getUser().id;
        this.http.post("" + this.operationsBaseUrl, operation)
            .subscribe(function () { return _this.updateState(updatedOperations); });
    };
    WalletService.prototype.updateState = function (operations) {
        this.operations = operations;
        this.wallet$.next(new __WEBPACK_IMPORTED_MODULE_2__wallet_model__["a" /* Wallet */](operations));
    };
    WalletService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]])
    ], WalletService);
    return WalletService;
}());



/***/ }),

/***/ "../../../../../src/app/mock-backend/mock-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockBackend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");

var users = [
    { id: 1, email: 'maciej@gmail.com' },
    { id: 2, email: 'thomas@gmail.com' },
    { id: 3, email: 'konrad@gmail.com' },
    { id: 4, email: 'lukasz@gmail.com' }
];
var operations = [
    { id: 1, issuerId: 1, date: new Date('2017-12-10'), value: -20, currency: 'EUR', category: 'Food' },
    { id: 2, issuerId: 1, date: new Date('2018-01-11'), value: -80, currency: 'PLN', category: 'Fuel' },
    { id: 3, issuerId: 1, date: new Date('2017-12-11'), value: -30, currency: 'EUR', category: 'Food' },
    { id: 4, issuerId: 1, date: new Date('2018-01-11'), value: -30, currency: 'PLN', category: 'Food' },
    { id: 5, issuerId: 1, date: new Date('2018-01-13'), value: -70, currency: 'PLN', category: 'Fun' },
    { id: 6, issuerId: 1, date: new Date('2018-01-15'), value: -35, currency: 'PLN', category: 'Education' },
    { id: 7, issuerId: 1, date: new Date('2018-01-12'), value: 900, currency: 'PLN', category: 'Work' }
];
var passwords = {
    'default': 'passwd'
};
var MockBackend = (function () {
    function MockBackend() {
    }
    MockBackend.prototype.createDb = function () {
        return {};
    };
    MockBackend.prototype.get = function (reqInfo) {
        if (reqInfo.url.startsWith('auth/check-email-taken')) {
            return this.getCheckEmailTaken(reqInfo);
        }
        if (reqInfo.url.startsWith('manager/operations')) {
            return this.getOperations(reqInfo);
        }
        return undefined;
    };
    MockBackend.prototype.post = function (reqInfo) {
        if (reqInfo.url === 'auth/login') {
            return this.postLogin(reqInfo);
        }
        if (reqInfo.url === 'auth/register') {
            return this.postRegister(reqInfo);
        }
        if (reqInfo.url === 'manager/operations') {
            return this.postOperations(reqInfo);
        }
        return undefined;
    };
    MockBackend.prototype.delete = function (reqInfo) {
        if (reqInfo.url.startsWith('manager/operations')) {
            return this.deleteOperation(reqInfo);
        }
        return undefined;
    };
    MockBackend.prototype.getCheckEmailTaken = function (reqInfo) {
        var email = reqInfo.url.split('/')[2];
        var taken = users.some(function (user) {
            return user.email.toLowerCase() === email.toLowerCase();
        });
        return reqInfo.utils.createResponse$(function () {
            return {
                body: { taken: taken },
                status: __WEBPACK_IMPORTED_MODULE_0_angular_in_memory_web_api__["b" /* STATUS */].OK
            };
        });
    };
    MockBackend.prototype.getOperations = function (reqInfo) {
        var headers = reqInfo.req['headers'];
        var userId = parseInt(headers.get('Authorization').replace('Bearer ', ''));
        return reqInfo.utils.createResponse$(function () {
            return {
                body: operations.filter(function (op) { return op.issuerId === userId; }),
                status: __WEBPACK_IMPORTED_MODULE_0_angular_in_memory_web_api__["b" /* STATUS */].OK
            };
        });
    };
    MockBackend.prototype.postLogin = function (reqInfo) {
        var loginForm = MockBackend.getRequestBody(reqInfo);
        var user = users.find(function (user) {
            return loginForm.email === user.email && (loginForm.password === passwords.default ||
                loginForm.password === passwords[loginForm.email]);
        });
        if (user) {
            user.token = user.id.toString();
        }
        return reqInfo.utils.createResponse$(function () {
            return user ?
                {
                    body: user,
                    status: __WEBPACK_IMPORTED_MODULE_0_angular_in_memory_web_api__["b" /* STATUS */].OK
                } :
                {
                    status: __WEBPACK_IMPORTED_MODULE_0_angular_in_memory_web_api__["b" /* STATUS */].UNAUTHORIZED
                };
        });
    };
    MockBackend.prototype.postRegister = function (reqInfo) {
        var registerForm = MockBackend.getRequestBody(reqInfo);
        var user = {
            id: users.length + 1,
            email: registerForm.email
        };
        users.push(user);
        passwords[registerForm.email] = registerForm.password;
        return reqInfo.utils.createResponse$(function () {
            return {
                body: {
                    user: Object.assign({}, user, { token: user.id.toString() })
                },
                status: __WEBPACK_IMPORTED_MODULE_0_angular_in_memory_web_api__["b" /* STATUS */].OK
            };
        });
    };
    MockBackend.prototype.postOperations = function (reqInfo) {
        var operation = MockBackend.getRequestBody(reqInfo);
        operation.id = operations.length + 1;
        operations.push(operation);
        return reqInfo.utils.createResponse$(function () {
            return {
                body: {},
                status: __WEBPACK_IMPORTED_MODULE_0_angular_in_memory_web_api__["b" /* STATUS */].OK
            };
        });
    };
    MockBackend.prototype.deleteOperation = function (reqInfo) {
        var opId = parseInt(reqInfo.url.split('/').slice(-1)[0]);
        var index = operations.findIndex(function (op) { return op.id === opId; });
        if (index !== -1) {
            operations.splice(index, 1);
        }
        return reqInfo.utils.createResponse$(function () {
            return {
                body: {},
                status: index !== -1 ? __WEBPACK_IMPORTED_MODULE_0_angular_in_memory_web_api__["b" /* STATUS */].OK : __WEBPACK_IMPORTED_MODULE_0_angular_in_memory_web_api__["b" /* STATUS */].BAD_REQUEST
            };
        });
    };
    MockBackend.getRequestBody = function (reqInfo) {
        var request = reqInfo.req;
        return request.body;
    };
    return MockBackend;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auto-unsubscribe.annotation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AutoUnsubscribe;
function AutoUnsubscribe(constructor) {
    var original = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {
        for (var prop in this) {
            var property = this[prop];
            if (property && typeof property.unsubscribe === 'function') {
                property.unsubscribe();
            }
        }
        original && typeof original === 'function' && original.apply(this, arguments);
    };
}


/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validation_feedback_directive__ = __webpack_require__("../../../../../src/app/shared/validation-feedback.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_status_directive__ = __webpack_require__("../../../../../src/app/shared/validation-status.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__validation_feedback_directive__["a" /* ValidationFeedbackDirective */],
                __WEBPACK_IMPORTED_MODULE_2__validation_status_directive__["a" /* ValidationStatusDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__validation_feedback_directive__["a" /* ValidationFeedbackDirective */],
                __WEBPACK_IMPORTED_MODULE_2__validation_status_directive__["a" /* ValidationStatusDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/validation-feedback.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationFeedbackDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationFeedbackDirective = (function () {
    function ValidationFeedbackDirective(container) {
        this.container = container;
    }
    ValidationFeedbackDirective.prototype.ngOnInit = function () {
        this.initControl();
        this.listenForErrors();
    };
    ValidationFeedbackDirective.prototype.initControl = function () {
        var form = this.container.formDirective['form'];
        if ((this.control = form.get(this.controlName)) == null) {
            throw new Error("Couldn't fetch control " + this.controlName + ".");
        }
    };
    ValidationFeedbackDirective.prototype.listenForErrors = function () {
        var _this = this;
        this.control.statusChanges.subscribe(function () { return _this.isValid = !_this.control.getError(_this.error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fmValidationFeedback'),
        __metadata("design:type", String)
    ], ValidationFeedbackDirective.prototype, "controlName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ValidationFeedbackDirective.prototype, "error", void 0);
    ValidationFeedbackDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fmValidationFeedback]',
            host: {
                'class': 'invalid-feedback',
                '[class.d-none]': 'isValid'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* ControlContainer */]])
    ], ValidationFeedbackDirective);
    return ValidationFeedbackDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/validation-status.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationStatusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ValidationStatusDirective = (function () {
    function ValidationStatusDirective(confStr, el, ngControl, renderer) {
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.config = Config.fromString(confStr);
        this.nativeEl = el.nativeElement;
    }
    ValidationStatusDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.ngControl.statusChanges.subscribe(function (status) { return _this.updateElClasses(status); });
    };
    ValidationStatusDirective.prototype.updateElClasses = function (status) {
        this.removeStatusClasses();
        this.setStatusClass(status);
    };
    ValidationStatusDirective.prototype.removeStatusClasses = function () {
        var _this = this;
        this.config.allClasses.forEach(function (cssClass) { return _this.renderer.removeClass(_this.nativeEl, cssClass); });
    };
    ValidationStatusDirective.prototype.setStatusClass = function (status) {
        var statusConfig = this.config[status];
        if (statusConfig && statusConfig.enabled) {
            this.renderer.addClass(this.nativeEl, statusConfig.cssClass);
        }
    };
    ValidationStatusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fmValidationStatus]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('fmValidationStatus')),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgControl */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], ValidationStatusDirective);
    return ValidationStatusDirective;
}());

var Config = (function () {
    function Config() {
    }
    Config.fromString = function (confStr) {
        // deep copy
        var config = JSON.parse(JSON.stringify(Config.defaultConfig));
        if (!confStr) {
            return config;
        }
        config.INVALID.enabled = confStr.includes('i');
        config.PENDING.enabled = confStr.includes('p');
        config.VALID.enabled = confStr.includes('v');
        return config;
    };
    ;
    Config.defaultConfig = {
        INVALID: {
            cssClass: 'is-invalid',
            enabled: true
        },
        PENDING: {
            cssClass: 'is-pending',
            enabled: false
        },
        VALID: {
            cssClass: 'is-valid',
            enabled: true
        },
        allClasses: ['is-invalid', 'is-pending', 'is-valid']
    };
    return Config;
}());


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    useMockBackend: true,
    restApiUrl: ''
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map