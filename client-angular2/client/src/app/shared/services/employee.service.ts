import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Employee} from './../model/employee';
import {BaseService} from './general/base.service';

@Injectable()
export class EmployeeService extends BaseService<Employee> {
  constructor(http: Http) { super('employees', http); }
}
