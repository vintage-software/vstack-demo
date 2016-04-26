import {Employee} from './../../model/employee';
import {Company} from './../../model/company';

export interface Graph {
  companies: Company[];
  employees: Employee[];
}
