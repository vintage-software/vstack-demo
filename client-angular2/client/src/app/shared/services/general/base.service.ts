import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { VSCollectionService, CollectionItem, AngularHttpMapper } from 'vstack-graph';

@Injectable()
export class BaseService<T extends CollectionItem> extends VSCollectionService<T> {
  constructor(urlPart: string, http: Http) {
    super(new AngularHttpMapper<T>(
        {baseUrl: `https://vintageokrapi.azurewebsites.net/${urlPart}`, http: http}));
  }
}
