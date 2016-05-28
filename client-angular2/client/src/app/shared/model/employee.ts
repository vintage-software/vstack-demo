import {Company} from './company';

export interface Employee {
  id: number;
  companyId: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  company: Company;
}
