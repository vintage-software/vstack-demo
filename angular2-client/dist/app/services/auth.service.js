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
var BehaviorSubject_1 = require('rxjs/subject/BehaviorSubject');
var graph_service_1 = require('./general/graph.service');
require('rxjs/add/operator/combineLatest');
var AuthService = (function () {
    function AuthService(_graphService) {
        this._graphService = _graphService;
        var currentId = this._getAuthenticatedEmployeeId();
        if (currentId) {
            this._graphService.companyService.get(currentId).toList();
        }
        this._loggedInEmployeeId$ = new BehaviorSubject_1.BehaviorSubject(currentId);
        this.loggedInEmployee$ = this._loggedInEmployeeId$.combineLatest(this._graphService.graph$)
            .map(function (x) {
            var id = x[0];
            var graph = x[1];
            return graph.employees.find(function (i) { return i.id === id; });
        });
    }
    AuthService.prototype.authenticate = function (email, password) {
        var _this = this;
        var result = this._graphService.employeeService.getAll().toList()
            .map(function (employees) { return employees.find(function (i) { return i.emailAddress === email
            && ((i.companyId === 1 && password === 'GoodGuys') || (i.companyId === 2 && password === 'BadGuys')); }); });
        result
            .do(function (employee) {
            var id = employee && employee.id;
            window.sessionStorage.setItem('employeeId', id.toString());
            _this._loggedInEmployeeId$.next(id);
        })
            .subscribe();
        return result;
    };
    AuthService.prototype._getAuthenticatedEmployeeId = function () {
        return Number(window.sessionStorage.getItem('employeeId'));
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [graph_service_1.GraphService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QyxnQ0FBOEIsOEJBQThCLENBQUMsQ0FBQTtBQUc3RCw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCxRQUFPLGlDQUFpQyxDQUFDLENBQUE7QUFHekM7SUFJRSxxQkFBb0IsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDN0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDbkQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1RCxDQUFDO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksaUNBQWUsQ0FBUyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzthQUN4RixHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ0osSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLEtBQWEsRUFBRSxRQUFnQjtRQUFuRCxpQkFjQztRQWJDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRTthQUM5RCxHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFlBQVksS0FBSyxLQUFLO2VBQ3pELENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLENBQUMsSUFBSSxRQUFRLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLENBQUMsSUFBSSxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsRUFEaEUsQ0FDZ0UsQ0FBQyxFQURyRixDQUNxRixDQUFDLENBQUM7UUFFM0csTUFBTTthQUNILEVBQUUsQ0FBQyxVQUFBLFFBQVE7WUFDVixJQUFJLEVBQUUsR0FBRyxRQUFRLElBQUksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNqQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDM0QsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7YUFDRCxTQUFTLEVBQUUsQ0FBQztRQUVmLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLGlEQUEyQixHQUFuQztRQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBdENIO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUF1Q2Isa0JBQUM7QUFBRCxDQXRDQSxBQXNDQyxJQUFBO0FBdENZLG1CQUFXLGNBc0N2QixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL3N1YmplY3QvQmVoYXZpb3JTdWJqZWN0JztcclxuXHJcbmltcG9ydCB7RW1wbG95ZWV9IGZyb20gJy4vLi4vbW9kZWwvZW1wbG95ZWUnO1xyXG5pbXBvcnQge0dyYXBoU2VydmljZX0gZnJvbSAnLi9nZW5lcmFsL2dyYXBoLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NvbWJpbmVMYXRlc3QnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGxvZ2dlZEluRW1wbG95ZWUkOiBPYnNlcnZhYmxlPEVtcGxveWVlPjtcclxuICBwcml2YXRlIF9sb2dnZWRJbkVtcGxveWVlSWQkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZ3JhcGhTZXJ2aWNlOiBHcmFwaFNlcnZpY2UpIHtcclxuICAgIGxldCBjdXJyZW50SWQgPSB0aGlzLl9nZXRBdXRoZW50aWNhdGVkRW1wbG95ZWVJZCgpO1xyXG4gICAgaWYgKGN1cnJlbnRJZCkge1xyXG4gICAgICB0aGlzLl9ncmFwaFNlcnZpY2UuY29tcGFueVNlcnZpY2UuZ2V0KGN1cnJlbnRJZCkudG9MaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbG9nZ2VkSW5FbXBsb3llZUlkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPihjdXJyZW50SWQpO1xyXG4gICAgdGhpcy5sb2dnZWRJbkVtcGxveWVlJCA9IHRoaXMuX2xvZ2dlZEluRW1wbG95ZWVJZCQuY29tYmluZUxhdGVzdCh0aGlzLl9ncmFwaFNlcnZpY2UuZ3JhcGgkKVxyXG4gICAgICAubWFwKHggPT4ge1xyXG4gICAgICAgIGxldCBpZCA9IHhbMF07XHJcbiAgICAgICAgbGV0IGdyYXBoID0geFsxXTtcclxuICAgICAgICByZXR1cm4gZ3JhcGguZW1wbG95ZWVzLmZpbmQoaSA9PiBpLmlkID09PSBpZCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGF1dGhlbnRpY2F0ZShlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxFbXBsb3llZT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuX2dyYXBoU2VydmljZS5lbXBsb3llZVNlcnZpY2UuZ2V0QWxsKCkudG9MaXN0KClcclxuICAgICAgLm1hcChlbXBsb3llZXMgPT4gZW1wbG95ZWVzLmZpbmQoaSA9PiBpLmVtYWlsQWRkcmVzcyA9PT0gZW1haWxcclxuICAgICAgICAmJiAoKGkuY29tcGFueUlkID09PSAxICYmIHBhc3N3b3JkID09PSAnR29vZEd1eXMnKSB8fCAoaS5jb21wYW55SWQgPT09IDIgJiYgcGFzc3dvcmQgPT09ICdCYWRHdXlzJykpKSk7XHJcblxyXG4gICAgcmVzdWx0XHJcbiAgICAgIC5kbyhlbXBsb3llZSA9PiB7XHJcbiAgICAgICAgbGV0IGlkID0gZW1wbG95ZWUgJiYgZW1wbG95ZWUuaWQ7XHJcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2VtcGxveWVlSWQnLCBpZC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLl9sb2dnZWRJbkVtcGxveWVlSWQkLm5leHQoaWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldEF1dGhlbnRpY2F0ZWRFbXBsb3llZUlkKCkge1xyXG4gICAgcmV0dXJuIE51bWJlcih3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZW1wbG95ZWVJZCcpKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
