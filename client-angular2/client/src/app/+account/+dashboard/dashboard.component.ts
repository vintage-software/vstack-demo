import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {ObjectivesComponent} from './shared/objectives/objectives.component';
import {EditObjectiveComponent} from './shared/edit-objective/edit-objective.component';
import {Employee} from './../../shared/model/employee';
import {Objective} from './../../shared/model/objective';
import {AuthService} from './../../shared/services/auth.service';
import {GraphService} from './../../shared/services/general/graph.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [ObjectivesComponent, EditObjectiveComponent]
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
