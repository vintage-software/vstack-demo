"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('angular2/http');
var base_service_1 = require('./general/base.service');
var CompanyService = (function (_super) {
    __extends(CompanyService, _super);
    function CompanyService(http) {
        _super.call(this, 'companies', http);
    }
    CompanyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CompanyService);
    return CompanyService;
}(base_service_1.BaseService));
exports.CompanyService = CompanyService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyw2QkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUluRDtJQUFvQyxrQ0FBb0I7SUFDdEQsd0JBQVksSUFBVTtRQUNwQixrQkFBTSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUpIO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFLYixxQkFBQztBQUFELENBSkEsQUFJQyxDQUptQywwQkFBVyxHQUk5QztBQUpZLHNCQUFjLGlCQUkxQixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHtCYXNlU2VydmljZX0gZnJvbSAnLi9nZW5lcmFsL2Jhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7Q29tcGFueX0gZnJvbSAnLi8uLi9tb2RlbC9jb21wYW55JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbXBhbnlTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2U8Q29tcGFueT4ge1xyXG4gIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcclxuICAgIHN1cGVyKCdjb21wYW5pZXMnLCBodHRwKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
