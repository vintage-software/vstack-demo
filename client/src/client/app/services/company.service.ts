import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {BaseService} from './general/base.service';
import {Company} from './../model/company';

@Injectable()
export class CompanyService extends BaseService<Company> {
  constructor(http: Http) {
    super('companies', http);
  }
}
