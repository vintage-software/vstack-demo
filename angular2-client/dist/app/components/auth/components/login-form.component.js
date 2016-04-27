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
var common_1 = require('angular2/common');
require('rxjs/add/operator/skip');
var LoginForm = (function () {
    function LoginForm(fb) {
        this.onSubmit = new core_1.EventEmitter();
        this.form = fb.group({
            'email': ['', common_1.Validators.required],
            'password': ['', common_1.Validators.required],
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    LoginForm.prototype.submitted = function () {
        if (this.form.valid) {
            this.onSubmit.emit([this.email.value, this.password.value]);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LoginForm.prototype, "onSubmit", void 0);
    LoginForm = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: '/app/components/auth/components/login-form.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], LoginForm);
    return LoginForm;
}());
exports.LoginForm = LoginForm;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F1dGgvY29tcG9uZW50cy9sb2dpbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdELGVBQWUsQ0FBQyxDQUFBO0FBQ2hFLHVCQUF1RSxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pGLFFBQU8sd0JBQXdCLENBQUMsQ0FBQTtBQU1oQztJQU9FLG1CQUFZLEVBQWU7UUFOakIsYUFBUSxHQUFtQyxJQUFJLG1CQUFZLEVBQW9CLENBQUM7UUFPeEYsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25CLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7SUFDSCxDQUFDO0lBcEJEO1FBQUMsYUFBTSxFQUFFOzsrQ0FBQTtJQUxYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwyREFBMkQ7U0FDekUsQ0FBQzs7aUJBQUE7SUF1QkYsZ0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLGlCQUFTLFlBc0JyQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2F1dGgvY29tcG9uZW50cy9sb2dpbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9za2lwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbG9naW4tZm9ybScsXHJcbiAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvYXV0aC9jb21wb25lbnRzL2xvZ2luLWZvcm0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkZvcm0ge1xyXG4gIEBPdXRwdXQoKSBvblN1Ym1pdDogRXZlbnRFbWl0dGVyPFtzdHJpbmcsIHN0cmluZ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxbc3RyaW5nLCBzdHJpbmddPigpO1xyXG5cclxuICBmb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgZW1haWw6IEFic3RyYWN0Q29udHJvbDtcclxuICBwYXNzd29yZDogQWJzdHJhY3RDb250cm9sO1xyXG5cclxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgJ2VtYWlsJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgJ3Bhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZW1haWwgPSB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ107XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0dGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICB0aGlzLm9uU3VibWl0LmVtaXQoW3RoaXMuZW1haWwudmFsdWUsIHRoaXMucGFzc3dvcmQudmFsdWVdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
