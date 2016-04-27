"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var home_component_1 = require('./home.component');
var about_component_1 = require('./about.component');
var auth_component_1 = require('./../auth/auth.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_1.RouteConfig([
            { path: '/', component: home_component_1.HomeComponent, as: 'Home' },
            { path: '/about', component: about_component_1.AboutComponent, as: 'About' },
            { path: '/login', component: auth_component_1.AuthComponent, as: 'Auth' },
        ]),
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/app/components/general/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2dlbmVyYWwvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRS9ELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELCtCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBWXZEO0lBQUE7SUFDQSxDQUFDO0lBWEQ7UUFBQyxvQkFBVyxDQUFDO1lBQ1QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7WUFDbkQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7WUFDMUQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7U0FDM0QsQ0FBQztRQUNELGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1NBQ2xDLENBQUM7O29CQUFBO0lBRUYsbUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLG9CQUFZLGVBQ3hCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZ2VuZXJhbC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4vYWJvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtBdXRoQ29tcG9uZW50fSBmcm9tICcuLy4uL2F1dGgvYXV0aC5jb21wb25lbnQnO1xyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIGFzOiAnSG9tZScgfSxcclxuICAgIHsgcGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQsIGFzOiAnQWJvdXQnIH0sXHJcbiAgICB7IHBhdGg6ICcvbG9naW4nLCBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQsIGFzOiAnQXV0aCcgfSxcclxuXSlcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
