import {Company} from './../../model/company';
import {CompanyObjective} from './../../model/company-objective';
import {DepartmentObjective} from './../../model/department-objective';
import {Employee} from './../../model/employee';
import {ObjectiveAssociation} from './../../model/objective-association';

export interface Graph {
  companies: Company[];
  employees: Employee[];
  companyObjectives: CompanyObjective[];
  departmentObjectives: DepartmentObjective[];
  objectiveAssociations: ObjectiveAssociation[];
}
