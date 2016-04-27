import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/subject/BehaviorSubject';

import {Employee} from './../model/employee';
import {GraphService} from './general/graph.service';
import 'rxjs/add/operator/combineLatest';

@Injectable()
export class AuthService {
  loggedInEmployee$: Observable<Employee>;
  private _loggedInEmployeeId$: BehaviorSubject<number>;

  constructor(private _graphService: GraphService) {
    let currentId = this._getAuthenticatedEmployeeId();
    if (currentId) {
      this._graphService.companyService.get(currentId).toList();
    }

    this._loggedInEmployeeId$ = new BehaviorSubject<number>(currentId);
    this.loggedInEmployee$ = this._loggedInEmployeeId$.combineLatest(this._graphService.graph$)
      .map(x => {
        let id = x[0];
        let graph = x[1];
        return graph.employees.find(i => i.id === id);
      });
  }

  public authenticate(email: string, password: string): Observable<Employee> {
    let result = this._graphService.employeeService.getAll().toList()
      .map(employees => employees.find(i => i.emailAddress === email
        && ((i.companyId === 1 && password === 'GoodGuys') || (i.companyId === 2 && password === 'BadGuys'))));

    result
      .do(employee => {
        let id = employee && employee.id;
        window.sessionStorage.setItem('employeeId', id.toString());
        this._loggedInEmployeeId$.next(id);
      })
      .subscribe();

    return result;
  }

  private _getAuthenticatedEmployeeId() {
    return Number(window.sessionStorage.getItem('employeeId'));
  }
}
