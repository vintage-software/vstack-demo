import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {BaseService} from './general/base.service';
import {Employee} from './../model/employee';

@Injectable()
export class EmployeeService extends BaseService<Employee> {
  constructor(http: Http) {
    super('employees', http);
  }
}
