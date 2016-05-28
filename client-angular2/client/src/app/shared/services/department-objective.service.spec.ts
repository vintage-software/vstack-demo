import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {DepartmentObjectiveService} from './department-objective.service';

describe('DepartmentObjective Service', () => {
  beforeEachProviders(() => [DepartmentObjectiveService]);

  it('should ...', inject([DepartmentObjectiveService], (service: DepartmentObjectiveService) => {
       expect(service).toBeTruthy();
     }));
});
