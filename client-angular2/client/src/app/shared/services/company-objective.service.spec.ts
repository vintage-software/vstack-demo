import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {CompanyObjectiveService} from './company-objective.service';

describe('CompnayObjective Service', () => {
  beforeEachProviders(() => [CompanyObjectiveService]);

  it('should ...', inject([CompanyObjectiveService], (service: CompanyObjectiveService) => {
       expect(service).toBeTruthy();
     }));
});
