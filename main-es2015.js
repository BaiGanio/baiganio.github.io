(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+sO7":
/*!****************************************************************************!*\
  !*** ./src/app/@shared/components/charts/polararea/polararea.component.ts ***!
  \****************************************************************************/
/*! exports provided: PolarareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarareaComponent", function() { return PolarareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PolarareaComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://localhost:44344/api/fake/Chart/';
        this.Player = [];
        this.Run = [];
    }
    ngOnInit() {
        this.httpClient.get(this.url).subscribe((result) => {
            result.forEach(x => {
                this.Player.push(x.playerName);
                this.Run.push(x.run);
            });
            this.polarareachart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('canvas', {
                type: 'polarArea',
                data: {
                    labels: this.Player,
                    datasets: [
                        {
                            data: this.Run,
                            borderColor: '#3cb371',
                            backgroundColor: [
                                '#3cb371',
                                '#0000FF',
                                '#9966FF',
                                '#4C4CFF',
                                '#00FFFF',
                                '#f990a7',
                                '#aad2ed',
                                '#FF00FF',
                                'Blue',
                                'Red',
                                'Blue'
                            ],
                        }
                    ],
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                                display: false
                            }],
                        yAxes: [{
                                display: true
                            }],
                    }
                }
            });
        });
    }
}
PolarareaComponent.ɵfac = function PolarareaComponent_Factory(t) { return new (t || PolarareaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PolarareaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolarareaComponent, selectors: [["app-polararea"]], decls: 4, vars: 0, consts: [[1, "chart-container", 2, "position", "relative", "width", "50vw"], ["id", "canvas"]], template: function PolarareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolarareaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-polararea',
                templateUrl: './polararea.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "/ymm":
/*!****************************************************************************************!*\
  !*** ./src/app/@modules/courses/components/course-preview/course-preview.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CoursePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePreviewComponent", function() { return CoursePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class CoursePreviewComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.course = this.data.model;
        console.log(this.course);
    }
    onRejectClick() {
        this.dialogRef.close();
    }
}
CoursePreviewComponent.ɵfac = function CoursePreviewComponent_Factory(t) { return new (t || CoursePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
CoursePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursePreviewComponent, selectors: [["app-course-preview"]], decls: 22, vars: 4, consts: [[1, "col-md-12", "col-center", "text-center"], [1, "card"], [1, "card-body", "row"], [1, "card", "col-md-3"], [1, "card-body"], ["alt", "Sample image", 1, "img-thumbnail", "img-fluid", 3, "src"], [1, "badge", "badge-primary"], [1, "card", "col-md-9"], [2, "text-align", "left", 3, "innerHTML"], [1, "col-12", "col-center", "text-center"]], template: function CoursePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Enrolled so far : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " * You need to have confirmed Student subscription if you want to enroll for the course. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.course.Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.course.EnrolledStudents || 0, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.course.Description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".col-md-9[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n}\n\n@media only screen and (max-width: 414px) {\n  .card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n  .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n  .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .card[_ngcontent-%COMP%]   #statusHolder[_ngcontent-%COMP%] {\n    font-size: 1.2em !important;\n  }\n  .card[_ngcontent-%COMP%]   #roundImg[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvdXJzZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUVRO0lBQ0ksZ0JBQUE7RUFDVjtFQUNNO0lBQ0ksZ0JBQUE7RUFDVjtFQUNNO0lBQ0ksZ0JBQUE7RUFDVjtFQUNNO0lBQ0ksMkJBQUE7RUFDVjtFQUNNO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VBQ1Y7QUFDRiIsImZpbGUiOiJjb3Vyc2UtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtOXtcbiAgICBmb250LXNpemU6IDEuMWVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIC5jYXJke1xuICAgICAgICBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgICAgIH1cbiAgICAgICAgaDR7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB9XG4gICAgICAgIGg1e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuICAgICAgICAjc3RhdHVzSG9sZGVye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICNyb3VuZEltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-preview',
                templateUrl: './course-preview.component.html',
                styleUrls: ['./course-preview.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/baiganio.github.io/baiganio.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "3enb":
/*!*************************************!*\
  !*** ./src/app/@core/role.guard.ts ***!
  \*************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@services/auth.service */ "Pjly");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class RoleGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next) {
        const allowedRoles = next.data.allowedRoles;
        const payload = this.authService.isExpectedRole(allowedRoles);
        if (!payload) {
            // if not authorized, show access denied message
            this.router.navigate(['/403']);
        }
        return payload;
    }
    canActivateChild(next) {
        const allowedRoles = next.data.allowedRoles;
        const payload = this.authService.isExpectedRole(allowedRoles);
        if (!payload) {
            // if not authorized, show access denied message
            this.router.navigate(['/403']);
        }
        return payload;
    }
}
RoleGuard.ɵfac = function RoleGuard_Factory(t) { return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RoleGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoleGuard, factory: RoleGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "3wLg":
/*!************************************************************!*\
  !*** ./src/app/@shared/pages/privacy/privacy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 0, vars: 0, template: function PrivacyComponent_Template(rf, ctx) { }, styles: ["#title[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  text-align: center;\n  font-weight: bold;\n}\n\n.Second-Title[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  text-align: left;\n  margin: 2%;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  text-align: justify;\n  margin: 2%;\n}\n\n@media only screen and (max-width: 797px) {\n  #title[_ngcontent-%COMP%] {\n    font-size: 35;\n    text-align: center;\n    font-weight: bold;\n    padding: 2%;\n  }\n}\n\n@media only screen and (max-width: 591px) {\n  .Second-Title[_ngcontent-%COMP%] {\n    font-size: 25;\n    text-align: left;\n    margin: 2%;\n  }\n}\n\n@media only screen and (max-width: 451px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 18;\n    text-align: left;\n    margin: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3ByaXZhY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0c7SUFDSyxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUFFTjtBQUNGOztBQUFBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VBRU47QUFDRjs7QUFBQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoicHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZXtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyBwYWRkaW5nOiAyJTtcbn1cbi5TZWNvbmQtVGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMiU7XG59XG4udGV4dHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luOiAyJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTdweCkge1xuICAgI3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzNTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTFweCkge1xuICAgIC5TZWNvbmQtVGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI1O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDIlO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUxcHgpIHtcbiAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbjogMiU7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy',
                templateUrl: './privacy.component.html',
                styleUrls: ['./privacy.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6ill":
/*!*********************************************!*\
  !*** ./src/app/@services/roslyn.service.ts ***!
  \*********************************************/
/*! exports provided: RoslynService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoslynService", function() { return RoslynService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend.service */ "KurF");



class RoslynService {
    constructor(backendService) {
        this.backendService = backendService;
    }
    sendCodeForCompile(data) {
        return this.backendService.backendRequest('post', 'Roslyn/PlainTextCodeCompiler', data);
    }
}
RoslynService.ɵfac = function RoslynService_Factory(t) { return new (t || RoslynService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"])); };
RoslynService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoslynService, factory: RoslynService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoslynService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "6xTX":
/*!***************************************************************!*\
  !*** ./src/app/@shared/components/navbar/navbar.component.ts ***!
  \***************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "kDVF");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");











function NavbarComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_33_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome, ", (ctx_r2.storedUser == null ? null : ctx_r2.storedUser.username) !== null ? ctx_r2.storedUser == null ? null : ctx_r2.storedUser.username : ctx_r2.storedUser == null ? null : ctx_r2.storedUser.email, "! ");
} }
function NavbarComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// import { UserDataService } from 'src/app/@services/user-data.service';
// import { AuthService } from 'src/app/@services/auth.service';
class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.reportIssueModalVisibility = false;
    }
    ngOnInit() {
        // if (this.authService.isAuthenticated()) {
        //   if (this.storedUser) {
        //     console.log('here');
        //     return;
        //   } else {
        //     this.userDataService.getUserByToken().subscribe(
        //       response => {
        //         this.storedUser = response.body;
        //         this.userDataService.setUserData(this.storedUser);
        //       }
        //     );
        //   }
        // }
    }
    isUserLogged() {
        return false;
        //return this.authService.isAuthenticated();
    }
    logOut() {
        //this.userDataService.logout();
        this.router.navigate(['/login']);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 41, vars: 3, consts: [["autosize", ""], ["id", "sideNavigation", "mode", "over"], ["sidenav", ""], ["color", "primary"], [1, "brandLogo"], ["routerlink", "/home"], ["alt", "(BG)", "height", "50", "src", "./assets/images/app/Ganio.jpg", 1, "d-inline-block", "align-middle"], [3, "click"], [1, "fas", "fa-times"], ["mat-list-item", "", "routerLink", "/home"], [4, "ngIf"], ["mat-list-item", "", "routerLink", "/subscriptions"], ["mat-list-item", "", "routerLink", "/courses"], ["mat-list-item", "", "routerLink", "/teachers"], ["mat-list-item", "", "routerLink", "/blogs"], ["mat-list-item", "", "routerLink", "/posts"], ["id", "main"], ["id", "openNav"], [1, "fas", "fa-bars"], [1, "actions"], [4, "ngIf", "ngIfElse"], ["signBox", ""], [1, "container-fluid"], ["mat-list-item", "", "routerLink", "/dashboard"], ["mat-list-item", "", "routerLink", "/profile"], ["mat-button", "", 3, "matMenuTriggerFor"], ["userMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["routerLink", "/login", 1, "mr-3"], ["routerLink", "/register", 1, "mr-3"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " BaiGanio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "m-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_m_link_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_list_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_div_14_Template, 7, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Subscriptions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Teachers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Videos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Events ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NavbarComponent_div_33_Template, 8, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NavbarComponent_ng_template_34_Template, 4, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogged());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogged())("ngIfElse", _r3);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"]], styles: ["mat-drawer-container[_ngcontent-%COMP%]   #sideNavigation[_ngcontent-%COMP%] {\n  width: 250px;\n}\nmat-drawer-container[_ngcontent-%COMP%]   #sideNavigation[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: red;\n}\nmat-drawer-container[_ngcontent-%COMP%]   #sideNavigation[_ngcontent-%COMP%]   .fa-bars[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: powderblue;\n}\nmat-drawer-container[_ngcontent-%COMP%]   #sideNavigation[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .brandLogo[_ngcontent-%COMP%] {\n  flex: auto;\n  font-size: 1.2em !important;\n}\nmat-drawer-container[_ngcontent-%COMP%]   #sideNavigation[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 2em !important;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: \"Alsandra\";\n  padding: 10px;\n}\nmat-drawer-container[_ngcontent-%COMP%]   #sideNavigation[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #3f51b5;\n  color: white;\n}\nmat-drawer-container[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   #openNav[_ngcontent-%COMP%] {\n  flex: auto;\n}\nmat-drawer-container[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\nmat-drawer-container[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  cursor: pointer;\n  text-decoration: none;\n}\nmat-drawer-container[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #98c9d1;\n}\n@media only screen and (min-width: 700px) {\n  mat-drawer-container[_ngcontent-%COMP%]   #navigation[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ047QUFFTTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtBQUFSO0FBS007RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUhSO0FBTU07RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFKUjtBQVdNO0VBQ0UsVUFBQTtBQVRSO0FBWVE7RUFFRSxjQUFBO0FBWFY7QUFhUTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFYVjtBQWNRO0VBQ0UsY0FBQTtBQVpWO0FBbUJBO0VBRUk7SUFDRSxZQUFBO0VBakJKO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRyYXdlci1jb250YWluZXIge1xuICAjc2lkZU5hdmlnYXRpb24ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICAuZmEtdGltZXM6aG92ZXJ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XG4gICAgfVxuICAgIC5mYS1iYXJzOmhvdmVye1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6IHBvd2RlcmJsdWU7XG4gICAgfVxuICAgIG1hdC10b29sYmFyIHtcbiAgICAgIC5icmFuZExvZ28ge1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWF0LWxpc3Qge1xuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICBcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBbHNhbmRyYSc7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI21haW4ge1xuICAgIG1hdC10b29sYmFyIHtcbiAgICAgICNvcGVuTmF2IHtcbiAgICAgICAgZmxleDogYXV0bztcbiAgICAgIH1cbiAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICBcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBhIHsgICAgICAgICAgXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzk4YzlkMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIG1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICAjbmF2aWdhdGlvbiB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgfVxuICB9XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "9R5y":
/*!****************************************************************************!*\
  !*** ./src/app/@shared/components/charts/linechart/linechart.component.ts ***!
  \****************************************************************************/
/*! exports provided: LinechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinechartComponent", function() { return LinechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LinechartComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://localhost:44344/api/fake/Chart/';
        this.Player = [];
        this.Run = [];
    }
    ngOnInit() {
        this.httpClient.get(this.url).subscribe((result) => {
            result.forEach(x => {
                this.Player.push(x.playerName);
                this.Run.push(x.run);
            });
            this.Linechart = new chart_js__WEBPACK_IMPORTED_MODULE_1__('canvas', {
                type: 'line',
                data: {
                    labels: this.Player,
                    datasets: [
                        {
                            data: this.Run,
                            borderColor: '#3cb371',
                            backgroundColor: '#0000FF',
                        }
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                                display: true
                            }],
                        yAxes: [{
                                display: true
                            }],
                    }
                }
            });
        });
    }
}
LinechartComponent.ɵfac = function LinechartComponent_Factory(t) { return new (t || LinechartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LinechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinechartComponent, selectors: [["app-linechart"]], decls: 4, vars: 0, consts: [[1, "chart-container", 2, "position", "relative", "width", "50vw"], ["id", "canvas"]], template: function LinechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinechartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-linechart',
                templateUrl: './linechart.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9e4Q":
/*!****************************************************!*\
  !*** ./src/app/@services/error-handler.service.ts ***!
  \****************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_pages_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@shared/pages/error/error.component */ "WjTl");
/* harmony import */ var _shared_models_error_model_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/models/error-model.module */ "RKaf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-data.service */ "RCKm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");








class ErrorHandlerService {
    constructor(router, dialog, userService, snackbar) {
        this.router = router;
        this.dialog = dialog;
        this.userService = userService;
        this.snackbar = snackbar;
        this.loading = true;
    }
    handleRequestError(error) {
        const status = error.status;
        // if (error.error.type === 'error' && status === 0) {
        if (status === 0) {
            return this.router.navigate(['/server-alert']);
        }
        else if (status) {
            const $dialogRef = this.dialog.open(_shared_pages_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"], { data: { model: new _shared_models_error_model_module__WEBPACK_IMPORTED_MODULE_2__["ErrorModel"](error) } });
            // $dialogRef.afterClosed().subscribe(
            //   response => {
            //     if (response) {
            //       this.loading = true;
            //       this.user = this.userService.getUserData();
            //       const sendErrorToAdmin = {
            //           SenderEmail:  this.user.email,
            //           ErrorReport: error.error ,
            //           MessageReport: error.message
            //         };
            //       this.userService.sendExceptionToAdmin(sendErrorToAdmin)
            //         .subscribe(() => {
            //           this.loading = false;
            //           // show info
            //           this.snackbar.open('Message sent successful.', 'OK', {
            //             duration: 5000,
            //                         verticalPosition: 'top',
            //             panelClass: 'successSnackbar'
            //           });
            //       }, () => {
            //         this.loading = false;
            //         // show info
            //         this.snackbar.open('Message can\'t be send!', 'X', {
            //           duration: 5000,
            //           horizontalPosition: 'right',
            //           verticalPosition: 'top',
            //           panelClass: 'dangerSnackbar'
            //         });
            //       });
            //       // this.handleRequestError(error);
            //     }
            //   }
            // );
        }
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "AIBm":
/*!***********************************************************************************!*\
  !*** ./src/app/@modules/courses/pages/course-details/course-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CourseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsComponent", function() { return CourseDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var src_app_shared_components_charts_polararea_polararea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/components/charts/polararea/polararea.component */ "+sO7");
/* harmony import */ var _components_in_class_in_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/in-class/in-class.component */ "dddl");






function CourseDetailsComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-polararea");
} }
function CourseDetailsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-in-class");
} }
function CourseDetailsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homeworks");
} }
function CourseDetailsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homeworks");
} }
function CourseDetailsComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homeworks");
} }
function CourseDetailsComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homeworks");
} }
function CourseDetailsComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homeworks");
} }
function CourseDetailsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homeworks");
} }
function CourseDetailsComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homeworks");
} }
class CourseDetailsComponent {
    constructor(router) {
        this.router = router;
        this.activeTab = 0;
    }
    ngOnInit() {
    }
    backToMyCourses() {
        this.router.navigate(['/courses/preview']);
    }
}
CourseDetailsComponent.ɵfac = function CourseDetailsComponent_Factory(t) { return new (t || CourseDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CourseDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseDetailsComponent, selectors: [["app-course-details"]], decls: 31, vars: 1, consts: [["type", "button", 1, "btn", "btn-outline-info", "ml-3", 3, "click"], ["type", "button", "routerLink", "/dashboard", 1, "btn", "btn-outline-info", "ml-3"], ["type", "button", "routerLink", "/profile", 1, "btn", "btn-outline-info", "ml-3"], [1, "h2", "text-center", "mb-4"], [3, "selectedIndex"], ["label", "Overall Score"], ["matTabContent", ""], ["label", "In Class"], ["label", "Homeworks"], ["label", "Self Motivation"], ["label", "Exam 1"], ["label", "Exam 2"], ["label", "Final Exam"], ["label", "Chat Room"], ["label", "Resources"]], template: function CourseDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailsComponent_Template_button_click_0_listener() { return ctx.backToMyCourses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Go 2 My Enrollments\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \\ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Go 2 Dashboard\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \\ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Go 2 Profile\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Course Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CourseDetailsComponent_ng_template_12_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CourseDetailsComponent_ng_template_14_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CourseDetailsComponent_ng_template_16_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CourseDetailsComponent_ng_template_18_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CourseDetailsComponent_ng_template_20_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CourseDetailsComponent_ng_template_22_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CourseDetailsComponent_ng_template_24_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CourseDetailsComponent_ng_template_26_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CourseDetailsComponent_ng_template_28_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.activeTab);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabContent"], src_app_shared_components_charts_polararea_polararea_component__WEBPACK_IMPORTED_MODULE_3__["PolarareaComponent"], _components_in_class_in_class_component__WEBPACK_IMPORTED_MODULE_4__["InClassComponent"]], styles: [".mat-tab-label[_ngcontent-%COMP%]   .mat-tab-label-content[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvdXJzZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3RkFBQTtBQUNKIiwiZmlsZSI6ImNvdXJzZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-details',
                templateUrl: './course-details.component.html',
                styleUrls: ['./course-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    envName: 'local',
    appUrl: '',
    apiUrl: '',
    idsUrl: '',
    IPCheckingServiceUrl: '',
    bgapiSignalRNotyfyHub: '',
    identityServerClientCredentials: {
        client_id: '',
        client_secret: '',
        scope: '',
        grant_type: ''
    },
    identityServerUserCredentials: {
        client_id: '',
        client_secret: '',
        scope: '',
        grant_type: ''
    },
    apiKey: '',
    routesRequiringUserToken: [
        '',
        '',
        ''
    ]
};


/***/ }),

/***/ "ESOR":
/*!***************************************************************************!*\
  !*** ./src/app/@modules/courses/pages/my-courses/my-courses.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoursesComponent", function() { return MyCoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MyCoursesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(w3) Progress: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 81% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Homeworks : 74%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LetMeIn : 35 points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Self Motivation : 20 points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Intermediate Exam 1: 80%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Intermediate Exam 2: 60%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Final Exam : 90%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCoursesComponent_div_5_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const c_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showCourseDetails(c_r1.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Detailed view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r1.Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.Name);
} }
const _c0 = function () { return { backdropBorderRadius: "14px", fullScreenBackdrop: true }; };
class MyCoursesComponent {
    constructor(
    // private courseService: CoursesService,
    //           private errorHandlerService: ErrorHandlerService,
    route, router) {
        this.route = route;
        this.router = router;
        this.loading = false;
        this.isCourseDetails = false;
        this.courses = new Array();
    }
    ngOnInit() {
        if (this.route.snapshot.params.id) {
            this.courseId = this.route.snapshot.params.id;
            this.showCourseDetails(this.courseId);
        }
        else {
            if (this.courses.length === 0) {
                this.getCoursesPriview();
            }
        }
    }
    getCoursesPriview() {
        this.loading = true;
        // this.courseService.getCoursesByUserId().subscribe(response => {
        //   response.body.forEach(element => {
        //     const c = {
        //       Id: element.courseId,
        //       Name: element.courseName,
        //       Teachers: element.teachers,
        //       Description: element.description,
        //       StartDate: element.start_date,
        //       EndDate: element.end_date,
        //       ModifiedOn: element.modified_on,
        //       Image: element.image,
        //       IsActive: element.active,
        //       EnrolledStudents: element.enrolled_students
        //     };
        //     this.courses.push(c as CoursePreviewModel);
        //   });
        // },
        // error => {
        //   this.errorHandlerService.handleRequestError(error);
        //   this.loading = false;
        // },
        // () => { this.loading = false; });
    }
    showCourseDetails(courseId) {
        console.log(courseId);
        this.router.navigate(['/courses/preview', courseId]);
    }
}
MyCoursesComponent.ɵfac = function MyCoursesComponent_Factory(t) { return new (t || MyCoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MyCoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyCoursesComponent, selectors: [["app-my-courses"]], decls: 7, vars: 4, consts: [[1, "row"], [1, "col-md-12"], [1, "text-center"], ["class", "col-md-4 col-center text-center", 4, "ngFor", "ngForOf"], [3, "show", "config"], [1, "col-md-4", "col-center", "text-center"], [1, "card"], [1, "card-body"], [1, "col-md-7"], ["alt", "Sample image", 1, "img-thumbnail", "img-fluid", 3, "src"], [2, "width", "60%", "color", "blue"], [1, "col-md-5"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"]], template: function MyCoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Enrollments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyCoursesComponent_div_5_Template, 33, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngx-loading", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 10px;\n  background: #a4def6;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 10vw;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL215LWNvdXJzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFHSiIsImZpbGUiOiJteS1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xufVxuLmNhcmQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiNhNGRlZjY7XG59XG4uaW1nLWZsdWlkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDEwdnc7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-courses',
                templateUrl: './my-courses.component.html',
                styleUrls: ['./my-courses.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "G6we":
/*!***************************************************!*\
  !*** ./src/app/@services/subscription.service.ts ***!
  \***************************************************/
/*! exports provided: SubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return SubscriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend.service */ "KurF");



class SubscriptionService {
    constructor(backendService) {
        this.backendService = backendService;
    }
    getAllSubscriptions() {
        return this.backendService.backendRequest('get', 'Subscriptions', null, false);
    }
    getUserActiveSubscriptions() {
        return this.backendService.backendRequest('get', 'Subscriptions/GetUserActiveSubscriptions', null, true);
    }
    sendRequestForSub(data) {
        return this.backendService.backendRequest('post', 'Subscriptions/Request4Subscription', data, true);
    }
    confirmRequestForSub(token) {
        const data = { code: token };
        return this.backendService.backendRequest('get', 'Subscriptions/Confirm', data, false);
    }
    getSubscriptionById(id) {
        return this.backendService.backendRequest('get', 'Subscriptions/' + id);
    }
    getSubscriptionsWithConfirmedUserIds() {
        return this.backendService.backendRequest('get', 'Subscriptions/WithConfirmedUserIds', null, true);
    }
}
SubscriptionService.ɵfac = function SubscriptionService_Factory(t) { return new (t || SubscriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"])); };
SubscriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubscriptionService, factory: SubscriptionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "IJ2j":
/*!**********************************************!*\
  !*** ./src/app/@services/utility.service.ts ***!
  \**********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const smallDeviceAverageSize = 1800;
class UtilityService {
    constructor() { }
    isLocalStorageNameSupported() {
        const testKey = 'test', storage = window.localStorage;
        try {
            storage.setItem(testKey, '1');
            storage.removeItem(testKey);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    isSmallDevice() {
        const w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], width = w.innerWidth || e.clientWidth || g.clientWidth, height = w.innerHeight || e.clientHeight || g.clientHeight;
        return width + height < smallDeviceAverageSize;
    }
    mustMatchFormValidator(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
}
UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(); };
UtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IWHz":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/courses/components/score/score.component.ts ***!
  \**********************************************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ScoreComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Webhook url: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "canvas", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function ScoreComponent_section_2_Template_canvas_chartHover_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.chartHovered($event); })("chartClick", function ScoreComponent_section_2_Template_canvas_chartClick_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.chartClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total score: ...%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r1.Image2Base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getStudentWebhookUrl(c_r1.Students));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx_r0.chartType)("data", ctx_r0.chartData)("labels", ctx_r0.chartLabels)("colors", ctx_r0.chartColors)("options", ctx_r0.chartOptions)("legend", true);
} }
class ScoreComponent {
    constructor() {
        // studentCourses = new Array<CourseViewModel>();
        this.chartOptions = {
            responsive: true
        };
        this.chartType = 'pie';
        // public chartData: Array<any> = [300, 50, 100];
        this.chartData = [1, 1, 1];
        this.chartLabels = ['Standalone work', 'Current Exams', 'Final Exam'];
        this.chartColors = [{
                hoverBorderColor: [
                    'rgba(0, 0, 0, 0.1)',
                    'rgba(0, 0, 0, 0.1)',
                    'rgba(0, 0, 0, 0.1)',
                    'rgba(0, 0, 0, 0.1)',
                    'rgba(0, 0, 0, 0.1)'
                ],
                hoverBorderWidth: 0,
                backgroundColor: [
                    '#6bbaea',
                    '#30e542',
                    '#f7f438',
                    '#949FB1',
                    '#4D5360'
                ],
                hoverBackgroundColor: ['#1c7ded', '#09c40c', '#fcf40f', '#A8B3C5', '#616774']
            }];
    }
    chartClicked(e) { }
    chartHovered(e) { }
    ngOnInit() {
        // this.studentService.getStudent().subscribe(
        //   response => {
        //     this.proccessResponse(response);
        //   },
        //   error => {
        //     // this.loading = false;
        //     // console.log(error);
        //   },
        //   () => {
        //    // this.loading = false;
        //    // console.log(this.student);
        //   }
        // );
        // this.courseService.getCourses().subscribe(
        //   response => {
        //     response.body.forEach(element => {
        //       const c = {
        //         Id: element.id,
        //         Name: element.name,
        //         TeacherName: element.teacher_name,
        //         Description: element.description,
        //         StartDate: element.start_date,
        //         EndDate: element.end_date,
        //         CreatedOn: element.created_on,
        //         Image2Base64: element.image,
        //         Students: element.students as Array<StudentViewModel>,
        //         IsActive: element.is_active,
        //         TotalUsers: element.students.length
        //       };
        //       if (c.IsActive) {
        //         this.courses.push(c as CourseViewModel);
        //       }
        //     });
        //     // console.log(this.courses);
        //   },
        //   error => {
        //     // this.loading = false;
        //     // console.log(error);
        //   },
        //   () => { }
        // );
    }
    // proccessResponse(response) {
    //   this.student = response.body;
    //   // console.log(this.student.Courses);
    // }
    isStudentCourse(courseId) {
        // console.log(this.student);
        // const jo = this.student.Courses as Array<CourseViewModel>;
        // jo.forEach(element => {
        //   // console.log(element);
        //   // let jo = element.courseId;
        //   // if (jo === courseId) {
        //   //   return true;
        //   // }
        //   // return false;
        // });
        return false;
    }
    getStudentWebhookUrl(students) {
        let jo = '';
        // students.forEach(element => {
        //   if (element.studentId === this.student['id']) {
        //     // console.log(this.student['webhookUrls'][0]);
        //     jo =  this.student['webhookUrls'][0] as string;
        //     return jo;
        //   }
        // });
        return jo;
    }
}
ScoreComponent.ɵfac = function ScoreComponent_Factory(t) { return new (t || ScoreComponent)(); };
ScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreComponent, selectors: [["app-score"]], decls: 3, vars: 1, consts: [[1, "content", 2, "overflow", "hidden !important"], ["class", "text-center my-5", 4, "ngFor", "ngForOf"], [1, "text-center", "my-5"], [1, "row"], [1, "col-lg-8", "col-md-12", "mb-lg-0", "mb-4"], [1, "testimonial-card", "text-left"], [1, "card-up", "info-color"], [1, "avatar", "white", 2, "width", "70%", "margin", "0 auto"], [1, "", 2, "width", "100%", 3, "src"], [1, "mb-4", "text-center"], [1, "dark-grey-text", "mt-4"], [1, "col-lg-4", "col-md-12", "mb-lg-0", "mb-4", "chart"], [2, "width", "100%", "margin", "0 auto"], ["mdbChart", "", 3, "chartType", "data", "labels", "colors", "options", "legend", "chartHover", "chartClick"]], template: function ScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "wtf\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScoreComponent_section_2_Template, 21, 9, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-score',
                templateUrl: './score.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JBG6":
/*!***********************************************!*\
  !*** ./src/app/@pages/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = function () { return { backdropBorderRadius: "14px", fullScreenBackdrop: true }; };
class HomeComponent {
    constructor() {
        this.loading = false;
    }
    ngOnInit() {
        // this.loading = false;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 3, consts: [[2, "text-align", "center"], [1, "content"], [1, "row"], [1, "col-xs-12", "col-center"], ["src", "./assets/images/app/Ganio.jpg", "alt", ""], ["id", "comingSoon"], [3, "show", "config"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Welcome to BaiGanio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "coming soon...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-loading", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, styles: ["img[_ngcontent-%COMP%] {\n  width: 22%;\n}\n\n@media only screen and (max-width: 736px) {\n  #comingSoon[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  h1.GotHeroin[_ngcontent-%COMP%] {\n    font-size: 5em !important;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSTtJQUNJLGFBQUE7RUFFTjs7RUFBRTtJQUNJLHlCQUFBO0VBR047O0VBREU7SUFDSSxVQUFBO0VBSU47QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICB3aWR0aDogMjIlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuICAgICNjb21pbmdTb29uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgaDEuR290SGVyb2luIHtcbiAgICAgICAgZm9udC1zaXplOiA1ZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                template: `
  <div style="text-align:center">
    <div class="content">
      <div class="row">
        <div class="col-xs-12 col-center">
            <h1>
              Welcome to BaiGanio
            </h1>
            <img src="./assets/images/app/Ganio.jpg" alt="">
            <h1 id="comingSoon">coming soon...</h1>
        </div>
      </div>
    </div>
  </div>
  <ngx-loading [show]="loading" [config]="{ backdropBorderRadius: '14px', fullScreenBackdrop: true }"></ngx-loading>
  `,
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KurF":
/*!**********************************************!*\
  !*** ./src/app/@services/backend.service.ts ***!
  \**********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "Pjly");







class BackendService {
    constructor(http, authservice) {
        this.http = http;
        this.authservice = authservice;
    }
    backendRequest(requestType, requestTarget, requestData, useUserToken) {
        if (!this.authservice.authToken) {
            const req = this.getClientAccessToken()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])((response) => {
                const authToken = response;
                this.authservice.authToken = authToken.access_token;
                return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
            }));
            return req;
        }
        else {
            return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
        }
    }
    baseBackendRequest(requestType, requestTarget, requestData, useUserToken) {
        if (requestType === 'post') {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + requestTarget, requestData, { headers: this.getContentHeaders(useUserToken) });
        }
        else if (requestType === 'get') {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + requestTarget, { headers: this.getContentHeaders(useUserToken), params: requestData, observe: 'response' });
        }
    }
    getClientAccessToken() {
        const is4credentials = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].identityServerClientCredentials;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded');
        // tslint:disable-next-line: max-line-length
        const body = `grant_type=${is4credentials.grant_type}&scope=${is4credentials.scope}&client_secret=${is4credentials.client_secret}&client_id=${is4credentials.client_id}`;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].idsUrl + 'connect/token', body, { headers });
    }
    getUserAccessToken(email, password) {
        const is4credentials = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].identityServerUserCredentials;
        // const body = new FormData();
        // body.append('client_id', is4credentials.client_id);
        // body.append('client_secret', is4credentials.client_secret);
        // body.append('scope', is4credentials.scope);
        // body.append('grant_type', is4credentials.grant_type);
        // body.append('username', email);
        // body.append('password', password);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded');
        // tslint:disable-next-line: max-line-length
        const body = `grant_type=${is4credentials.grant_type}&scope=${is4credentials.scope}&client_secret=${is4credentials.client_secret}&client_id=${is4credentials.client_id}&username=${email}&password=${password}`;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].idsUrl + 'connect/token', body, { headers });
    }
    getContentHeaders(useUserToken) {
        let contentHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let authToken = this.authservice.pickAuthenticationToken();
        if (useUserToken) {
            authToken = this.authservice.userToken;
        }
        contentHeaders = contentHeaders.set('Authorization', `Bearer ${authToken}`);
        return contentHeaders;
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "L0Vf":
/*!*****************************************************************!*\
  !*** ./src/app/@modules/users/models/user-view-model.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewModel", function() { return UserViewModel; });
class UserViewModel {
    constructor(id, username, email, password, firstname, lastname, isEmailConfirmed, typeOfUser, createdOn, modifiedOn, leadSource, image, roles, subscriptions) {
        this.Id = id;
        this.Username = username;
        this.Email = email;
        this.FirstName = firstname;
        this.LastName = lastname;
        this.IsEmailConfirmed = isEmailConfirmed;
        this.TypeOfUser = typeOfUser;
        this.CreatedOn = createdOn;
        this.ModifiedOn = modifiedOn;
        this.LeadSource = leadSource;
        this.Image = image;
        this.Roles = roles;
        this.Subscriptions = subscriptions;
    }
}


/***/ }),

/***/ "O8jQ":
/*!***********************************************!*\
  !*** ./src/app/@pages/blog/blog.component.ts ***!
  \***********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 2, vars: 0, template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OxV1":
/*!****************************************************!*\
  !*** ./src/app/@modules/courses/courses.module.ts ***!
  \****************************************************/
/*! exports provided: CoursesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesModule", function() { return CoursesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses.component */ "Urur");
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses-routing.module */ "fy6L");
/* harmony import */ var src_app_core_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@core/angular-material.module */ "w/ci");
/* harmony import */ var _components_course_preview_course_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/course-preview/course-preview.component */ "/ymm");
/* harmony import */ var _pages_my_courses_my_courses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/my-courses/my-courses.component */ "ESOR");
/* harmony import */ var _pages_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/course-details/course-details.component */ "AIBm");
/* harmony import */ var _components_in_class_in_class_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/in-class/in-class.component */ "dddl");
/* harmony import */ var _components_score_score_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/score/score.component */ "IWHz");
/* harmony import */ var src_app_shared_components_charts_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/@shared/components/charts/linechart/linechart.component */ "9R5y");
/* harmony import */ var src_app_shared_components_charts_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/@shared/components/charts/barchart/barchart.component */ "y5DD");
/* harmony import */ var src_app_shared_components_charts_doughnut_doughnut_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/@shared/components/charts/doughnut/doughnut.component */ "sz9a");
/* harmony import */ var src_app_shared_components_charts_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/@shared/components/charts/piechart/piechart.component */ "eaY0");
/* harmony import */ var src_app_shared_components_charts_polararea_polararea_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/@shared/components/charts/polararea/polararea.component */ "+sO7");





// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';












class CoursesModule {
}
CoursesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoursesModule });
CoursesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoursesModule_Factory(t) { return new (t || CoursesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _courses_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoursesRoutingModule"],
            src_app_core_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]
            // NgxLoadingModule.forRoot({
            //   animationType: ngxLoadingAnimationTypes.threeBounce,
            //   primaryColour: '#88078e',
            //   secondaryColour: '#c6ef23',
            // }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoursesModule, { declarations: [_courses_component__WEBPACK_IMPORTED_MODULE_2__["CoursesComponent"],
        _components_course_preview_course_preview_component__WEBPACK_IMPORTED_MODULE_5__["CoursePreviewComponent"],
        _pages_my_courses_my_courses_component__WEBPACK_IMPORTED_MODULE_6__["MyCoursesComponent"],
        _pages_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_7__["CourseDetailsComponent"],
        _components_in_class_in_class_component__WEBPACK_IMPORTED_MODULE_8__["InClassComponent"],
        _components_score_score_component__WEBPACK_IMPORTED_MODULE_9__["ScoreComponent"],
        src_app_shared_components_charts_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_10__["LinechartComponent"],
        src_app_shared_components_charts_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_11__["BarchartComponent"],
        src_app_shared_components_charts_doughnut_doughnut_component__WEBPACK_IMPORTED_MODULE_12__["DoughnutComponent"],
        src_app_shared_components_charts_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_13__["PiechartComponent"],
        src_app_shared_components_charts_polararea_polararea_component__WEBPACK_IMPORTED_MODULE_14__["PolarareaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _courses_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoursesRoutingModule"],
        src_app_core_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]
        // NgxLoadingModule.forRoot({
        //   animationType: ngxLoadingAnimationTypes.threeBounce,
        //   primaryColour: '#88078e',
        //   secondaryColour: '#c6ef23',
        // }),
    ], exports: [_pages_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_7__["CourseDetailsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoursesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _courses_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoursesRoutingModule"],
                    src_app_core_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]
                    // NgxLoadingModule.forRoot({
                    //   animationType: ngxLoadingAnimationTypes.threeBounce,
                    //   primaryColour: '#88078e',
                    //   secondaryColour: '#c6ef23',
                    // }),
                ],
                declarations: [
                    _courses_component__WEBPACK_IMPORTED_MODULE_2__["CoursesComponent"],
                    _components_course_preview_course_preview_component__WEBPACK_IMPORTED_MODULE_5__["CoursePreviewComponent"],
                    _pages_my_courses_my_courses_component__WEBPACK_IMPORTED_MODULE_6__["MyCoursesComponent"],
                    _pages_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_7__["CourseDetailsComponent"],
                    _components_in_class_in_class_component__WEBPACK_IMPORTED_MODULE_8__["InClassComponent"],
                    _components_score_score_component__WEBPACK_IMPORTED_MODULE_9__["ScoreComponent"],
                    src_app_shared_components_charts_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_10__["LinechartComponent"],
                    src_app_shared_components_charts_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_11__["BarchartComponent"],
                    src_app_shared_components_charts_doughnut_doughnut_component__WEBPACK_IMPORTED_MODULE_12__["DoughnutComponent"],
                    src_app_shared_components_charts_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_13__["PiechartComponent"],
                    src_app_shared_components_charts_polararea_polararea_component__WEBPACK_IMPORTED_MODULE_14__["PolarareaComponent"]
                ],
                entryComponents: [
                    _components_course_preview_course_preview_component__WEBPACK_IMPORTED_MODULE_5__["CoursePreviewComponent"]
                ],
                exports: [_pages_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_7__["CourseDetailsComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PKQ3":
/*!**********************************************!*\
  !*** ./src/app/@core/module-import.guard.ts ***!
  \**********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "Pjly":
/*!*******************************************!*\
  !*** ./src/app/@services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "NuaS");




class AuthService {
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.tokenKeyName = 'bgut';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        this.userToken = sessionStorage.getItem(this.tokenKeyName);
    }
    get userToken() { return this.uToken; }
    set userToken(token) {
        if (token && token.access_token) {
            this.uToken = token.access_token;
        }
        else {
            this.uToken = token;
        }
    }
    setUserTokenAndRemember(token) {
        this.clearUserToken();
        this.userToken = token.access_token;
        sessionStorage.setItem(this.tokenKeyName, this.userToken);
    }
    pickAuthenticationToken() {
        return this.authToken;
    }
    pickUserToken() {
        return this.userToken;
    }
    clearUserToken() {
        this.userToken = null;
        sessionStorage.removeItem(this.tokenKeyName);
    }
    isAuthenticated() {
        const token = sessionStorage.getItem(this.tokenKeyName);
        if (token === null) {
            return false;
        }
        return !this.jwtHelper.isTokenExpired(token);
    }
    decode() {
        return this.jwtHelper.decodeToken(this.userToken);
    }
    isExpectedRole(allowedRoles) {
        // check if the list of allowed roles is empty, if empty, authorize the user to access the page
        if (allowedRoles == null || allowedRoles.length === 0) {
            return true;
        }
        const token = sessionStorage.getItem(this.tokenKeyName);
        if (token === null) {
            return false;
        }
        const decodedToken = this.jwtHelper.decodeToken(token);
        if (!decodedToken) {
            console.log('Invalid token');
            return false;
        }
        return allowedRoles.includes(decodedToken.role);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "Q/1L":
/*!************************************************************************!*\
  !*** ./src/app/@shared/pages/access-denied/access-denied.component.ts ***!
  \************************************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AccessDeniedComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccessDeniedComponent.ɵfac = function AccessDeniedComponent_Factory(t) { return new (t || AccessDeniedComponent)(); };
AccessDeniedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessDeniedComponent, selectors: [["app-access-denied"]], decls: 14, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-xs-12", "col-center", "text-center"], ["id", "denied", "src", "../assets/images/status-codes/403.png", "alt", "Picture from my collection."], ["mat-button", "", "color", "primary", "routerLink", "/home"]], template: function AccessDeniedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Status code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "403 - FORBIDDEN! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Server says: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "'You are not authorized!' ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Back To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".content[_ngcontent-%COMP%] {\n  font-family: \"Alsandra\";\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n#denied[_ngcontent-%COMP%] {\n  width: 40%;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 5em;\n  -webkit-text-stroke-width: 0.8px;\n  -webkit-text-stroke-color: black;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n}\n@media only screen and (max-width: 797px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 4em;\n  }\n}\n@media only screen and (max-width: 591px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3em;\n  }\n}\n@media only screen and (max-width: 451px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FjY2Vzcy1kZW5pZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUjtBQUdBO0VBQ0ksVUFBQTtBQUFKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFDQTtFQUNJO0lBQ0ksY0FBQTtFQUVOO0FBQ0Y7QUFBQTtFQUNJO0lBQ0ksY0FBQTtFQUVOO0FBQ0Y7QUFBQTtFQUNJO0lBQ0ksZ0JBQUE7RUFFTjtBQUNGIiwiZmlsZSI6ImFjY2Vzcy1kZW5pZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBmb250LWZhbWlseTogJ0Fsc2FuZHJhJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBidXR0b257XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbiNkZW5pZWQge1xuICAgIHdpZHRoOiA0MCU7XG59XG5oMSB7XG4gICAgZm9udC1zaXplOiA1ZW07XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC44cHg7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogYmxhY2s7XG4gICAgc3BhbntcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk3cHgpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkxcHgpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUxcHgpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi40ZW07XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessDeniedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-access-denied',
                template: `
  <div class="content">
    <div class="row">
      <div class="col-xs-12 col-center text-center">
        <img id="denied" src="../assets/images/status-codes/403.png"  alt="Picture from my collection." />
        <h1> Status code: <span>403 - FORBIDDEN!  </span>
          <br> Server says: <span>'You are not authorized!'  </span>
        
        </h1>
        <button mat-button color="primary" routerLink='/home'> Back To Home</button>
      </div>
    </div>
  </div>
  `,
                styleUrls: ['./access-denied.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RCKm":
/*!************************************************!*\
  !*** ./src/app/@services/user-data.service.ts ***!
  \************************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_users_models_user_view_model_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@modules/users/models/user-view-model.module */ "L0Vf");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-bus.service */ "S9yh");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backend.service */ "KurF");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "Pjly");







class UserDataService {
    constructor(eventBusService, backendService, authService) {
        this.eventBusService = eventBusService;
        this.backendService = backendService;
        this.authService = authService;
        this.userData = new _modules_users_models_user_view_model_module__WEBPACK_IMPORTED_MODULE_1__["UserViewModel"]();
    }
    setUserData(data) {
        this.userData = data;
        this.eventBusService.emitUpdateUserData(data);
    }
    getUserData() {
        return this.userData;
    }
    updatePassword(data) {
        return this.backendService.backendRequest('post', 'Users/UpdatePassword', data, true);
    }
    updateEmail(data) {
        return this.backendService.backendRequest('post', 'Users/UpdateEmail', data, true);
    }
    updateProfile(data) {
        return this.backendService.backendRequest('post', 'Users/UpdateProfile', data, true);
    }
    updateProfilePicture(data) {
        return this.backendService.backendRequest('post', 'Users/UpdateProfilePicture', data, true);
    }
    sendIssueToAdmin(data) {
        return this.backendService.backendRequest('post', 'Users/ReportIssue', data, true);
    }
    sendExceptionToAdmin(data) {
        return this.backendService.backendRequest('post', 'Users/ReportException', data, true);
    }
    getUserByToken() {
        return this.backendService.backendRequest('get', 'Identity', null, true);
    }
    getUserById(userId) {
        return this.backendService.backendRequest('get', 'Users/' + userId, null, true);
    }
    getUserIP() {
        return this.backendService.backendRequest('get', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].IPCheckingServiceUrl, null, true);
    }
    updateLastLoginDate() {
        return this.backendService.backendRequest('get', 'Users/UpdateLastLogin', null, true);
    }
    getDasboardData() {
        return this.backendService.backendRequest('get', 'users/Dashboard', null, true);
    }
    logout() {
        this.userData = null;
        this.authService.clearUserToken();
    }
}
UserDataService.ɵfac = function UserDataService_Factory(t) { return new (t || UserDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_event_bus_service__WEBPACK_IMPORTED_MODULE_3__["EventBusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
UserDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserDataService, factory: UserDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _event_bus_service__WEBPACK_IMPORTED_MODULE_3__["EventBusService"] }, { type: _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "RKaf":
/*!******************************************************!*\
  !*** ./src/app/@shared/models/error-model.module.ts ***!
  \******************************************************/
/*! exports provided: ErrorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModel", function() { return ErrorModel; });
class ErrorModel {
    constructor(error) {
        const err = error.error;
        this.ErrorText = err.error;
        this.ErrorDescription = err || err.error_description;
        this.Message = error.message;
        this.Name = error.name;
        this.OK = error.ok;
        this.Status = error.status;
        this.StatusText = error.statusText;
        this.Url = error.url;
    }
}


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S88O":
/*!*******************************************************!*\
  !*** ./src/app/@pages/register/register.component.ts ***!
  \*******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








class RegisterComponent {
    constructor(formBuilder, router, http, 
    // private accountService: AccountService,
    // private errorHandlerService: ErrorHandlerService,
    snackbar, dialog) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.loading = false;
        this.registrationError = false;
        this.registrationErrorMessage = '';
    }
    ngOnInit() {
        this.registerForm =
            this.formBuilder.group({
                email: [
                    null,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
                ],
                password: [
                    null,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]
                ],
                acceptedTerms: [
                    false,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]
                ]
            });
    }
    register() {
        // this.loading = true;
        // this.http.get(environment.IPCheckingServiceUrl)
        //   .subscribe(
        //     response => {
        //       this.ipinfo = response;
        //     },
        //     error => {
        //       this.errorHandlerService.handleRequestError(error);
        //     },
        //     () => {
        //       this.doRegistration();
        //     }
        // );
    }
    doRegistration() {
        // this.accountService.registerUser({
        //   Email: this.registerForm.value.email,
        //   Password: this.registerForm.value.password,
        //   LeadSource: 'WebApp',
        //   IP: this.ipinfo.ip
        // }).subscribe(
        //     () => {
        //       this.router.navigate(['/welcome']);
        //       this.getSuccessfulSnackBar(this.registerForm.value.email);
        //       this.loading = false;
        //     }, error => {
        //       this.registrationError = true;
        //       this.loading = false;
        //       this.registerForm.reset();
        //       this.errorHandlerService.handleRequestError(error);
        //     }
        //   );
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 0, vars: 0, template: function RegisterComponent_Template(rf, ctx) { }, styles: [".btn-outline-info[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n.GotHeroin[_ngcontent-%COMP%] {\n  font-size: 8em;\n}\n\n#viewRegister[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n}\n\n#viewRegister[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  font-size: 1.2em;\n}\n\n#viewRegister[_ngcontent-%COMP%]   .register-button[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  top: -165px;\n  margin-right: -25px;\n  background: #f7f3f3;\n  color: black;\n  font-size: 2.4em;\n  padding: 10px 0;\n  width: 130px;\n  height: 130px;\n  border: 5px solid #efefef;\n  border-radius: 50%;\n  transition: all ease-in-out 500ms;\n}\n\n#viewRegister[_ngcontent-%COMP%]   .register-button[_ngcontent-%COMP%]:enabled {\n  color: whitesmoke;\n  background: #34c7f3;\n}\n\n#viewRegister[_ngcontent-%COMP%]   .register-button[_ngcontent-%COMP%]:enabled:hover {\n  color: black;\n  cursor: pointer;\n  background: #14ee14;\n  transform: rotate(720deg);\n}\n\n#viewRegister[_ngcontent-%COMP%]   #terms[_ngcontent-%COMP%] {\n  color: darkblue;\n}\n\n@media only screen and (max-width: 736px) {\n  .GotHeroin[_ngcontent-%COMP%] {\n    font-size: 6.6em;\n  }\n\n  #viewRegister[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  #viewRegister[_ngcontent-%COMP%]   .register-button[_ngcontent-%COMP%] {\n    top: -155px;\n    font-size: 1.4em;\n    width: 100px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFHRjs7QUFERTtFQUNFLFdBQUE7RUFDQSw2RUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUFJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUVOOztBQUNJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ047O0FBR0U7RUFDRSxlQUFBO0FBREo7O0FBS0E7RUFDRTtJQUNFLGdCQUFBO0VBRkY7O0VBS0E7SUFDRSxVQUFBO0VBRkY7RUFJRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VBRko7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tb3V0bGluZS1pbmZvIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uR290SGVyb2luIHtcbiAgZm9udC1zaXplOiA4ZW07XG59XG4jdmlld1JlZ2lzdGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cblxuICAucmVnaXN0ZXItYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRvcDogLTE2NXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTI1cHg7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjNmMztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyLjRlbTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2VmZWZlZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDUwMG1zO1xuXG4gICAgJjplbmFibGVkIHtcbiAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgYmFja2dyb3VuZDogcmdiKDUyLCAxOTksIDI0Myk7XG4gICAgfVxuXG4gICAgJjplbmFibGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyMCwgMjM4LCAyMCk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xuICAgIH1cbiAgfVxuXG4gICN0ZXJtc3tcbiAgICBjb2xvcjogZGFya2JsdWVcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5Hb3RIZXJvaW4ge1xuICAgIGZvbnQtc2l6ZTogNi42ZW07XG4gIH1cblxuICAjdmlld1JlZ2lzdGVyIHtcbiAgICB3aWR0aDogODAlO1xuXG4gICAgLnJlZ2lzdGVyLWJ1dHRvbntcbiAgICAgIHRvcDogLTE1NXB4O1xuICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "S9yh":
/*!************************************************!*\
  !*** ./src/app/@services/event-bus.service.ts ***!
  \************************************************/
/*! exports provided: EventBusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBusService", function() { return EventBusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @EventBusService used for connections between modules
 */
class EventBusService {
    constructor() {
        this.changeRoute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.retryRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unknownError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateUserData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fetchedDashboardData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    emitChangeRoute(data) {
        this.changeRoute.emit(data);
    }
    emitRetryRequest(data) {
        this.retryRequest.emit(data);
    }
    emitUnknownError(data) {
        this.unknownError.emit(data);
    }
    emitUpdateUserData(data) {
        this.updateUserData.emit(data);
    }
    emitFetchedDashboardData(data) {
        this.fetchedDashboardData.emit(data);
    }
}
EventBusService.ɵfac = function EventBusService_Factory(t) { return new (t || EventBusService)(); };
EventBusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventBusService, factory: EventBusService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventBusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@shared/components/navbar/navbar.component */ "6xTX");



class AppComponent {
    constructor() {
        this.title = 'BaiGanio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: ` 
    <app-navbar></app-navbar>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "TtV/":
/*!*************************************************!*\
  !*** ./src/app/@pages/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.retryFunction = null;
        // user: UserViewModel;
        this.loading = false;
        this.loginError = false;
        this.loginErrorMessage = '';
    }
    ngOnInit() {
        this.loginForm =
            this.formBuilder.group({
                email: [
                    null,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
                ],
                password: [
                    null,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
                ],
                rememberMe: [
                    true
                ]
            });
        //this.authservice.clearUserToken();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 0, vars: 0, template: function LoginComponent_Template(rf, ctx) { }, styles: [".btn-outline-info[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n.GotHeroin[_ngcontent-%COMP%] {\n  font-size: 8em;\n}\n\n#viewLogin[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n}\n\n#viewLogin[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  font-size: 1.2em;\n}\n\n#viewLogin[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  top: -165px;\n  margin-right: -25px;\n  background: #f7f3f3;\n  color: black;\n  font-size: 2.4em;\n  padding: 10px 0;\n  width: 130px;\n  height: 130px;\n  border: 5px solid #efefef;\n  border-radius: 50%;\n  transition: all ease-in-out 500ms;\n}\n\n#viewLogin[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:enabled {\n  color: whitesmoke;\n  background: #34c7f3;\n}\n\n#viewLogin[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:enabled:hover {\n  color: black;\n  cursor: pointer;\n  background: #14ee14;\n  transform: rotate(720deg);\n}\n\n@media only screen and (max-width: 736px) {\n  .GotHeroin[_ngcontent-%COMP%] {\n    font-size: 5em;\n    margin-top: 35px;\n  }\n\n  #viewLogin[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  #viewLogin[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n    top: -155px;\n    font-size: 1.4em;\n    width: 100px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFHRjs7QUFERTtFQUNFLFdBQUE7RUFDQSw2RUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUFJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUVOOztBQUNJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ047O0FBSUE7RUFDRTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQURGOztFQUlBO0lBQ0UsVUFBQTtFQURGO0VBR0U7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQURKO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW91dGxpbmUtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLkdvdEhlcm9pbiB7XG4gIGZvbnQtc2l6ZTogOGVtO1xufVxuI3ZpZXdMb2dpbiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG5cbiAgLmxvZ2luLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0b3A6IC0xNjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmN2YzZjM7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMi40ZW07XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNlZmVmZWY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCA1MDBtcztcblxuICAgICY6ZW5hYmxlZCB7XG4gICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYig1MiwgMTk5LCAyNDMpO1xuICAgIH1cblxuICAgICY6ZW5hYmxlZDpob3ZlciB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjAsIDIzOCwgMjApO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuICAuR290SGVyb2luIHtcbiAgICBmb250LXNpemU6IDVlbTtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICB9XG5cbiAgI3ZpZXdMb2dpbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBcbiAgICAubG9naW4tYnV0dG9ue1xuICAgICAgdG9wOiAtMTU1cHg7XG4gICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Urur":
/*!*******************************************************!*\
  !*** ./src/app/@modules/courses/courses.component.ts ***!
  \*******************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_course_preview_model_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/course-preview-model.module */ "iRF1");
/* harmony import */ var _components_course_preview_course_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/course-preview/course-preview.component */ "/ymm");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CoursesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Congrats! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You are enrolled 4 the [c.Name] course ;)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goToMyCourses(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go to My Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.backToCourses(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_ng_template_1_div_4_span_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_ng_template_1_div_4_span_11_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.goToCourse(c_r8.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go to Course Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_ng_template_1_div_4_span_11_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_ng_template_1_div_4_span_11_span_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.enroll4course(c_r8.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enroll 4 Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_ng_template_1_div_4_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoursesComponent_ng_template_1_div_4_span_11_button_1_Template, 3, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CoursesComponent_ng_template_1_div_4_span_11_span_2_Template, 4, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isEnrolled(c_r8.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.isEnrolled(c_r8.Id) && c_r8.IsElectable);
} }
function CoursesComponent_ng_template_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_ng_template_1_div_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const c_r8 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.getCoursePreview(c_r8.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CoursesComponent_ng_template_1_div_4_span_11_Template, 3, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r8.Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r8.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r8.IsActive);
} }
function CoursesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CoursesComponent_ng_template_1_div_4_Template, 12, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.courses);
} }
function CoursesComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please wait! Fetching data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { backdropBorderRadius: "14px", fullScreenBackdrop: true }; };
class CoursesComponent {
    // student = new StudentPreviewModel();
    constructor(
    // private courseService: CoursesService,
    // private studentService: StudentService,
    // private authService: AuthService,
    // private userDataService: UserDataService,
    // private errorHandlerService: ErrorHandlerService,
    dialog, router, snackbar) {
        this.dialog = dialog;
        this.router = router;
        this.snackbar = snackbar;
        this.loading = false;
        this.isStudent = false;
        this.flagEnrollSuccess = false;
        this.msgLogIn = '';
        this.fetchingMsg = '';
        this.msgIncompleteStudent = '';
        this.totalStudents = 0;
        this.courses = new Array();
    }
    ngOnInit() {
        this.loading = true;
        // if (this.authService.isAuthenticated()) {
        //   this.storedUser = this.userDataService.getUserData();
        //   if (this.storedUser) {
        //       this.storedUserInit();
        //   }
        //   this.getCoursesWithEnrolledUserId();
        // } else {
        //   this.getInitCourses();
        // }
    }
    getCoursesWithEnrolledUserId() {
        // this.courseService.getCoursesWithEnrolledUserId().subscribe(response => {
        //   response.body.forEach(element => {
        //     const c = {
        //       Id: element.id,
        //       Name: element.name,
        //       Teachers: element.teachers,
        //       Description: element.description,
        //       StartDate: element.startDate,
        //       EndDate: element.endDate,
        //       ModifiedOn: element.modifiedOn,
        //       Image: element.image,
        //       IsActive: element.isActive,
        //       IsElectable: element.isElectable,
        //       EnrolledStudents: element.totalEnrolledStudents,
        //       EnrolledUserId: element.enrolledUserId
        //     };
        //     this.courses.push(c as CoursePreviewModel);
        //   });
        // },
        // error => { this.errorHandlerService.handleRequestError(error); this.loading = false; },
        // () => { this.loading = false; });
    }
    getInitCourses() {
        // this.courseService.getCoursesPreview().subscribe(response => {
        //   response.body.forEach(element => {
        //     const c = {
        //       Id: element.id,
        //       Name: element.name,
        //       Teachers: element.teachers,
        //       Description: element.description,
        //       StartDate: element.startDate,
        //       EndDate: element.endDate,
        //       ModifiedOn: element.modifiedOn,
        //       Image: element.image,
        //       IsActive: element.isActive,
        //       IsElectable: element.isElectable,
        //       EnrolledStudents: element.enrolledStudents,
        //       EnrolledUserId: element.enrolledUserId
        //     };
        //     this.courses.push(c as CoursePreviewModel);
        //   });
        // },
        //  error => {
        //    this.errorHandlerService.handleRequestError(error);
        //    this.loading = false;
        // }, () => { this.loading = false; });
    }
    storedUserInit() {
        // this.userDataService.getUserByToken().subscribe(
        //     response => {
        //         const u = {
        //             Id: response.body.id,
        //             Username: response.body.username,
        //             Subscriptions: response.body.subscriptions,
        //             Roles: response.body.roles
        //         };
        //         this.storedUser = u as UserViewModel;
        //         this.userDataService.setUserData(this.storedUser);
        //     },
        //     error => {
        //         this.errorHandlerService.handleRequestError('myahah' + error);
        //     }, () => { this.loading = false; }
        // );
    }
    isEnrolled(cId) {
        let result = false;
        this.courses.forEach(element => {
            if (cId === element.Id && element.EnrolledUserId === this.storedUser.Id) {
                console.log('found');
                console.log(this.storedUser.Id);
                result = true;
                return true;
            }
        });
        return result;
    }
    enroll4course(courseId) {
        this.loading = true;
        let course;
        this.courses.forEach((element) => {
            if (element.Id === courseId) {
                course = element;
            }
        });
        // this.studentService.enroll4Course({
        //     CourseId: course.Id,
        //     CourseName: course.Name,
        //     Image: course.Image
        //   })
        //   .subscribe(
        //     () => {},
        //     error => {
        //       this.errorHandlerService.handleRequestError(error);
        //       this.loading = false;
        //     },
        //     () => {
        //       this.loading = false;
        //       this.snackbar.open('Enrollment successful !', 'X', {
        //         duration: 3000,
        //         horizontalPosition: 'right',
        //         verticalPosition: 'top',
        //         panelClass: 'successSnackbar'
        //       });
        //       this.flagEnrollSuccess = true;
        //     }
        // );
    }
    getCoursePreview(courseId) {
        let course;
        this.courses.forEach((element) => {
            if (element.Id === courseId) {
                course =
                    new _models_course_preview_model_module__WEBPACK_IMPORTED_MODULE_1__["CoursePreviewModel"](element.Id, element.Name, element.Description, element.Teachers, element.StartDate, element.EndDate, element.ModifiedOn, element.IsActive, element.IsElectable, element.Image, element.EnrolledStudents);
            }
        });
        const $dialogRef = this.dialog.open(_components_course_preview_course_preview_component__WEBPACK_IMPORTED_MODULE_2__["CoursePreviewComponent"], {
            width: '80vw',
            maxHeight: '100vh',
            data: { model: course }
        });
        $dialogRef.afterClosed().subscribe();
    }
    backToCourses() {
        setTimeout(() => {
            location.reload();
        }, 10);
    }
    goToCourse(courseId) {
        this.router.navigate(['/courses/preview/' + courseId]);
    }
    goToMyCourses() {
        this.router.navigate(['/courses/preview']);
    }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
CoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesComponent, selectors: [["app-courses"]], decls: 5, vars: 6, consts: [["class", "text-center", 4, "ngIf", "ngIfElse"], ["infoBox", ""], ["class", "text-center", 4, "ngIf"], [3, "show", "config"], [1, "text-center"], ["src", "../../../../../../assets/images/Checkmark.png", 1, "img-fluid"], ["type", "button", 1, "btn", "btn-outline-info", 3, "click"], ["type", "button", 1, "btn", 3, "click"], [2, "text-align", "center"], [2, "width", "60%", "color", "blue"], [1, "row"], ["class", "col-md-4 text-center", 4, "ngFor", "ngForOf"], [1, "col-md-4", "text-center"], [1, "card"], [1, "card-body"], ["alt", "Sample image", 1, "img-thumbnail", "img-fluid", 3, "src"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-search"], [4, "ngIf"], ["type", "button", "class", "btn btn-outline-info", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CoursesComponent_div_0_Template, 14, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoursesComponent_ng_template_1_Template, 5, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CoursesComponent_h2_3_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-loading", 3);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flagEnrollSuccess)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["h6[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  background: snow;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 14vw;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.dim[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 100 !important;\n  background-color: black;\n  filter: alpha(opacity=75);\n  \n  -khtml-opacity: 0.75;\n  \n  -moz-opacity: 0.75;\n  \n  opacity: 0.75;\n  \n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\n.dim[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  font-size: 2.6em;\n  text-align: center;\n  color: whitesmoke;\n  transition: 0.3s all;\n  -webkit-animation: PopUp 1s;\n          animation: PopUp 1s;\n  text-shadow: 0 0 100px white;\n  height: 100px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n@media only screen and (max-width: 736px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 4em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n\n  .img-fluid[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 44vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvdXJzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFJSSxXQUFBO0FBQUo7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUEyQixzQkFBQTtFQUMzQixvQkFBQTtFQUEyQixzQkFBQTtFQUMzQixrQkFBQTtFQUEwQixzQkFBQTtFQUMxQixhQUFBO0VBQXlCLHNCQUFBO0VBQ3pCLDJCQUFBO1VBQUEsbUJBQUE7QUFLSjs7QUFKSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQU1SOztBQUZBO0VBQ0k7SUFDSSxjQUFBO0VBS047O0VBSEU7SUFDSSxnQkFBQTtFQU1OOztFQUpFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFPTjtBQUNGIiwiZmlsZSI6ImNvdXJzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNiB7XG4gICAgY29sb3I6IGdyYXk7XG59XG4uY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHNub3c7XG59XG4uYnRue1xuICAgIC8vIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLy8gd2lkdGg6IDMwJTtcbiAgICAvLyBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4uaW1nLWZsdWlkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDE0dnc7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5kaW1cbntcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIGxlZnQ6MDtcbiAgICB0b3A6MDtcbiAgICB6LWluZGV4OjEwMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7IFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03NSk7IC8qIGludGVybmV0IGV4cGxvcmVyICovXG4gICAgLWtodG1sLW9wYWNpdHk6IDAuNzU7ICAgICAgLyoga2h0bWwsIG9sZCBzYWZhcmkgKi9cbiAgICAtbW96LW9wYWNpdHk6IDAuNzU7ICAgICAgIC8qIG1vemlsbGEsIG5ldHNjYXBlICovXG4gICAgb3BhY2l0eTogMC43NTsgICAgICAgICAgIC8qIGZ4LCBzYWZhcmksIG9wZXJhICovXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICAubXNnIHtcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjZlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICAgICAgIGFuaW1hdGlvbjogUG9wVXAgMXM7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTAwcHggd2hpdGU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHRvcDogMDsgXG4gICAgICAgIGJvdHRvbTogMDsgXG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICB9XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIH1cbiAgICAuaW1nLWZsdWlkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDR2dztcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses',
                templateUrl: './courses.component.html',
                styleUrls: ['./courses.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "V5UK":
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-import.guard */ "PKQ3");
/* harmony import */ var _shared_interfaces_checklist_database_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/interfaces/checklist-database.module */ "t/G1");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@services/account.service */ "VikD");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@services/auth.service */ "Pjly");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@services/backend.service */ "KurF");
/* harmony import */ var _services_courses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@services/courses.service */ "hDlN");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@services/error-handler.service */ "9e4Q");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@services/event-bus.service */ "S9yh");
/* harmony import */ var _services_roslyn_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@services/roslyn.service */ "6ill");
/* harmony import */ var _services_signalR_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@services/signalR.service */ "X0Cd");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@services/student.service */ "v5F5");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@services/subscription.service */ "G6we");
/* harmony import */ var _services_teacher_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@services/teacher.service */ "vzt6");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@services/user-data.service */ "RCKm");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@services/utility.service */ "IJ2j");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ "aDpx");
/* harmony import */ var _role_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./role.guard */ "3enb");




















class CoreModule {
    constructor(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, providers: [
        _auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
        _role_guard__WEBPACK_IMPORTED_MODULE_18__["RoleGuard"],
        // JwtHelperService,
        _services_backend_service__WEBPACK_IMPORTED_MODULE_6__["BackendService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_user_data_service__WEBPACK_IMPORTED_MODULE_15__["UserDataService"],
        _services_event_bus_service__WEBPACK_IMPORTED_MODULE_9__["EventBusService"],
        _services_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlerService"],
        _services_utility_service__WEBPACK_IMPORTED_MODULE_16__["UtilityService"],
        _services_courses_service__WEBPACK_IMPORTED_MODULE_7__["CoursesService"],
        _services_student_service__WEBPACK_IMPORTED_MODULE_12__["StudentService"],
        _services_subscription_service__WEBPACK_IMPORTED_MODULE_13__["SubscriptionService"],
        _services_roslyn_service__WEBPACK_IMPORTED_MODULE_10__["RoslynService"],
        _services_signalR_service__WEBPACK_IMPORTED_MODULE_11__["SignalRService"],
        _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
        _services_teacher_service__WEBPACK_IMPORTED_MODULE_14__["TeacherService"],
        _shared_interfaces_checklist_database_module__WEBPACK_IMPORTED_MODULE_3__["ChecklistDatabase"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    _auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
                    _role_guard__WEBPACK_IMPORTED_MODULE_18__["RoleGuard"],
                    // JwtHelperService,
                    _services_backend_service__WEBPACK_IMPORTED_MODULE_6__["BackendService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                    _services_user_data_service__WEBPACK_IMPORTED_MODULE_15__["UserDataService"],
                    _services_event_bus_service__WEBPACK_IMPORTED_MODULE_9__["EventBusService"],
                    _services_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlerService"],
                    _services_utility_service__WEBPACK_IMPORTED_MODULE_16__["UtilityService"],
                    _services_courses_service__WEBPACK_IMPORTED_MODULE_7__["CoursesService"],
                    _services_student_service__WEBPACK_IMPORTED_MODULE_12__["StudentService"],
                    _services_subscription_service__WEBPACK_IMPORTED_MODULE_13__["SubscriptionService"],
                    _services_roslyn_service__WEBPACK_IMPORTED_MODULE_10__["RoslynService"],
                    _services_signalR_service__WEBPACK_IMPORTED_MODULE_11__["SignalRService"],
                    _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
                    _services_teacher_service__WEBPACK_IMPORTED_MODULE_14__["TeacherService"],
                    _shared_interfaces_checklist_database_module__WEBPACK_IMPORTED_MODULE_3__["ChecklistDatabase"]
                ]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "VikD":
/*!**********************************************!*\
  !*** ./src/app/@services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.service */ "KurF");




class AccountService {
    constructor(backendService) {
        this.backendService = backendService;
    }
    registerUser(data) {
        return this.backendService.backendRequest('post', 'account/register', data);
    }
    confirm(token) {
        const data = { code: token };
        return this.backendService.backendRequest('get', 'account/confirmation', data);
    }
    resetPassword(data) {
        return this.backendService.backendRequest('post', 'account/ResetPassword', data);
    }
    forgotPassword(email) {
        return this.backendService.backendRequest('post', 'account/ForgotPassword', email);
    }
    getNotificationsData() {
        return this.backendService.backendRequest('get', 'account/Notifications', null, true);
    }
    getReportedIssuesData() {
        return this.backendService.backendRequest('get', 'account/ReportedIssues', null, true);
    }
    getUserIP() {
        return this.backendService.backendRequest('post', _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].IPCheckingServiceUrl);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "WjTl":
/*!********************************************************!*\
  !*** ./src/app/@shared/pages/error/error.component.ts ***!
  \********************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ErrorComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.error = this.data.model;
    }
    dismiss() {
        this.dialogRef.close();
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 13, vars: 2, consts: [[1, "text-center"], ["src", "../assets/images/bd2.gif", "alt", ""], [1, "text-center", 2, "width", "50%", "margin", "auto"], ["mat-stroked-button", "", "color", "warn", 2, "width", "50%", 3, "click"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ops... Error shows up!!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_11_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Dismiss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error.ErrorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error.Message, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Vycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksNkVBQUE7QUFBUiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBoMywgaDUsIGJ1dHRvbntcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                template: `
  <div class="text-center">
    <div>
      <h3> Ops... Error shows up!!!
        <img src="../assets/images/bd2.gif" alt="" />
      </h3>
      <hr/>
      <h4>{{error.ErrorText}}</h4>
      <div style="width:50%; margin:auto;"  class="text-center">
        {{error.Message}}
      </div>
      <hr/>
      <button
      mat-stroked-button color='warn'
        (click) = dismiss()
        style="width:50%">
        Dismiss
      </button>
    </div>
  </div>
  `,
                styleUrls: ['./error.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "X0Cd":
/*!**********************************************!*\
  !*** ./src/app/@services/signalR.service.ts ***!
  \**********************************************/
/*! exports provided: SignalRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRService", function() { return SignalRService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler.service */ "9e4Q");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class SignalRService {
    constructor(errorHandlerService, snackbar) {
        this.errorHandlerService = errorHandlerService;
        this.snackbar = snackbar;
    }
    initializeSignalRConnection() {
        // const connection = new signalR.HubConnectionBuilder()
        //   .configureLogging(signalR.LogLevel.Information)
        //   .withUrl(environment.bgapiSignalRNotyfyHub)
        //   .build() ;
        // connection.start()
        //   .then(
        //     () => {
        //       this.snackbar.open(
        //         `Connected to ${environment.bgapiSignalRNotyfyHub} SignalR hub!`,
        //         'X',
        //         {
        //           duration: 3000,
        //           horizontalPosition: 'center',
        //           verticalPosition: 'top',
        //           panelClass: 'successSnackbar'
        //         }
        //       );
        //       // console.log('Connected to https://localhost:44344/notify SignalR hub!');
        //     },
        //     err => {
        //       console.log(err.toString());
        //       // this.errorHandlerService.handleRequestError(err);
        //     }
        //   );
        // connection.on('BroadcastPostmanMessage', (type: string, payload: string) => {
        //   this.snackbar.open(
        //     `@nickname: ${type} -> ${payload} - via SignalR service!`,
        //     'X',
        //     {
        //       duration: 6000,
        //       horizontalPosition: 'center',
        //       verticalPosition: 'top',
        //       panelClass: 'successSnackbar'
        //     }
        //   );
        //   // console.log({ severity: type, summary: payload, detail: 'Via SignalR service' });
        // });
    }
}
SignalRService.ɵfac = function SignalRService_Factory(t) { return new (t || SignalRService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
SignalRService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignalRService, factory: SignalRService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalRService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _error_handler_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlerService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, jwtTokenGetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "NuaS");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _core_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@core/angular-material.module */ "w/ci");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@core/core.module */ "V5UK");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@pages/home/home.component */ "JBG6");
/* harmony import */ var _shared_pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@shared/pages/access-denied/access-denied.component */ "Q/1L");
/* harmony import */ var _shared_pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./@shared/pages/error/error.component */ "WjTl");
/* harmony import */ var _shared_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./@shared/pages/not-found/not-found.component */ "kgrD");
/* harmony import */ var _shared_pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./@shared/pages/privacy/privacy.component */ "3wLg");
/* harmony import */ var _shared_pages_server_alert_server_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./@shared/pages/server-alert/server-alert.component */ "xm7+");
/* harmony import */ var _shared_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./@shared/pages/terms/terms.component */ "sGRt");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./@pages/blog/blog.component */ "O8jQ");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./@shared/components/footer/footer.component */ "kDVF");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./@shared/components/navbar/navbar.component */ "6xTX");
/* harmony import */ var _modules_courses_courses_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./@modules/courses/courses.module */ "OxV1");
/* harmony import */ var _modules_subscriptions_subscriptions_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./@modules/subscriptions/subscriptions.module */ "ZzTO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "tk/3");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            _core_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _modules_courses_courses_module__WEBPACK_IMPORTED_MODULE_18__["CoursesModule"],
            _modules_subscriptions_subscriptions_module__WEBPACK_IMPORTED_MODULE_19__["SubscriptionsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"].forRoot({
                config: {
                    tokenGetter: jwtTokenGetter
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
        _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
        _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"],
        _shared_pages_server_alert_server_alert_component__WEBPACK_IMPORTED_MODULE_12__["ServerAlertComponent"],
        _shared_pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_8__["AccessDeniedComponent"],
        _shared_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
        _shared_pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyComponent"],
        _shared_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_13__["TermsComponent"],
        _shared_pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
        _core_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _modules_courses_courses_module__WEBPACK_IMPORTED_MODULE_18__["CoursesModule"],
        _modules_subscriptions_subscriptions_module__WEBPACK_IMPORTED_MODULE_19__["SubscriptionsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                    _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                    _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"],
                    _shared_pages_server_alert_server_alert_component__WEBPACK_IMPORTED_MODULE_12__["ServerAlertComponent"],
                    _shared_pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_8__["AccessDeniedComponent"],
                    _shared_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                    _shared_pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyComponent"],
                    _shared_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_13__["TermsComponent"],
                    _shared_pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                    _core_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                    _modules_courses_courses_module__WEBPACK_IMPORTED_MODULE_18__["CoursesModule"],
                    _modules_subscriptions_subscriptions_module__WEBPACK_IMPORTED_MODULE_19__["SubscriptionsModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: jwtTokenGetter
                        }
                    }),
                ],
                entryComponents: [
                    _shared_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_13__["TermsComponent"],
                    _shared_pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyComponent"],
                    _shared_pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                ],
                providers: [_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();
function jwtTokenGetter() {
    return localStorage.getItem('bg-bcof');
}


/***/ }),

/***/ "ZzTO":
/*!****************************************************************!*\
  !*** ./src/app/@modules/subscriptions/subscriptions.module.ts ***!
  \****************************************************************/
/*! exports provided: SubscriptionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsModule", function() { return SubscriptionsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@core/angular-material.module */ "w/ci");
/* harmony import */ var _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscriptions-routing.module */ "d7cb");
/* harmony import */ var _subscriptions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscriptions.component */ "m6JM");



// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';




class SubscriptionsModule {
}
SubscriptionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SubscriptionsModule });
SubscriptionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SubscriptionsModule_Factory(t) { return new (t || SubscriptionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_3__["SubscriptionsRoutingModule"],
            src_app_core_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SubscriptionsModule, { declarations: [_subscriptions_component__WEBPACK_IMPORTED_MODULE_4__["SubscriptionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_3__["SubscriptionsRoutingModule"],
        src_app_core_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SubscriptionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _subscriptions_component__WEBPACK_IMPORTED_MODULE_4__["SubscriptionsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_3__["SubscriptionsRoutingModule"],
                    src_app_core_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
                ],
                entryComponents: [
                // SubscriptionPreviewComponent
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aDpx":
/*!*************************************!*\
  !*** ./src/app/@core/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@services/auth.service */ "Pjly");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@services/user-data.service */ "RCKm");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@services/backend.service */ "KurF");






class AuthGuard {
    constructor(router, authservice, userService, backendService) {
        this.router = router;
        this.authservice = authservice;
        this.userService = userService;
        this.backendService = backendService;
    }
    canActivate() {
        if (!this.authservice.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        else {
            this.storedUser = this.userService.getUserData();
            if (this.storedUser.id === undefined) {
                this.userService.getUserByToken().subscribe(response => { this.storedUser = response.body; }, error => {
                    console.log('auth guard error!');
                    this.router.navigate(['/login']);
                    return false;
                }, () => {
                    this.userService.setUserData(this.storedUser);
                    return true;
                });
            }
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] }, { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "d7cb":
/*!************************************************************************!*\
  !*** ./src/app/@modules/subscriptions/subscriptions-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SubscriptionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsRoutingModule", function() { return SubscriptionsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _subscriptions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscriptions.component */ "m6JM");





const routes = [
    {
        path: '',
        children: [
            { path: '', component: _subscriptions_component__WEBPACK_IMPORTED_MODULE_2__["SubscriptionsComponent"] }
        ]
    },
];
class SubscriptionsRoutingModule {
}
SubscriptionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SubscriptionsRoutingModule });
SubscriptionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SubscriptionsRoutingModule_Factory(t) { return new (t || SubscriptionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SubscriptionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SubscriptionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dddl":
/*!****************************************************************************!*\
  !*** ./src/app/@modules/courses/components/in-class/in-class.component.ts ***!
  \****************************************************************************/
/*! exports provided: InClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InClassComponent", function() { return InClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function InClassComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Congrats ;) You are in +5 points!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please wait. Reloading page...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InClassComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r3.Week, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("IP: ", s_r3.Ip, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 3, s_r3.LastLoginDate, "medium"));
} }
function InClassComponent_div_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No points!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r3.Week);
} }
function InClassComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InClassComponent_div_16_div_1_Template, 12, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InClassComponent_div_16_ng_template_2_Template, 7, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r3.IsCalculated)("ngIfElse", _r5);
} }
const _c0 = function () { return { backdropBorderRadius: "14px", fullScreenBackdrop: false }; };
class InClassComponent {
    constructor(http) {
        this.http = http;
        this.message = '';
        this.errMsg = '';
        this.loading = false;
        this.studentLogins = new Array();
        this.isLetMeInActive = true;
        this.courseStartDate = new Date();
        this.courseEndDate = new Date();
    }
    ngOnInit() {
        this.loading = true;
        // this.getStudentLogins();
        // this.studentService.getStudent().subscribe(
        //     response => {
        //         this.student = response.body; // as StudentViewModel;
        //         this.loading = false;
        //     },
        //     error => {
        //         // this.loading = false;
        //         this.message = error.error;
        //         console.log(this.message);
        //     },
        //     () => {
        //         // this.getStudentLogins();
        //     }
        // );
    }
    getStudentLogins() {
        // this.studentService.getStudentLogins().subscribe(
        //     response => {
        //         response.body.forEach(element => {
        //             const c = {
        //             Id: element.id,
        //             StudentId: element.sudentId,
        //             Ip: element.ip,
        //             Week: element.week,
        //             IsCalculated: element.isCalculated,
        //             LastLoginDate: element.lastLoginDate,
        //             IPStack: element.ipStack
        //             };
        //             this.studentLogins.push(c as StudentLoginViewModel);
        //         });
        //     },
        //     error => {
        //         this.loading = false;
        //         this.message = error.error;
        //         console.log(this.message);
        //     },
        //     () => {
        //         this.loading = false;
        //         this.proccessLoginsResponse();
        //     }
        // );
    }
    proccessLoginsResponse() {
        // if (this.studentLogins.length === 0) {
        //     this.isLetMeInActive = true;
        // }
    }
    trackIP() {
        this.loading = true;
        // this.http.get(environment.IPCheckingServiceUrl).subscribe(
        //     data => {
        //         console.log(data);
        //         this.ipInfo = data;
        //         console.log(this.ipInfo);
        //     },
        //     error => {
        //         this.errMsg = error.error;
        //         console.log(this.errMsg);
        //         this.loading = false;
        //     },
        //     () => { this.loading = false; this.proccessIP(); }
        // );
    }
    proccessIP() {
        // this.studentService.letMeIn({CourseId: "", IP: this.ipInfo.ip}).subscribe(
        //     response => { },
        //     error => {
        //         this.errMsg = error.error;         
        //         this.processError();
        //         this.loading = false;
        //     },
        //     () => {
        //         this.isLetMeInActive = false;
        //         this.loading = false;
        //         setTimeout(() => {
        //             location.reload();
        //         }, 2000);
        //     }
        // );
    }
    processError() {
        // $('#errMsg').toggleClass('d-none');
        //     setTimeout(() => {
        //         this.errMsg = '';
        //         $('#errMsg').toggleClass('d-none');
        //     }, 3500);
    }
}
InClassComponent.ɵfac = function InClassComponent_Factory(t) { return new (t || InClassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
InClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InClassComponent, selectors: [["app-in-class"]], decls: 18, vars: 6, consts: [[1, "container", 2, "overflow", "hidden"], ["id", "errMsg", "aria-live", "polite", "role", "alert", 1, "animated", "bounceIn", "d-none"], [1, "error", "text-center"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [1, "btn", "btn-blue", "btn-rounded", "btn-lg", "btn-block", 3, "click"], ["youAreIn", ""], ["id", "weekNo"], [1, "card-deck"], [4, "ngFor", "ngForOf"], [3, "show", "config"], [1, "text-center"], [1, "h2", "text-center", "mb-4"], [4, "ngIf", "ngIfElse"], ["notCalculated", ""], [1, "card"], ["src", "../../../../../../assets/images/5points.png", 1, "card-img-top"], [1, "card-body", "text-left"], [1, ""], [1, "fas", "fa-check", 2, "color", "lightgreen"], ["src", "../../../../../../assets/images/sad-face2.png", 1, "card-img-top"], [1, "card-body", "text-center"]], template: function InClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InClassComponent_Template_button_click_8_listener() { return ctx.trackIP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Let Me In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InClassComponent_ng_template_10_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InClassComponent_div_16_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngx-loading", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.errMsg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.weekNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studentLogins);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbi1jbGFzcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InClassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-in-class',
                templateUrl: './in-class.component.html',
                styleUrls: ['./in-class.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "eaY0":
/*!**************************************************************************!*\
  !*** ./src/app/@shared/components/charts/piechart/piechart.component.ts ***!
  \**************************************************************************/
/*! exports provided: PiechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiechartComponent", function() { return PiechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PiechartComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://localhost:44344/api/fake/Chart/';
        this.Player = [];
        this.Run = [];
    }
    ngOnInit() {
        this.httpClient.get(this.url).subscribe((result) => {
            result.forEach(x => {
                this.Player.push(x.playerName);
                this.Run.push(x.run);
            });
            this.piechart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('canvas', {
                type: 'pie',
                data: {
                    labels: this.Player,
                    datasets: [
                        {
                            data: this.Run,
                            borderColor: '#3cba9f',
                            backgroundColor: [
                                '#3cb371',
                                '#0000FF',
                                '#9966FF',
                                '#4C4CFF',
                                '#00FFFF',
                                '#f990a7',
                                '#aad2ed',
                                '#FF00FF',
                                'Blue',
                                'Red',
                                'Blue'
                            ],
                            fill: true
                        }
                    ]
                },
                options: {
                    legend: {
                        display: true
                    },
                    scales: {
                        xAxes: [{
                                display: true
                            }],
                        yAxes: [{
                                display: true
                            }],
                    }
                }
            });
        });
    }
}
PiechartComponent.ɵfac = function PiechartComponent_Factory(t) { return new (t || PiechartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PiechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PiechartComponent, selectors: [["app-piechart"]], decls: 4, vars: 0, consts: [[1, "chart-container", 2, "position", "relative", "width", "50vw"], ["id", "canvas"]], template: function PiechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PiechartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-piechart',
                templateUrl: './piechart.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fy6L":
/*!************************************************************!*\
  !*** ./src/app/@modules/courses/courses-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CoursesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesRoutingModule", function() { return CoursesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _courses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.component */ "Urur");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_my_courses_my_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/my-courses/my-courses.component */ "ESOR");
/* harmony import */ var _pages_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/course-details/course-details.component */ "AIBm");







const routes = [
    {
        path: '',
        children: [
            { path: '', component: _courses_component__WEBPACK_IMPORTED_MODULE_1__["CoursesComponent"] }
        ]
    },
    {
        path: 'preview',
        children: [
            { path: '', component: _pages_my_courses_my_courses_component__WEBPACK_IMPORTED_MODULE_3__["MyCoursesComponent"] },
            { path: ':id', component: _pages_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_4__["CourseDetailsComponent"] }
        ]
    }
];
class CoursesRoutingModule {
}
CoursesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoursesRoutingModule });
CoursesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CoursesRoutingModule_Factory(t) { return new (t || CoursesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoursesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CoursesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hDlN":
/*!**********************************************!*\
  !*** ./src/app/@services/courses.service.ts ***!
  \**********************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend.service */ "KurF");



class CoursesService {
    constructor(backendService) {
        this.backendService = backendService;
    }
    deleteAllCourses() {
        return this.backendService.backendRequest('get', 'Admin/DeleteAllCourses', null, true);
    }
    getCoursesPreview() {
        return this.backendService.backendRequest('get', 'Courses', null, false);
    }
    getCoursesByUserId() {
        return this.backendService.backendRequest('get', 'Courses/ByUserId', null, true);
    }
    getCourseById(id) {
        return this.backendService.backendRequest('get', 'Courses/' + id, null, false);
    }
    getCoursesWithEnrolledUserId() {
        return this.backendService.backendRequest('get', 'Courses/WithUserId', null, true);
    }
    getCourseProgress(courseId) {
        return this.backendService.backendRequest('get', 'Courses/Progress/' + courseId, null, true);
    }
    createCourse(data) {
        return this.backendService.backendRequest('post', 'Courses/Create', data, true);
    }
    updateCourse(data) {
        return this.backendService.backendRequest('post', 'Courses/Update', data, true);
    }
    updateCoursePicture(data) {
        return this.backendService.backendRequest('post', 'Courses/UpdateCoursePicture', data, true);
    }
    deleteCourse(data) {
        return this.backendService.backendRequest('post', 'Courses/Delete', data, true);
    }
}
CoursesService.ɵfac = function CoursesService_Factory(t) { return new (t || CoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"])); };
CoursesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoursesService, factory: CoursesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "iRF1":
/*!************************************************************************!*\
  !*** ./src/app/@modules/courses/models/course-preview-model.module.ts ***!
  \************************************************************************/
/*! exports provided: CoursePreviewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePreviewModel", function() { return CoursePreviewModel; });
class CoursePreviewModel {
    constructor(id, name, description, teachers, startDate, endDate, modifiedOn, isActive, isElectable, image, enrolledStudents, enrolledUserId) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Teachers = teachers;
        this.StartDate = startDate;
        this.EndDate = endDate;
        this.ModifiedOn = modifiedOn;
        this.IsActive = isActive;
        this.IsElectable = isElectable;
        this.Image = image;
        this.EnrolledStudents = enrolledStudents;
        this.EnrolledUserId = enrolledUserId;
    }
}


/***/ }),

/***/ "kDVF":
/*!***************************************************************!*\
  !*** ./src/app/@shared/components/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");



// import { TermsComponent } from 'src/app/@shared/components/terms/terms.component';
// import { PrivacyComponent } from 'src/app/@shared/components/privacy/privacy.component';
class FooterComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    getPrivacy() {
        // const $dialogRef =
        // this.dialog.open(
        //   PrivacyComponent,
        //   {  width: '80vw', maxHeight: '100vh'}
        // );
        // $dialogRef.afterClosed().subscribe();
    }
    getTerms() {
        // const $dialogRef =
        // this.dialog.open(
        //   TermsComponent,
        //   {  width: '80vw', maxHeight: '100vh'}
        // );
        // $dialogRef.afterClosed().subscribe();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 31, vars: 0, consts: [[1, "card", "card-image"], [1, "text-center"], [1, "py-5"], ["id", "all-rights"], ["id", "innovations"], [1, "handyClock"], ["type", "text", "id", "clock"], [1, "links"], ["href", "https://www.facebook.com/baiganio.azurewebsites.net/", "target", "_blank"], ["src", "../assets/images/social-icons/facebook.ico", "alt", "Facebook", "title", "Facebook"], ["href", "https://github.com/BaiGanio", "target", "_blank"], ["src", "../assets//images/social-icons/octo.png", "alt", "GitHub", "title", "Github"], ["href", "https://www.youtube.com/channel/UCczegwwjd8YyeophFBIJ4EA?view_as=subscriber", "target", "_blank"], ["src", "../assets/images/social-icons/youtube.png", "alt", "YouTube", "title", "YouTube"], [1, "innerLinks"], [3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Developed by (BG) Team \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Seeing innovations since 2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " All rights reserved! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_25_listener() { return ctx.getPrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_28_listener() { return ctx.getTerms(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n  background: #132125 url('binary-globe.jpg') no-repeat 0 0;\n  background-size: auto auto;\n  background-size: cover;\n  border-radius: 0px;\n  text-align: center;\n}\n\n.py-5[_ngcontent-%COMP%]   #innovations[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n}\n\n.py-5[_ngcontent-%COMP%]   #clock[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  border: none;\n  padding: 5px;\n  margin: 5px;\n  color: black;\n  background-color: transparent;\n  font-size: 1em;\n  font-family: \"Open Sans Condensed\", sans-serif;\n}\n\n.py-5[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin: 0px 20px;\n  padding: 10px;\n}\n\n.py-5[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  background-color: rgba(61, 158, 238, 0.507);\n}\n\n.py-5[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.py-5[_ngcontent-%COMP%]   .innerLinks[_ngcontent-%COMP%] {\n  cursor: pointer;\n  list-style-type: none;\n  margin: 0 auto;\n  width: 10%;\n  font-size: 0.8rem;\n  color: #000;\n  font-weight: bold;\n  margin-bottom: 10px;\n  padding: 5px;\n  border: 1px solid black;\n  background-color: rgba(10, 136, 240, 0.768);\n}\n\n.py-5[_ngcontent-%COMP%]   .innerLinks[_ngcontent-%COMP%]:hover {\n  background-color: rgba(61, 238, 220, 0.507);\n}\n\n@media only screen and (max-width: 736px) {\n  .py-5[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.2);\n    margin: 20px;\n    border-radius: 5px;\n    border: 1px solid darkgray;\n  }\n  .py-5[_ngcontent-%COMP%]   #innovations[_ngcontent-%COMP%] {\n    font-size: 0.65em;\n  }\n  .py-5[_ngcontent-%COMP%]   #clock[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    font-family: \"Open Sans Condensed\", sans-serif;\n  }\n  .py-5[_ngcontent-%COMP%]   .innerLinks[_ngcontent-%COMP%] {\n    width: 75%;\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUNJLGdCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7QUFDUjs7QUFFUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBWjs7QUFHUTtFQUNJLDJDQUFBO0FBRFo7O0FBSVE7RUFDSSxxQkFBQTtBQUZaOztBQU1JO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7QUFKUjs7QUFPSTtFQUNJLDJDQUFBO0FBTFI7O0FBU0E7RUFDSTtJQUNJLG9DQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsMEJBQUE7RUFOTjtFQVFNO0lBQ0ksaUJBQUE7RUFOVjtFQVNNO0lBQ0ksaUJBQUE7SUFDQSw4Q0FBQTtFQVBWO0VBVU07SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQVJWO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7ICAgIFxuICAgIGJhY2tncm91bmQ6IHJnYigxOSwgMzMsIDM3KSB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIvYmluYXJ5LWdsb2JlLmpwZykgbm8tcmVwZWF0IDAgMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHktNXsgIFxuICAgICNpbm5vdmF0aW9uc3tcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbSA7XG4gICAgfVxuICAgICNjbG9jayB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIC5saW5rcyB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIG1hcmdpbjowcHggMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaW1nOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjEsIDE1OCwgMjM4LCAwLjUwNyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5uZXJMaW5rcyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTM2LCAyNDAsIDAuNzY4KTtcbiAgICB9XG4gICAgXG4gICAgLmlubmVyTGlua3M6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYxLCAyMzgsIDIyMCwgMC41MDcpO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuICAgIC5weS01IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XG5cbiAgICAgICAgI2lubm92YXRpb25ze1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjY1ZW0gO1xuICAgICAgICB9XG5cbiAgICAgICAgI2Nsb2NrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuaW5uZXJMaW5rcyB7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "kgrD":
/*!****************************************************************!*\
  !*** ./src/app/@shared/pages/not-found/not-found.component.ts ***!
  \****************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NotFoundComponent {
    constructor() { }
    ngOnInit() { }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 10, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-xs", "col-center", "text-center"], ["src", "../assets/images/status-codes/404.ico", "alt", "Picture from my collection."], ["id", "errorMessage"], ["mat-button", "", "color", "primary", "routerLink", "/home"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ooops... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Page not found on the Server! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Back To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".content[_ngcontent-%COMP%] {\n  font-family: \"Alsandra\";\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3em;\n  -webkit-text-stroke-width: 0.8px;\n  -webkit-text-stroke-color: black;\n}\n\nh1[_ngcontent-%COMP%]   #errorMessage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n@media only screen and (max-width: 797px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 5em;\n  }\n}\n\n@media only screen and (max-width: 591px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n\n  #not-founded[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFFQSxnQ0FBQTtFQUNBLGdDQUFBO0FBQUo7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBRUE7RUFDSTtJQUNJLGNBQUE7RUFDTjtBQUNGOztBQUNBO0VBQ0k7SUFDSSxjQUFBO0VBQ047O0VBQ0U7SUFDSSxVQUFBO0VBRU47QUFDRiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBmb250LWZhbWlseTogJ0Fsc2FuZHJhJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcblxuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuOHB4O1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGJsYWNrO1xuICAgICNlcnJvck1lc3NhZ2Uge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTdweCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA1ZW07XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTFweCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgICNub3QtZm91bmRlZCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTFweCkge1xuICAgIFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                template: `
  <div class="content">
    <div class="row">
      <div class="col-xs col-center text-center">
        <!-- <h1 class="Guildof">File not found</h1> -->
        <img src="../assets/images/status-codes/404.ico"  alt="Picture from my collection." />
        <h1>
          Ooops... 
          <span id="errorMessage">
          Page not found on the Server!
          </span>
        </h1>
        <button mat-button color="primary" routerLink='/home'> Back To Home</button>
      </div>
    </div>
  </div>
  `,
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "m6JM":
/*!*******************************************************************!*\
  !*** ./src/app/@modules/subscriptions/subscriptions.component.ts ***!
  \*******************************************************************/
/*! exports provided: SubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsComponent", function() { return SubscriptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_subscription_preview_model_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/subscription-preview-model.module */ "nUOs");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@services/auth.service */ "Pjly");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_subscription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@services/subscription.service */ "G6we");
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@services/user-data.service */ "RCKm");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function SubscriptionsComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscriptionsComponent_span_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goToMySubscriptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubscriptionsComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please wait! Fetching data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubscriptionsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your subscription request is on the fly... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Please check your email for confirmation link! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscriptionsComponent_div_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dismiss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubscriptionsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Thank you for confirming your subscription. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You are now subscribed! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscriptionsComponent_div_7_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dismiss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubscriptionsComponent_div_9_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Active : ", s_r11.IsActive, "");
} }
function SubscriptionsComponent_div_9_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscription in development!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubscriptionsComponent_div_9_div_11_p_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscriptionsComponent_div_9_div_11_p_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const s_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.sendRequest(s_r11.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Send request 4 subscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubscriptionsComponent_div_9_div_11_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Waiting for confirmation!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubscriptionsComponent_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubscriptionsComponent_div_9_div_11_p_1_Template, 3, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubscriptionsComponent_div_9_div_11_p_2_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isConfirmed(s_r11.Id) === false && ctx_r14.isWaitingForConfirmation(s_r11.Id) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isWaitingForConfirmation(s_r11.Id));
} }
function SubscriptionsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SubscriptionsComponent_div_9_p_9_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SubscriptionsComponent_div_9_p_10_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SubscriptionsComponent_div_9_div_11_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscriptionsComponent_div_9_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const s_r11 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.getSubscriptionPreview(s_r11.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r11.Type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", s_r11.Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r11.IsActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !s_r11.IsActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r11.IsActive);
} }
class SubscriptionsComponent {
    constructor(
    // private errorHandlerService: ErrorHandlerService,
    authService, router, subscriptionsService, userDataService, route, dialog, snackbar) {
        this.authService = authService;
        this.router = router;
        this.subscriptionsService = subscriptionsService;
        this.userDataService = userDataService;
        this.route = route;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.subscriptions = new Array();
        this.userId = '';
        this.errorMsg = '';
        this.subscriptionId = '';
        this.successfulConfirmation = false;
        this.failedConfirmation = false;
        this.notificationRequest = false;
        this.loading = false;
        this.panelOpenState = false;
        this.isUserConfirmingSubscription = false;
        this.totalUsersInSubscr = 0;
        this.haveConfirmedSubscription = false;
    }
    ngOnInit() {
        // this.loading = true;
        // if (this.route.snapshot.params.token) {
        //     this.checkRouteParameters();
        // }
        // if (this.authService.isAuthenticated()) {
        //     this.loading = true;
        //     this.storedUser = this.userDataService.getUserData();
        //     if (this.storedUser.id === undefined) {
        //         this.storedUserInit();
        //     }
        // }
        // this.subscriptionsInit();
    }
    subscriptionsInit() {
        this.subscriptionsService.getAllSubscriptions().subscribe(response => {
            console.log(response.body);
            response.body.forEach(element => {
                const s = {
                    Id: element.id,
                    Type: element.type,
                    Description: element.description,
                    IsActive: element.isActive,
                    Image: element.image,
                    TotalSubscribers: element.totalSubscribers,
                    ConfirmedSubscribers: element.confirmedSubscribers,
                    PendingSubscribers: element.pendingSubscribers,
                    CancelledSubscribers: element.cancelledSubscribers,
                    CreatedOn: element.createdOn,
                    ModifiedOn: element.modifiedOn
                };
                this.subscriptions.push(s);
            });
        }, error => {
            //  this.errorHandlerService.handleRequestError(error);
            this.loading = false;
        }, () => { this.loading = false; });
    }
    storedUserInit() {
        this.userDataService.getUserByToken().subscribe(response => {
            const u = {
                Id: response.body.id,
                Username: response.body.username,
                Subscriptions: response.body.subscriptions,
                Roles: response.body.roles
            };
            // this.storedUser = u as UserViewModel;
            this.userDataService.setUserData(this.storedUser);
        }, error => {
            //   this.errorHandlerService.handleRequestError('myahah' + error);
        }, () => { this.loading = false; });
    }
    goToMySubscriptions() {
        this.router.navigate(['/subscriptions/preview']);
    }
    sendRequest(id) {
        this.loading = true;
        console.log(id);
        this.subscriptionsService.sendRequestForSub({ Id: id })
            .subscribe(response => {
            this.loading = false;
            this.notificationRequest = true;
        }, error => {
            this.loading = false;
            //this.errorHandlerService.handleRequestError(error);
        }, () => {
            this.subscriptions = new Array();
            this.storedUserInit();
            this.subscriptionsInit();
        });
    }
    checkRouteParameters() {
        const token = (String)(this.route.snapshot.params.token).split('--');
        if (token) {
            this.confirmSubscription();
        }
    }
    confirmSubscription() {
        const token = this.route.snapshot.params.token;
        this.subscriptionsService.confirmRequestForSub(token).subscribe(() => {
            this.isUserConfirmingSubscription = true;
            this.loading = false;
        }, err => {
            this.loading = false;
            this.failedConfirmation = true;
            //  this.errorHandlerService.handleRequestError(err);
        });
    }
    getSubscriptionPreview(subscriptionId) {
        let subscription;
        this.subscriptions.forEach((element) => {
            if (element.Id === subscriptionId) {
                subscription =
                    new _models_subscription_preview_model_module__WEBPACK_IMPORTED_MODULE_1__["SubscriptionPreviewModel"](element.Id, element.Type, element.Description, element.IsActive, element.Image, element.TotalSubscribers, element.ConfirmedSubscribers, element.PendingSubscribers, element.CancelledSubscribers, element.CreatedOn, element.ModifiedOn);
            }
        });
        // const $dialogRef =
        //     this.dialog.open(
        //         SubscriptionPreviewComponent,
        //         { data: { model: subscription } }
        //     );
        // $dialogRef.afterClosed().subscribe();
    }
    isConfirmed(sId) {
        let result = false;
        this.storedUser = this.userDataService.getUserData();
        if (this.storedUser.Id) {
            this.storedUser.Subscriptions.forEach(element => {
                if (sId === element.subscription_id && element.status === 'Confirmed') {
                    this.haveConfirmedSubscription = true;
                    result = true;
                    return true;
                }
            });
        }
        return result;
    }
    isWaitingForConfirmation(sId) {
        let result = false;
        this.storedUser = this.userDataService.getUserData();
        if (this.storedUser.Id) {
            this.storedUser.Subscriptions.forEach(element => {
                if (sId === element.subscription_id && element.status === 'WaitingForConfirmation') {
                    result = true;
                    return true;
                }
            });
        }
        return result;
    }
    getTotalSubscribers(sId) {
        let result = 0;
        this.subscriptions.forEach(element => {
            if (sId === element.Id) {
                result = element.TotalSubscribers;
                return result;
            }
        });
        return result;
    }
    dismiss() {
        this.isUserConfirmingSubscription = false;
        this.notificationRequest = false;
    }
}
SubscriptionsComponent.ɵfac = function SubscriptionsComponent_Factory(t) { return new (t || SubscriptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
SubscriptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscriptionsComponent, selectors: [["app-subscriptions"]], decls: 10, vars: 5, consts: [[1, "", 2, "text-align", "center"], [4, "ngIf"], [2, "width", "60%", "color", "blue"], [1, "content", "text-center"], ["class", "dim", 4, "ngIf"], [1, "row", "text-center"], ["id", "exception-list", "class", "col-md-4", 4, "ngFor", "ngForOf"], [2, "background-color", "cornflowerblue", "color", "white", "cursor", "pointer", 3, "click"], [1, "dim"], [1, "msg"], [1, "btn", "btn-outline-info", 2, "width", "20%", 3, "click"], ["id", "exception-list", 1, "col-md-4"], [1, "card", 2, "margin", "10px"], [1, "card-body"], [1, "text-center"], [2, "color", "black"], [1, "view", "view-cascade", "overlay"], ["alt", "Sample image", 1, "img-thumbnail", "img-fluid", 3, "src"], [2, "width", "80%", "color", "blue"], ["id", "subscrStatus", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-search"], ["id", "subscrStatus"], ["style", "color: blue;", 4, "ngIf"], [1, "btn", "btn-outline-success", 3, "click"], [2, "color", "blue"]], template: function SubscriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscriptions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubscriptionsComponent_span_2_Template, 4, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubscriptionsComponent_h2_5_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SubscriptionsComponent_div_6_Template, 11, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SubscriptionsComponent_div_7_Template, 10, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SubscriptionsComponent_div_9_Template, 14, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.haveConfirmedSubscription === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserConfirmingSubscription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subscriptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".img-fluid[_ngcontent-%COMP%] {\n  height: 16vw;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n@media screen and (max-width: 992px) {\n  #subscrContainer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1YnNjcmlwdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLGdCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJzdWJzY3JpcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1mbHVpZCB7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDE2dnc7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNzdWJzY3JDb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subscriptions',
                templateUrl: 'subscriptions.component.html',
                styleUrls: ['subscriptions.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"] }, { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "nUOs":
/*!************************************************************************************!*\
  !*** ./src/app/@modules/subscriptions/models/subscription-preview-model.module.ts ***!
  \************************************************************************************/
/*! exports provided: SubscriptionPreviewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPreviewModel", function() { return SubscriptionPreviewModel; });
class SubscriptionPreviewModel {
    constructor(id, type, description, isActive, image, totalSubscribers, confirmedSubscribers, pendingSubscribers, cancelledSubscribers, createdOn, modifiedOn) {
        this.Id = id;
        this.Type = type;
        this.IsActive = isActive;
        this.Image = image;
        this.TotalSubscribers = totalSubscribers;
        this.ConfirmedSubscribers = confirmedSubscribers;
        this.PendingSubscribers = pendingSubscribers;
        this.CancelledSubscribers = cancelledSubscribers;
        this.Description = description;
        this.CreatedOn = createdOn;
        this.ModifiedOn = modifiedOn;
    }
}


/***/ }),

/***/ "sGRt":
/*!********************************************************!*\
  !*** ./src/app/@shared/pages/terms/terms.component.ts ***!
  \********************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class TermsComponent {
    constructor(
    // public dialogRef: MatDialogRef<TermsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: BaseDialogData,
    formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        // this.user = this.data.model;
        // this.title = this.data.title;
    }
    onRejectClick() {
        // this.dialogRef.close();
    }
}
TermsComponent.ɵfac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], decls: 28, vars: 0, consts: [[1, "animated", "fadeInRightBig"], ["id", "title"], [1, "text"], [1, "Third-Title"]], template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Terms Of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mdb-card-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please read these ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " carefully before start using BaiGanio website operated by (BG) Team. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mdb-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mdb-card-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mdb-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mdb-card-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "If you have any questions about these Terms, please contact us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#title[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  text-align: center;\n  font-weight: bold;\n}\n\n#Second-Title[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  text-align: center;\n}\n\n.Third-Title[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  text-align: left;\n  margin: 2%;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  text-align: justify;\n  margin: 2%;\n}\n\n@media only screen and (max-width: 736px) {\n  #title[_ngcontent-%COMP%] {\n    font-size: 35px;\n    text-align: center;\n    font-weight: bold;\n    padding: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Rlcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNHO0lBQ0ssZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VBRU47QUFDRiIsImZpbGUiOiJ0ZXJtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZXtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyBwYWRkaW5nOiAyJTtcbn1cbiNTZWNvbmQtVGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gbWFyZ2luOiAyJTtcbn1cbi5UaGlyZC1UaXRsZXtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAyJTtcbn1cbi50ZXh0e1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW46IDIlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gICAjdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms',
                templateUrl: './terms.component.html',
                styleUrls: ['./terms.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "sz9a":
/*!**************************************************************************!*\
  !*** ./src/app/@shared/components/charts/doughnut/doughnut.component.ts ***!
  \**************************************************************************/
/*! exports provided: DoughnutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutComponent", function() { return DoughnutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DoughnutComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://localhost:44344/api/fake/Chart/';
        this.Player = [];
        this.Run = [];
    }
    ngOnInit() {
        this.httpClient.get(this.url).subscribe((result) => {
            result.forEach(x => {
                this.Player.push(x.playerName);
                this.Run.push(x.run);
            });
            this.doughnutchart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('canvas', {
                type: 'doughnut',
                data: {
                    labels: this.Player,
                    datasets: [
                        {
                            data: this.Run,
                            borderColor: '#3cba9f',
                            backgroundColor: [
                                '#3cb371',
                                '#0000FF',
                                '#9966FF',
                                '#4C4CFF',
                                '#00FFFF',
                                '#f990a7',
                                '#aad2ed',
                                '#FF00FF',
                                'Blue',
                                'Red',
                                'Blue'
                            ],
                            fill: true
                        }
                    ]
                },
                options: {
                    legend: {
                        display: true
                    },
                    scales: {
                        xAxes: [{
                                display: false
                            }],
                        yAxes: [{
                                display: true
                            }],
                    }
                }
            });
        });
    }
}
DoughnutComponent.ɵfac = function DoughnutComponent_Factory(t) { return new (t || DoughnutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DoughnutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoughnutComponent, selectors: [["app-doughnut"]], decls: 2, vars: 0, consts: [[1, "chart-container", 2, "position", "relative", "width", "30vw"], ["id", "canvas"]], template: function DoughnutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoughnutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doughnut',
                templateUrl: './doughnut.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "t/G1":
/*!*****************************************************************!*\
  !*** ./src/app/@shared/interfaces/checklist-database.module.ts ***!
  \*****************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



/**
 * Node for to-do item
 */
class TodoItemNode {
}
/** Flat to-do item node with expandable and level information */
class TodoItemFlatNode {
}
/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {
    Questions: {
        Answers: [],
        Options: []
    }
    //Test_Creation: {  
    //   Type_Of_Test : {
    //     Unknown:null,
    //     Intermediate1:null,
    //     Intermediate2:null,
    //     Intermediate1Workbench:null,
    //     Intermediate2Workbench:null,
    //     Official:null
    //   },
    //   Questions:{
    //     Answers: []
    //   }
    // }
    // Reminders: [
    //   'Cook dinner',
    //   'Read the Material Design spec',
    //   'Upgrade Application to Angular'
    // ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
class ChecklistDatabase {
    constructor() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.initialize();
    }
    get data() { return this.dataChange.value; }
    initialize() {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        const data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            const value = obj[key];
            const node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
    /** Add an item to to-do list */
    insertItem(parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    }
    updateItem(node, name) {
        node.item = name + 'm100';
        this.dataChange.next(this.data);
    }
}
ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
ChecklistDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChecklistDatabase, factory: ChecklistDatabase.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChecklistDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "v5F5":
/*!**********************************************!*\
  !*** ./src/app/@services/student.service.ts ***!
  \**********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend.service */ "KurF");



class StudentService {
    constructor(backendService) {
        this.backendService = backendService;
    }
    letMeIn(data) {
        return this.backendService.backendRequest('post', 'Students/LetMeIn', data, true);
    }
    getStudentLogins() {
        return this.backendService.backendRequest('get', 'Students/GetStudentLogins', null, true);
    }
    getStudentProgresses() {
        return this.backendService.backendRequest('get', 'Students/GetStudentProgresses', null, true);
    }
    getStudent() {
        return this.backendService.backendRequest('get', 'Students/GetByUserId', null, true);
    }
    getCoursesAndScores() {
        return this.backendService.backendRequest('get', 'Students/GetCoursesAndScores', null, true);
    }
    updateStudent(data) {
        return this.backendService.backendRequest('post', 'Students/Update', data, true);
    }
    enroll4Course(data) {
        return this.backendService.backendRequest('post', 'Students/Enroll4Course', data, true);
    }
    getChartData() {
        return this.backendService.backendRequest('get', 'Fake/Chart');
    }
}
StudentService.ɵfac = function StudentService_Factory(t) { return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"])); };
StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentService, factory: StudentService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@pages/blog/blog.component */ "O8jQ");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@pages/home/home.component */ "JBG6");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@pages/login/login.component */ "TtV/");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@pages/register/register.component */ "S88O");
/* harmony import */ var _shared_pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@shared/pages/access-denied/access-denied.component */ "Q/1L");
/* harmony import */ var _shared_pages_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@shared/pages/error/error.component */ "WjTl");
/* harmony import */ var _shared_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@shared/pages/not-found/not-found.component */ "kgrD");
/* harmony import */ var _shared_pages_server_alert_server_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./@shared/pages/server-alert/server-alert.component */ "xm7+");












const routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'blog',
        component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'subscriptions',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./@modules/subscriptions/subscriptions.module */ "ZzTO")).then(m => m.SubscriptionsModule)
    },
    {
        path: 'courses',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./@modules/courses/courses.module */ "OxV1")).then(m => m.CoursesModule)
    },
    {
        path: 'server-alert',
        component: _shared_pages_server_alert_server_alert_component__WEBPACK_IMPORTED_MODULE_9__["ServerAlertComponent"]
    },
    {
        path: 'error',
        component: _shared_pages_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]
    },
    {
        path: '403',
        component: _shared_pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_6__["AccessDeniedComponent"]
    },
    {
        path: '**',
        component: _shared_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vzt6":
/*!**********************************************!*\
  !*** ./src/app/@services/teacher.service.ts ***!
  \**********************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend.service */ "KurF");



class TeacherService {
    constructor(backendService) {
        this.backendService = backendService;
    }
    getTeachers() {
        return this.backendService.backendRequest('get', 'Teachers', null, true);
    }
    getTeacherById(teacherId) {
        return this.backendService.backendRequest('get', 'Teachers/' + teacherId);
    }
    addTeacher2Course(data) {
        return this.backendService.backendRequest('post', 'Teachers/AddTeacherCourse', data, true);
    }
    voteForTeacher(data) {
        return this.backendService.backendRequest('post', 'Students/Vote4Teacher', data, true);
    }
}
TeacherService.ɵfac = function TeacherService_Factory(t) { return new (t || TeacherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"])); };
TeacherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeacherService, factory: TeacherService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "w/ci":
/*!**************************************************!*\
  !*** ./src/app/@core/angular-material.module.ts ***!
  \**************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");











































class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xm7+":
/*!**********************************************************************!*\
  !*** ./src/app/@shared/pages/server-alert/server-alert.component.ts ***!
  \**********************************************************************/
/*! exports provided: ServerAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerAlertComponent", function() { return ServerAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ServerAlertComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServerAlertComponent.ɵfac = function ServerAlertComponent_Factory(t) { return new (t || ServerAlertComponent)(); };
ServerAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerAlertComponent, selectors: [["app-server-alert"]], decls: 11, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-xs-12", "col-center", "text-center"], ["id", "errorMessage"], ["mat-button", "", "color", "primary", "routerLink", "/home"]], template: function ServerAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Ooops... ERROR 503! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Our Servers are temporary unavailable!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Back To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".content[_ngcontent-%COMP%] {\n  font-family: \"Alsandra\";\n  text-align: center;\n}\n\n#errorMessage[_ngcontent-%COMP%] {\n  -webkit-text-stroke-width: 1.5px;\n  -webkit-text-stroke-color: black;\n  color: white;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\n\n@media only screen and (max-width: 797px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.6em;\n  }\n}\n\n@media only screen and (max-width: 591px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.6em;\n  }\n}\n\n@media only screen and (max-width: 451px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlcnZlci1hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBREE7RUFDSTtJQUNJLGdCQUFBO0VBSU47QUFDRjs7QUFGQTtFQUNJO0lBQ0ksZ0JBQUE7RUFJTjtBQUNGOztBQUZBO0VBQ0k7SUFDSSxjQUFBO0VBSU47QUFDRiIsImZpbGUiOiJzZXJ2ZXItYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBmb250LWZhbWlseTogJ0Fsc2FuZHJhJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jZXJyb3JNZXNzYWdlIHtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxLjVweDtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5oMSB7XG4gICAgZm9udC1zaXplOiA0ZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5N3B4KSB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDMuNmVtO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkxcHgpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi42ZW07XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTFweCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server-alert',
                template: `
  <div class="content">
  <div class="row">
    <div class="col-xs-12 col-center text-center">
      <h1>
        Ooops... ERROR 503!
        <br>
        <span id="errorMessage">Our Servers are temporary unavailable!</span> 
        </h1>
        <br>
        <button mat-button color="primary" routerLink='/home'> Back To Home</button>
      </div>
    </div>
  </div>
  `,
                styleUrls: ['./server-alert.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "y5DD":
/*!**************************************************************************!*\
  !*** ./src/app/@shared/components/charts/barchart/barchart.component.ts ***!
  \**************************************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BarchartComponent {
    constructor(http) {
        this.http = http;
        this.url = 'https://localhost:44344/api/fake/Chart/';
        this.Player = [];
        this.Run = [];
    }
    ngOnInit() {
        this.http.get(this.url).subscribe((result) => {
            result.forEach(x => {
                this.Player.push(x.playerName);
                this.Run.push(x.run);
            });
            this.barchart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('canvas', {
                type: 'bar',
                data: {
                    labels: this.Player,
                    datasets: [
                        {
                            data: this.Run,
                            borderColor: '#3cba9f',
                            backgroundColor: [
                                '#3cb371',
                                '#0000FF',
                                '#9966FF',
                                '#4C4CFF',
                                '#00FFFF',
                                '#f990a7',
                                '#aad2ed',
                                '#FF00FF',
                                'Blue',
                                'Red',
                                'Blue'
                            ],
                            fill: true
                        }
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                                display: true
                            }],
                        yAxes: [{
                                display: true
                            }],
                    }
                }
            });
        });
    }
}
BarchartComponent.ɵfac = function BarchartComponent_Factory(t) { return new (t || BarchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BarchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarchartComponent, selectors: [["app-barchart"]], decls: 4, vars: 0, consts: [[1, "chart-container", 2, "position", "relative", "width", "50vw"], ["id", "canvas"]], template: function BarchartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarchartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-barchart',
                templateUrl: './barchart.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map