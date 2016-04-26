import {Http} from 'angular2/http';

import {RestCollection, CollectionItem} from 'vstack-graph';

export class BaseService<T extends CollectionItem> extends RestCollection<T> {
  constructor(urlPart: string, http: Http) {
    super({ baseUrl: `https://vintageokrapi.azurewebsites.net/${urlPart}`, http: http });
  }
}
