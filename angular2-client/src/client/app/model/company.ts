import {Employee} from './employee';
import {CompanyObjective} from './company-objective';

export interface Company {
  id: number;
  name: string;
  employees: Employee[];
  companyObjectives: CompanyObjective[];
}
