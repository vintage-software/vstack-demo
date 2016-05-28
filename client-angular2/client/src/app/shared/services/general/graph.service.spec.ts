import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {GraphService} from './graph.service';

describe('Graph Service', () => {
  beforeEachProviders(() => [GraphService]);

  it('should ...',
     inject([GraphService], (service: GraphService) => { expect(service).toBeTruthy(); }));
});
