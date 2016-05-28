import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {EmployeeService} from './employee.service';

describe('Employee Service', () => {
  beforeEachProviders(() => [EmployeeService]);

  it('should ...',
     inject([EmployeeService], (service: EmployeeService) => { expect(service).toBeTruthy(); }));
});
