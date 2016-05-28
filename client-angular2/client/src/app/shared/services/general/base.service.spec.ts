import { beforeEachProviders, it, describe, expect, inject } from '@angular/core/testing';
import { BaseService } from './base.service';

describe('Base Service', () => {
  beforeEachProviders(() => [BaseService]);

  it('should ...', inject([BaseService], (service: any) => { expect(service).toBeTruthy(); }));
});
