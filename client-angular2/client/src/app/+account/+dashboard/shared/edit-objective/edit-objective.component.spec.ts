import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EditObjectiveComponent } from './edit-objective.component';

describe('Component: EditObjective', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [EditObjectiveComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([EditObjectiveComponent],
      (component: EditObjectiveComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(EditObjectiveComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(EditObjectiveComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-edit-objective></app-edit-objective>
  `,
  directives: [EditObjectiveComponent]
})
class EditObjectiveComponentTestController {
}

