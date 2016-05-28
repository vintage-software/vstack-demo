import {CompanyObjective} from './company-objective';
import {Employee} from './employee';

export interface Company {
  id: number;
  name: string;
  employees: Employee[];
  companyObjectives: CompanyObjective[];
}
