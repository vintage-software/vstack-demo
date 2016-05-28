import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ControlGroup, AbstractControl } from '@angular/common';

import { Objective } from './../../../../shared/model/objective';
import { CompanyObjectiveService } from './../../../../shared/services/company-objective.service';
import { DepartmentObjectiveService } from './../../../../shared/services/department-objective.service';

@Component({
  moduleId: module.id,
  selector: 'app-edit-objective',
  templateUrl: 'edit-objective.component.html',
  styleUrls: ['edit-objective.component.css']
})
export class EditObjectiveComponent implements OnInit, OnChanges {
  @Input() objective: Objective;
  @Output() onSubmit: EventEmitter<Objective> = new EventEmitter<Objective>();
  form: ControlGroup;
  title: AbstractControl;
  description: AbstractControl;
  percentage: AbstractControl;
  estimatedCompletionDate: AbstractControl;

  constructor(
    private _companyObjectiveService: CompanyObjectiveService,
    private _departmentObjectiveService: DepartmentObjectiveService,
    fb: FormBuilder) {
    this.form = fb.group({
      'title': [],
      'description': [''],
      'percentage': [''],
      'estimatedCompletionDate': ['']
    });

    this.title = this.form.controls['title'];
    this.description = this.form.controls['description'];
    this.percentage = this.form.controls['percentage'];
    this.estimatedCompletionDate = this.form.controls['estimatedCompletionDate'];
  }

  ngOnInit() {

  }

  ngOnChanges(changes) {
    let objective = changes.objective.currentValue;
    if (objective) {
      this.onObjectiveChanged(objective);
    }
  }

  onObjectiveSubmit() {
    if (this.form.valid) {
      // TODO: helper function combineWithForm(this.objective, this.form)
      let { title, description, percentage, estimatedCompletionDate } = this.form.value;
      let updatedObjective: Objective = Object.assign({}, this.objective, { title, description, percentage, estimatedCompletionDate });
      this.onSubmit.emit(updatedObjective);
    }
  }

  onObjectiveChanged(objective: Objective) {
    (<any>this.title).updateValue(objective.title);
    (<any>this.description).updateValue(objective.description);
    (<any>this.percentage).updateValue(objective.percentage);
    (<any>this.estimatedCompletionDate).updateValue(objective.estimatedCompletionDate);
  }

  getDepartmentObjectives(objective: Objective) {
    return (objective && !(<any>objective).departmentId) ? objective.objectiveAssociations.map(i => i.departmentObjective) : [];
  }

  getCompanyObjectives(objective: Objective) {
    return (objective && (<any>objective).departmentId) ? objective.objectiveAssociations.map(i => i.companyObjective) : [];
  }
}
