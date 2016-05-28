import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ClientAngular2AppComponent } from '../app/client-angular2.component';

beforeEachProviders(() => [ClientAngular2AppComponent]);

describe('App: ClientAngular2', () => {
  it('should create the app',
      inject([ClientAngular2AppComponent], (app: ClientAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'client-angular2 works!\'',
      inject([ClientAngular2AppComponent], (app: ClientAngular2AppComponent) => {
    expect(app.title).toEqual('client-angular2 works!');
  }));
});
