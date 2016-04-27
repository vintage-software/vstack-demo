import {Injectable} from 'angular2/core';
import {BaseGraphService, ServiceConfig, Relation} from 'vstack-graph';

import {Company} from './../../model/company';
import {Employee} from './../../model/employee';
import {CompanyService} from './../company.service';
import {EmployeeService} from './../employee.service';
import {Graph} from './graph';

@Injectable()
export class GraphService extends BaseGraphService<Graph> {
  constructor(public companyService: CompanyService, public employeeService: EmployeeService) {
    super([
      new ServiceConfig<Company, Graph>(
        companyService, (graph, collection) => graph.companies = collection, [
          new Relation('employees', employeeService, 'companyId', true)
        ]),
      new ServiceConfig<Employee, Graph>(
        employeeService, (graph, collection) => graph.employees = collection, [
          new Relation('company', companyService, 'companyId', false)
        ])
    ]);
  }
}
