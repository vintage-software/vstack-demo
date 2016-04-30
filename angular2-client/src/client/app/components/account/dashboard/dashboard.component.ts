import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import {Objectives} from './components/objectives.component';
import {EditObjective} from './components/edit-objective.component';
import {Employee} from './../../../model/employee';
import {Objective} from './../../../model/objective';
import {AuthService} from './../../../services/auth.service';
import {GraphService} from './../../../services/general/graph.service';

@Component({
  selector: 'dashboard-component',
  templateUrl: '/app/components/account/dashboard/dashboard.component.html',
  directives: [Objectives, EditObjective]
})
export class DashboardComponent implements OnInit {
  employee$: Observable<Employee>;
  selectedObjective: Objective;
  private _subscriber: Subscription;

  constructor(private _authService: AuthService, private _graphService: GraphService) {
    this.employee$ = this._authService.loggedInEmployee$;
  }

  ngOnInit() {
    this._subscriber = this._authService.loggedInEmployeeId$.subscribe(employeeId => {
      if (employeeId) {
        this._graphService.employeeService
          .get(employeeId)
          .toList()
          .subscribe(employee => {
            this._graphService.companyService
              .get(employee.companyId)
              .withQueryString('include=companyObjectives.objectiveAssociations.departmentObjective')
              .toList();
          });
      }
    });
  }

  ngOnDestroy() {
    this._subscriber.unsubscribe();
  }

  onObjectiveSubmit(objective: Objective) {
    if ((<any>objective).departmentId) {
      this._graphService.departmentObjectiveService.update(objective);
    } else {
      this._graphService.companyObjectiveService.update(objective);
    }
  }

  onObjectiveSelect(objective: Objective) {
    this.selectedObjective = objective;
  }
}
