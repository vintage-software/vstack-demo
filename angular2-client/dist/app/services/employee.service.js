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
var EmployeeService = (function (_super) {
    __extends(EmployeeService, _super);
    function EmployeeService(http) {
        _super.call(this, 'employees', http);
    }
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}(base_service_1.BaseService));
exports.EmployeeService = EmployeeService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9lbXBsb3llZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFFbkMsNkJBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFJbkQ7SUFBcUMsbUNBQXFCO0lBQ3hELHlCQUFZLElBQVU7UUFDcEIsa0JBQU0sV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFKSDtRQUFDLGlCQUFVLEVBQUU7O3VCQUFBO0lBS2Isc0JBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKb0MsMEJBQVcsR0FJL0M7QUFKWSx1QkFBZSxrQkFJM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvZW1wbG95ZWUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG5pbXBvcnQge0Jhc2VTZXJ2aWNlfSBmcm9tICcuL2dlbmVyYWwvYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSAnLi8uLi9tb2RlbC9lbXBsb3llZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZTxFbXBsb3llZT4ge1xyXG4gIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcclxuICAgIHN1cGVyKCdlbXBsb3llZXMnLCBodHRwKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
