import {Employee} from './employee';

export interface Company {
  id: number;
  name: string;
  employees: Employee[];
}
