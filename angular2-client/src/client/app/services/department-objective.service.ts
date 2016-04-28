import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {BaseService} from './general/base.service';
import {DepartmentObjective} from './../model/department-objective';

@Injectable()
export class DepartmentObjectiveService extends BaseService<DepartmentObjective> {
  constructor(http: Http) {
    super('department-objectives', http);
  }
}
