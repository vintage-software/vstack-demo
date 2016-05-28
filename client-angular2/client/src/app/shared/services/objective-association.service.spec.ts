import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {ObjectiveAssociationService} from './objective-association.service';

describe('ObjectiveAssociation Service', () => {
  beforeEachProviders(() => [ObjectiveAssociationService]);

  it('should ...', inject([ObjectiveAssociationService], (service: ObjectiveAssociationService) => {
       expect(service).toBeTruthy();
     }));
});
