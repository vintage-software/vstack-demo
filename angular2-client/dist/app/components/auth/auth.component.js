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
var login_form_component_1 = require('./components/login-form.component');
var auth_service_1 = require('./../../services/auth.service');
var AuthComponent = (function () {
    function AuthComponent(_authService) {
        this._authService = _authService;
    }
    AuthComponent.prototype.onSubmit = function (values) {
        this._authService.authenticate(values[0], values[1])
            .do(function (i) { return console.log('loggedIn: ', i); });
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'auth-component',
            templateUrl: '/app/components/auth/auth.component.html',
            directives: [login_form_component_1.LoginForm]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQ0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCw2QkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQU81RDtJQUNFLHVCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUM3QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLE1BQXdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkQsRUFBRSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBWkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsMENBQTBDO1lBQ3ZELFVBQVUsRUFBRSxDQUFDLGdDQUFTLENBQUM7U0FDeEIsQ0FBQzs7cUJBQUE7SUFTRixvQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlkscUJBQWEsZ0JBUXpCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4tZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXV0aC1jb21wb25lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW0xvZ2luRm9ybV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQodmFsdWVzOiBbc3RyaW5nLCBzdHJpbmddKSB7XHJcbiAgICB0aGlzLl9hdXRoU2VydmljZS5hdXRoZW50aWNhdGUodmFsdWVzWzBdLCB2YWx1ZXNbMV0pXHJcbiAgICAuZG8oaSA9PiBjb25zb2xlLmxvZygnbG9nZ2VkSW46ICcsIGkpKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
