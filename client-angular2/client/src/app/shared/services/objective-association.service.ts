import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {ObjectiveAssociation} from './../model/objective-association';
import {BaseService} from './general/base.service';

@Injectable()
export class ObjectiveAssociationService extends BaseService<ObjectiveAssociation> {
  constructor(http: Http) { super('objective-associations', http); }
}
