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
var vstack_graph_1 = require('vstack-graph');
var company_service_1 = require('./../company.service');
var employee_service_1 = require('./../employee.service');
var GraphService = (function (_super) {
    __extends(GraphService, _super);
    function GraphService(companyService, employeeService) {
        _super.call(this, [
            new vstack_graph_1.ServiceConfig(companyService, function (graph, collection) { return graph.companies = collection; }, [
                new vstack_graph_1.Relation('employees', employeeService, 'companyId', true)
            ]),
            new vstack_graph_1.ServiceConfig(employeeService, function (graph, collection) { return graph.employees = collection; }, [
                new vstack_graph_1.Relation('company', companyService, 'companyId', false)
            ])
        ]);
        this.companyService = companyService;
        this.employeeService = employeeService;
    }
    GraphService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [company_service_1.CompanyService, employee_service_1.EmployeeService])
    ], GraphService);
    return GraphService;
}(vstack_graph_1.BaseGraphService));
exports.GraphService = GraphService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9nZW5lcmFsL2dyYXBoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDZCQUF3RCxjQUFjLENBQUMsQ0FBQTtBQUl2RSxnQ0FBNkIsc0JBQXNCLENBQUMsQ0FBQTtBQUNwRCxpQ0FBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQUl0RDtJQUFrQyxnQ0FBdUI7SUFDdkQsc0JBQW1CLGNBQThCLEVBQVMsZUFBZ0M7UUFDeEYsa0JBQU07WUFDSixJQUFJLDRCQUFhLENBQ2YsY0FBYyxFQUFFLFVBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxFQUE1QixDQUE0QixFQUFFO2dCQUNuRSxJQUFJLHVCQUFRLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDO2FBQzlELENBQUM7WUFDSixJQUFJLDRCQUFhLENBQ2YsZUFBZSxFQUFFLFVBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxFQUE1QixDQUE0QixFQUFFO2dCQUNwRSxJQUFJLHVCQUFRLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDO2FBQzVELENBQUM7U0FDTCxDQUFDLENBQUM7UUFWYyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFXMUYsQ0FBQztJQWJIO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFjYixtQkFBQztBQUFELENBYkEsQUFhQyxDQWJpQywrQkFBZ0IsR0FhakQ7QUFiWSxvQkFBWSxlQWF4QixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9nZW5lcmFsL2dyYXBoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0Jhc2VHcmFwaFNlcnZpY2UsIFNlcnZpY2VDb25maWcsIFJlbGF0aW9ufSBmcm9tICd2c3RhY2stZ3JhcGgnO1xyXG5cclxuaW1wb3J0IHtDb21wYW55fSBmcm9tICcuLy4uLy4uL21vZGVsL2NvbXBhbnknO1xyXG5pbXBvcnQge0VtcGxveWVlfSBmcm9tICcuLy4uLy4uL21vZGVsL2VtcGxveWVlJztcclxuaW1wb3J0IHtDb21wYW55U2VydmljZX0gZnJvbSAnLi8uLi9jb21wYW55LnNlcnZpY2UnO1xyXG5pbXBvcnQge0VtcGxveWVlU2VydmljZX0gZnJvbSAnLi8uLi9lbXBsb3llZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtHcmFwaH0gZnJvbSAnLi9ncmFwaCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmFwaFNlcnZpY2UgZXh0ZW5kcyBCYXNlR3JhcGhTZXJ2aWNlPEdyYXBoPiB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbXBhbnlTZXJ2aWNlOiBDb21wYW55U2VydmljZSwgcHVibGljIGVtcGxveWVlU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihbXHJcbiAgICAgIG5ldyBTZXJ2aWNlQ29uZmlnPENvbXBhbnksIEdyYXBoPihcclxuICAgICAgICBjb21wYW55U2VydmljZSwgKGdyYXBoLCBjb2xsZWN0aW9uKSA9PiBncmFwaC5jb21wYW5pZXMgPSBjb2xsZWN0aW9uLCBbXHJcbiAgICAgICAgICBuZXcgUmVsYXRpb24oJ2VtcGxveWVlcycsIGVtcGxveWVlU2VydmljZSwgJ2NvbXBhbnlJZCcsIHRydWUpXHJcbiAgICAgICAgXSksXHJcbiAgICAgIG5ldyBTZXJ2aWNlQ29uZmlnPEVtcGxveWVlLCBHcmFwaD4oXHJcbiAgICAgICAgZW1wbG95ZWVTZXJ2aWNlLCAoZ3JhcGgsIGNvbGxlY3Rpb24pID0+IGdyYXBoLmVtcGxveWVlcyA9IGNvbGxlY3Rpb24sIFtcclxuICAgICAgICAgIG5ldyBSZWxhdGlvbignY29tcGFueScsIGNvbXBhbnlTZXJ2aWNlLCAnY29tcGFueUlkJywgZmFsc2UpXHJcbiAgICAgICAgXSlcclxuICAgIF0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
