import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Company} from './../model/company';
import {BaseService} from './general/base.service';

@Injectable()
export class CompanyService extends BaseService<Company> {
  constructor(http: Http) { super('companies', http); }
}
