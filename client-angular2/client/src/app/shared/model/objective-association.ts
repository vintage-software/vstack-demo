import {CompanyObjective} from './company-objective';
import {DepartmentObjective} from './department-objective';

export interface ObjectiveAssociation {
  id: number;
  companyId: number;
  companyObjectiveId: number;
  departmentObjectiveId: number;
  companyObjective: CompanyObjective;
  departmentObjective: DepartmentObjective;
}
