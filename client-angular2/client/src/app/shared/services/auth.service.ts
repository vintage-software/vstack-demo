import 'rxjs/add/operator/combineLatest';

import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import {Employee} from './../model/employee';
import {GraphService} from './general/graph.service';

@Injectable()
export class AuthService {
  loggedInEmployee$: Observable<Employee>;
  loggedInEmployeeId$: BehaviorSubject<number>;

  constructor(private _graphService: GraphService) {
    let currentId = this._getAuthenticatedEmployeeId();
    if (currentId) {
      this._graphService.employeeService.get(currentId).toList();
    }

    this.loggedInEmployeeId$ = new BehaviorSubject<number>(currentId);
    this.loggedInEmployee$ =
        this.loggedInEmployeeId$.combineLatest(this._graphService.graph$).map(x => {
          let id = x[0];
          let graph = x[1];
          return graph.employees.find(i => i.id === id);
        });
  }

  public authenticate(email: string, password: string): Observable<Employee> {
    let result = this._graphService.employeeService.getAll().toList().map(
        employees => employees.find(
            i => i.emailAddress === email &&
            ((i.companyId === 1 && password === 'GoodGuys') || (i.companyId === 2 && password === 'BadGuys'))));

    result
        .do(employee => {
          let id = employee && employee.id;
          window.sessionStorage.setItem('employeeId', (id || '').toString());
          this.loggedInEmployeeId$.next(id);
        })
        .subscribe();

    return result;
  }

  private _getAuthenticatedEmployeeId() {
    return Number(window.sessionStorage.getItem('employeeId'));
  }
}
