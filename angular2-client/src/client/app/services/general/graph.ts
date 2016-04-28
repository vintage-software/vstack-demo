import {Company} from './../../model/company';
import {Employee} from './../../model/employee';
import {CompanyObjective} from './../../model/company-objective';
import {DepartmentObjective} from './../../model/department-objective';
import {ObjectiveAssociation} from './../../model/objective-association';

export interface Graph {
  companies: Company[];
  employees: Employee[];
  companyObjectives: CompanyObjective[];
  departmentObjectives: DepartmentObjective[];
  objectiveAssociations: ObjectiveAssociation[];
}
