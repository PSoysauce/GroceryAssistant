function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _need_help_need_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./need-help/need-help.component */
    "./src/app/need-help/need-help.component.ts");
    /* harmony import */


    var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./volunteer/volunteer.component */
    "./src/app/volunteer/volunteer.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'need-help',
      component: _need_help_need_help_component__WEBPACK_IMPORTED_MODULE_3__["NeedHelpComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'volunteer',
      component: _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_4__["VolunteerComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: 'login'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'grocery-assistant';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 18,
      vars: 0,
      consts: [[1, "navbar", "navbar-dark", "bg-dark"], [1, "navbar-brand"], ["routerLinkActive", "active"], ["routerLink", "login", 1, "nav-link"], ["routerLink", "volunteer", 1, "nav-link"], ["routerLink", "need-help", 1, "nav-link"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Grocery Assistant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Volunteer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Need Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Patrick Soisson \xA9 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\nli[_ngcontent-%COMP%] {\n  float: left;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #E2AFA4;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #343a40;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzb2lzc1xcRG9jdW1lbnRzXFxHaXRIdWJcXEdyb2NlcnlBc3Npc3RhbnRcXGdyb2NlcnktYXNzaXN0YW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURFQTtFQUNJLHlCQXBCSTtBQ3FCUjs7QURDQTtFQUNHLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkExQkU7RUEyQkYsWUFBQTtFQUNBLGtCQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGVhY2g6ICNFMkFGQTQgXHJcbiRncjogcmdiKDUyLDU4LDY0KVxyXG51bFxyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lXHJcbiAgICBtYXJnaW46IDBcclxuICAgIHBhZGRpbmc6IDBcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuXHJcbmxpICAgICAgICBcclxuICAgIGZsb2F0OiBsZWZ0XHJcbiAgICBcclxuXHJcbmxpIGFcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICBjb2xvcjogd2hpdGVcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgcGFkZGluZzogMTRweCAxNnB4XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuXHJcbmxpIGE6aG92ZXJcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwZWFjaFxyXG5cclxuZm9vdGVyIFxyXG4gICBwb3NpdGlvbjogZml4ZWRcclxuICAgbGVmdDogMFxyXG4gICBib3R0b206IDBcclxuICAgd2lkdGg6IDEwMCVcclxuICAgYmFja2dyb3VuZC1jb2xvcjogJGdyXHJcbiAgIGNvbG9yOiB3aGl0ZVxyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXIiLCJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5saSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5saSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMkFGQTQ7XG59XG5cbmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./volunteer/volunteer.component */
    "./src/app/volunteer/volunteer.component.ts");
    /* harmony import */


    var _need_help_need_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./need-help/need-help.component */
    "./src/app/need-help/need-help.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_10__["VolunteerComponent"], _need_help_need_help_component__WEBPACK_IMPORTED_MODULE_11__["NeedHelpComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_10__["VolunteerComponent"], _need_help_need_help_component__WEBPACK_IMPORTED_MODULE_11__["NeedHelpComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"]],
          providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login/login.service */
    "./src/app/login/login.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          // return true;// return this.auth.isLoggedIn;
          return this.auth.isLoggedIn;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login/login.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 24,
      vars: 0,
      consts: [["id", "loginbox"], ["type", "text", "placeholder", "Username", "required", "", 1, "input"], ["userName", ""], ["type", "password", "placeholder", "Password", "required", "", 1, "input"], ["userPassword", ""], ["type", "checkbox", "id", "volunteer"], ["for", "volunteer"], ["type", "button", "id", "login", 3, "click"], ["type", "button", "id", "register", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Grocery Assistant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Volunteer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx.authService.SignIn(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx.authService.SignUp(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#loginbox[_ngcontent-%COMP%] {\n  width: 50%;\n  border: 1px solid;\n  padding: 5px;\n  margin: auto;\n  vertical-align: middle;\n  text-align: center;\n  align: center;\n}\n\n.input[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\nlabel[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 15px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  padding: 10px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxzb2lzc1xcRG9jdW1lbnRzXFxHaXRIdWJcXEdyb2NlcnlBc3Npc3RhbnRcXGdyb2NlcnktYXNzaXN0YW50L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0hKOztBRE1BO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSEo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1OiAjMjlCNURGXHJcbiRwZWFjaDogI0UyQUZBNCBcclxuXHJcblxyXG4jbG9naW5ib3hcclxuICAgIHdpZHRoOiA1MCVcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkXHJcbiAgICBwYWRkaW5nOiA1cHhcclxuICAgIG1hcmdpbjogYXV0byAgICBcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgYWxpZ246IGNlbnRlclxyXG4gICAgXHJcblxyXG4uaW5wdXRcclxuICAgIHdpZHRoOiA1MCVcclxuICAgIHBhZGRpbmc6IDE1cHhcclxuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIGJvcmRlcjogbm9uZVxyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMVxyXG5cclxubGFiZWxcclxuICAgIHdpZHRoOiBhdXRvXHJcbiAgICBwYWRkaW5nOiAxNXB4XHJcblxyXG5idXR0b25cclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIFxyXG4gICAgcGFkZGluZzogMTBweCAyNHB4XHJcblxyXG4iLCIjbG9naW5ib3gge1xuICB3aWR0aDogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0IHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG5sYWJlbCB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDI0cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.sass']
        }]
      }], function () {
        return [{
          type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.service.ts":
  /*!****************************************!*\
    !*** ./src/app/login/login.service.ts ***!
    \****************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(afAuth, // Inject Firebase auth service
      router, auth, ngZone // NgZone service to remove outside scope warning
      ) {
        var _this = this;

        _classCallCheck(this, LoginService);

        this.afAuth = afAuth;
        this.router = router;
        this.auth = auth;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */

        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this.userData = user;
            localStorage.setItem('user', JSON.stringify(_this.userData));
            JSON.parse(localStorage.getItem('user'));
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        });
      }

      _createClass(LoginService, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loggedIn = false;
        } // Sign in with email/password

      }, {
        key: "SignIn",
        value: function SignIn(email, password) {
          var _this2 = this;

          return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password) //return this.afAuth.auth().signInWithEmailAndPassword(email, password)
          .then(function (result) {
            var elem = document.getElementById("volunteer");

            _this2.ngZone.run(function () {
              _this2.loggedIn = true;
              if (elem.checked) _this2.router.navigate(['./volunteer']);else _this2.router.navigate(['./need-help']);
            }); //this.SetUserData(result.user);

          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password) {
          var _this3 = this;

          return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password).then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            // this.SendVerificationMail();
            // this.SetUserData(result.user);
            var elem = document.getElementById("volunteer");

            _this3.ngZone.run(function () {
              _this3.loggedIn = true;
              if (elem.checked) _this3.router.navigate(['./volunteer']);else _this3.router.navigate(['./need-help']);
            });
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Returns true when user is looged in and email is verified

      }, {
        key: "SignOut",
        // // Auth logic to run auth providers
        // AuthLogin(provider) {
        //   return this.afAuth.auth.signInWithPopup(provider)
        //   .then((result) => {
        //      this.ngZone.run(() => {
        //         this.router.navigate(['dashboard']);
        //       })
        //     this.SetUserData(result.user);
        //   }).catch((error) => {
        //     window.alert(error)
        //   })
        // }

        /* Setting up user data when sign in with username/password,
        sign up with username/password and sign in with social auth
        provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
        // SetUserData(user) {
        //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        //   const userData: User = {
        //     uid: user.uid,
        //     email: user.email,
        //     displayName: user.displayName,
        //     photoURL: user.photoURL,
        //     emailVerified: user.emailVerified
        //   }
        //   return userRef.set(userData, {
        //     merge: true
        //   })
        // }
        // Sign out 
        value: function SignOut() {
          var _this4 = this;

          return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut().then(function () {
            localStorage.removeItem('user');

            _this4.router.navigate(['sign-in']);
          });
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          return this.loggedIn;
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/need-help/need-help.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/need-help/need-help.component.ts ***!
    \**************************************************/

  /*! exports provided: NeedHelpComponent */

  /***/
  function srcAppNeedHelpNeedHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeedHelpComponent", function () {
      return NeedHelpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/todo.service */
    "./src/app/need-help/shared/todo.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NeedHelpComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NeedHelpComponent_li_10_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var item_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.alterCheck(item_r5.$key, item_r5.isChecked);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NeedHelpComponent_li_10_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var item_r5 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onDelete(item_r5.$key);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-success", item_r5.isChecked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r5.isChecked ? "fa-check-circle-o" : "fa-circle-thin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.title, " ");
      }
    }

    var NeedHelpComponent = /*#__PURE__*/function () {
      function NeedHelpComponent(toDoService) {
        _classCallCheck(this, NeedHelpComponent);

        this.toDoService = toDoService;
      }

      _createClass(NeedHelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.toDoService.getToDoList().snapshotChanges().subscribe(function (item) {
            _this5.toDoListArray = [];
            item.forEach(function (element) {
              var x = element.payload.toJSON();
              x["$key"] = element.key;

              _this5.toDoListArray.push(x);
            });

            _this5.toDoListArray.sort(function (a, b) {
              return a.isChecked - b.isChecked;
            });
          });
        }
      }, {
        key: "onAdd",
        value: function onAdd(itemTitle) {
          this.toDoService.addTitle(itemTitle.value);
          itemTitle.value = null;
        }
      }, {
        key: "alterCheck",
        value: function alterCheck($key, isChecked) {
          this.toDoService.checkOrUnCheckTitle($key, !isChecked);
        }
      }, {
        key: "onDelete",
        value: function onDelete($key) {
          this.toDoService.removeTitle($key);
        }
      }]);

      return NeedHelpComponent;
    }();

    NeedHelpComponent.ɵfac = function NeedHelpComponent_Factory(t) {
      return new (t || NeedHelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]));
    };

    NeedHelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NeedHelpComponent,
      selectors: [["app-need-help"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])],
      decls: 11,
      vars: 1,
      consts: [[1, "jumbotron", 2, "padding", "45px 0px"], [1, "text-center"], [1, "input-group"], ["type", "text", 1, "form-control"], ["itemTitle", ""], [1, "input-group-addon", "hover-cursor", 3, "click"], [1, "fa", "fa-plus-circle", "fa-2x"], [2, "margin", "5px 0px"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "hover-cursor", 3, "click"], [1, "fa", "fa-lg", 3, "ngClass"], [1, "hover-cursor", "text-danger", "pull-right", 3, "click"], [1, "fa", "fa-trash-o", "fa-lg"]],
      template: function NeedHelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shopping List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NeedHelpComponent_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.onAdd(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NeedHelpComponent_li_10_Template, 6, 4, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toDoListArray);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".input-group[_ngcontent-%COMP%], .list-group[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 5px;\n  margin: auto;\n  vertical-align: middle;\n  align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVlZC1oZWxwL0M6XFxVc2Vyc1xcc29pc3NcXERvY3VtZW50c1xcR2l0SHViXFxHcm9jZXJ5QXNzaXN0YW50XFxncm9jZXJ5LWFzc2lzdGFudC9zcmNcXGFwcFxcbmVlZC1oZWxwXFxuZWVkLWhlbHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL25lZWQtaGVscC9uZWVkLWhlbHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25lZWQtaGVscC9uZWVkLWhlbHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAsIC5saXN0LWdyb3VwXHJcbiAgICB3aWR0aDogNTAlXHJcbiAgICBwYWRkaW5nOiA1cHhcclxuICAgIG1hcmdpbjogYXV0byAgICBcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgIGFsaWduOiBjZW50ZXIiLCIuaW5wdXQtZ3JvdXAsIC5saXN0LWdyb3VwIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NeedHelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-need-help',
          templateUrl: './need-help.component.html',
          styleUrls: ['./need-help.component.sass'],
          providers: [_shared_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]]
        }]
      }], function () {
        return [{
          type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/need-help/shared/todo.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/need-help/shared/todo.service.ts ***!
    \**************************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppNeedHelpSharedTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");

    var TodoService = /*#__PURE__*/function () {
      function TodoService(firebasedb) {
        _classCallCheck(this, TodoService);

        this.firebasedb = firebasedb;
      }

      _createClass(TodoService, [{
        key: "getToDoList",
        value: function getToDoList() {
          this.toDoList = this.firebasedb.list('titles');
          return this.toDoList;
        }
      }, {
        key: "addTitle",
        value: function addTitle(title) {
          this.toDoList.push({
            title: title,
            isChecked: false
          });
        }
      }, {
        key: "checkOrUnCheckTitle",
        value: function checkOrUnCheckTitle($key, flag) {
          this.toDoList.update($key, {
            isChecked: flag
          });
        }
      }, {
        key: "removeTitle",
        value: function removeTitle($key) {
          this.toDoList.remove($key);
        }
      }]);

      return TodoService;
    }();

    TodoService.ɵfac = function TodoService_Factory(t) {
      return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
    };

    TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TodoService,
      factory: TodoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/volunteer/shared/todo.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/volunteer/shared/todo.service.ts ***!
    \**************************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppVolunteerSharedTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");

    var TodoService = /*#__PURE__*/function () {
      function TodoService(firebasedb) {
        _classCallCheck(this, TodoService);

        this.firebasedb = firebasedb;
      }

      _createClass(TodoService, [{
        key: "getToDoList",
        value: function getToDoList() {
          this.toDoList = this.firebasedb.list('titles');
          return this.toDoList;
        }
      }, {
        key: "checkOrUnCheckTitle",
        value: function checkOrUnCheckTitle($key, flag) {
          this.toDoList.update($key, {
            isChecked: flag
          });
        }
      }]);

      return TodoService;
    }();

    TodoService.ɵfac = function TodoService_Factory(t) {
      return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
    };

    TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TodoService,
      factory: TodoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/volunteer/volunteer.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/volunteer/volunteer.component.ts ***!
    \**************************************************/

  /*! exports provided: VolunteerComponent */

  /***/
  function srcAppVolunteerVolunteerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolunteerComponent", function () {
      return VolunteerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/todo.service */
    "./src/app/volunteer/shared/todo.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VolunteerComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VolunteerComponent_li_5_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var item_r11 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.alterCheck(item_r11.$key, item_r11.isChecked);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-success", item_r11.isChecked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r11.isChecked ? "fa-check-circle-o" : "fa-circle-thin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.title, " ");
      }
    }

    var VolunteerComponent = /*#__PURE__*/function () {
      function VolunteerComponent(toDoService) {
        _classCallCheck(this, VolunteerComponent);

        this.toDoService = toDoService;
      }

      _createClass(VolunteerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.toDoService.getToDoList().snapshotChanges().subscribe(function (item) {
            _this6.toDoListArray = [];
            item.forEach(function (element) {
              var x = element.payload.toJSON();
              x["$key"] = element.key;

              _this6.toDoListArray.push(x);
            });

            _this6.toDoListArray.sort(function (a, b) {
              return a.isChecked - b.isChecked;
            });
          });
        }
      }, {
        key: "alterCheck",
        value: function alterCheck($key, isChecked) {
          this.toDoService.checkOrUnCheckTitle($key, !isChecked);
        }
      }]);

      return VolunteerComponent;
    }();

    VolunteerComponent.ɵfac = function VolunteerComponent_Factory(t) {
      return new (t || VolunteerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]));
    };

    VolunteerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VolunteerComponent,
      selectors: [["app-volunteer"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])],
      decls: 6,
      vars: 1,
      consts: [[1, "jumbotron", 2, "padding", "45px 0px"], [1, "text-center"], [2, "margin", "5px 0px"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "hover-cursor", 3, "click"], [1, "fa", "fa-lg", 3, "ngClass"]],
      template: function VolunteerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shopping List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VolunteerComponent_li_5_Template, 4, 4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toDoListArray);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".list-group[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 5px;\n  margin: auto;\n  vertical-align: middle;\n  align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm9sdW50ZWVyL0M6XFxVc2Vyc1xcc29pc3NcXERvY3VtZW50c1xcR2l0SHViXFxHcm9jZXJ5QXNzaXN0YW50XFxncm9jZXJ5LWFzc2lzdGFudC9zcmNcXGFwcFxcdm9sdW50ZWVyXFx2b2x1bnRlZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3ZvbHVudGVlci92b2x1bnRlZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZvbHVudGVlci92b2x1bnRlZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cFxyXG4gICAgd2lkdGg6IDUwJVxyXG4gICAgcGFkZGluZzogNXB4XHJcbiAgICBtYXJnaW46IGF1dG8gICAgXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICBhbGlnbjogY2VudGVyIiwiLmxpc3QtZ3JvdXAge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ246IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VolunteerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-volunteer',
          templateUrl: './volunteer.component.html',
          styleUrls: ['./volunteer.component.sass'],
          providers: [_shared_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]]
        }]
      }], function () {
        return [{
          type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyDOaiTU7Kve8zAQ2vQ36GunBRGHg70f0YY",
        authDomain: "groceryassistant-66368.firebaseapp.com",
        databaseURL: "https://groceryassistant-66368.firebaseio.com",
        projectId: "groceryassistant-66368",
        storageBucket: "groceryassistant-66368.appspot.com",
        messagingSenderId: "618455151673",
        appId: "1:618455151673:web:acb7ae64ece73287c789e8",
        measurementId: "G-BZS1V6G4WZ"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\soiss\Documents\GitHub\GroceryAssistant\grocery-assistant\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map