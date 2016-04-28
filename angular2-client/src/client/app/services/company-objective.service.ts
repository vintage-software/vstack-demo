import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {BaseService} from './general/base.service';
import {CompanyObjective} from './../model/company-objective';

@Injectable()
export class CompanyObjectiveService extends BaseService<CompanyObjective> {
  constructor(http: Http) {
    super('company-objectives', http);
  }
}
