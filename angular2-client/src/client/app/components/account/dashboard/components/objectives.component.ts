import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {CompanyObjective} from './../../../../model/company-objective';
import {Objective} from './../../../../model/objective';

@Component({
  selector: 'objectives',
  templateUrl: '/app/components/account/dashboard/components/objectives.component.html'
})
export class Objectives {
  @Input() companyObjectives: CompanyObjective[];
  @Output() onObjectiveSelect: EventEmitter<Objective> = new EventEmitter<Objective>();

  objectiveClicked($event: Event, objective: Objective) {
    this.onObjectiveSelect.emit(objective);
    $event.stopPropagation();
  }
}
