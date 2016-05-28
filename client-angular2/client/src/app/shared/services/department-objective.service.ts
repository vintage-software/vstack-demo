import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {DepartmentObjective} from './../model/department-objective';
import {BaseService} from './general/base.service';

@Injectable()
export class DepartmentObjectiveService extends BaseService<DepartmentObjective> {
  constructor(http: Http) { super('department-objectives', http); }
}
