import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router';
import {CompanyService} from './services/company.service';
import {EmployeeService} from './services/employee.service';
import {GraphService} from './services/general/graph.service';

import {AppComponent} from './components/general/app.component';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  CORE_DIRECTIVES,
  provide(LocationStrategy, { useClass: PathLocationStrategy }),

  CompanyService,
  EmployeeService,
  GraphService
]);
