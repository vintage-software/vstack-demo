import {Injectable} from 'angular2/core';
import {BaseGraphService, ServiceConfig, Relation} from 'vstack-graph';

import {Company} from './../../model/company';
import {Employee} from './../../model/employee';
import {CompanyObjective} from './../../model/company-objective';
import {DepartmentObjective} from './../../model/department-objective';
import {ObjectiveAssociation} from './../../model/objective-association';
import {CompanyService} from './../company.service';
import {EmployeeService} from './../employee.service';
import {CompanyObjectiveService} from './../company-objective.service';
import {DepartmentObjectiveService} from './../department-objective.service';
import {ObjectiveAssociationService} from './../objective-association.service';
import {Graph} from './graph';

@Injectable()
export class GraphService extends BaseGraphService<Graph> {
  constructor(
    public companyService: CompanyService,
    public employeeService: EmployeeService,
    public companyObjectiveService: CompanyObjectiveService,
    public departmentObjectiveService: DepartmentObjectiveService,
    public objectiveAssociationService: ObjectiveAssociationService) {
    super([
      new ServiceConfig<Company, Graph>(
        companyService, (graph, collection) => graph.companies = collection, [
          new Relation('employees', employeeService, 'companyId', true)
        ]),
      new ServiceConfig<Employee, Graph>(
        employeeService, (graph, collection) => graph.employees = collection, [
          new Relation('company', companyService, 'companyId', false)
        ]),
      new ServiceConfig<CompanyObjective, Graph>(
        companyObjectiveService, (graph, collection) => graph.companyObjectives = collection, [
          new Relation('objectiveAssociations', objectiveAssociationService, 'companyObjectiveId', true)
        ]),
      new ServiceConfig<DepartmentObjective, Graph>(
        departmentObjectiveService, (graph, collection) => graph.departmentObjectives = collection, [
          new Relation('objectiveAssociations', objectiveAssociationService, 'departmentObjectiveId', true)
        ]),
      new ServiceConfig<ObjectiveAssociation, Graph>(
        objectiveAssociationService, (graph, collection) => graph.objectiveAssociations = collection, [
          new Relation('departmentObjective', departmentObjectiveService, 'departmentObjectiveId', false),
          new Relation('companyObjective', companyObjectiveService, 'companyObjectiveId', false)
        ])
    ]);
  }
}
