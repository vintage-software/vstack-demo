import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {FormBuilder, ControlGroup, AbstractControl} from 'angular2/common';
import {Objective} from './../../../model/objective';
import {CompanyObjectiveService} from './../../../services/company-objective.service';
import {DepartmentObjectiveService} from './../../../services/department-objective.service';

@Component({
  selector: 'edit-objective',
  templateUrl: '/app/account/dashboard/components/edit-objective.component.html',
})
export class EditObjective {
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

  onObjectiveSubmit() {
    if (this.form.valid) {
      // TODO: helper function combineWithForm(this.objective, this.form)
      let { title, description, percentage, estimatedCompletionDate } = this.form.value;
      let updatedObjective: Objective = Object.assign({}, this.objective, { title, description, percentage, estimatedCompletionDate });
      this.onSubmit.emit(updatedObjective);
    }
  }

  ngOnChanges(changes) {
    let objective = changes.objective.currentValue;
    if (objective) {
      this.onObjectiveChanged(objective);
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
