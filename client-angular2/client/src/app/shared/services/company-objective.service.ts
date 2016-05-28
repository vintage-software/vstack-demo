import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {CompanyObjective} from './../model/company-objective';
import {BaseService} from './general/base.service';

@Injectable()
export class CompanyObjectiveService extends BaseService<CompanyObjective> {
  constructor(http: Http) { super('company-objectives', http); }
}
