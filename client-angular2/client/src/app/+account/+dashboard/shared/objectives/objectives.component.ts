import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { CompanyObjective } from './../../../../shared/model/company-objective';
import { Objective } from './../../../../shared/model/objective';

@Component({
  moduleId: module.id,
  selector: 'app-objectives',
  templateUrl: 'objectives.component.html',
  styleUrls: ['objectives.component.css']
})
export class ObjectivesComponent implements OnInit {
  @Input() companyObjectives: CompanyObjective[];
  @Output() onObjectiveSelect: EventEmitter<Objective> = new EventEmitter<Objective>();
  
  constructor() { }

  ngOnInit() {
  }
  
  objectiveClicked($event: Event, objective: Objective) {
    this.onObjectiveSelect.emit(objective);
    $event.stopPropagation();
  }
}
