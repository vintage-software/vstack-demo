import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {BaseService} from './general/base.service';
import {ObjectiveAssociation} from './../model/objective-association';

@Injectable()
export class ObjectiveAssociationService extends BaseService<ObjectiveAssociation> {
  constructor(http: Http) {
    super('objective-associations', http);
  }
}
