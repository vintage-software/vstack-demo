import {GraphService as BaseGraphService, ServiceConfig, Mapping} from 'vstack-graph';

import {Company} from './../../model/company';
import {Employee} from './../../model/employee';
import {CompanyService} from './../company.service';
import {EmployeeService} from './../employee.service';
import {Graph} from './graph';

export class GraphService extends BaseGraphService<Graph> {
  constructor(public companyService: CompanyService, public employeeService: EmployeeService) {
    super([
      new ServiceConfig<Company, Graph>(
        companyService, (graph, collection) => graph.companies = collection, [
          new Mapping('employees', employeeService, 'companyId', true)
        ]),
      new ServiceConfig<Employee, Graph>(
        employeeService, (graph, collection) => graph.employees = collection, [
          new Mapping('company', companyService, 'companyId', false)
        ])
    ]);
  }
}
