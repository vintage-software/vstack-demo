import {provide} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router';
import {CompanyService} from './services/company.service';
import {EmployeeService} from './services/employee.service';
import {CompanyObjectiveService} from './services/company-objective.service';
import {DepartmentObjectiveService} from './services/department-objective.service';
import {ObjectiveAssociationService} from './services/objective-association.service';
import {GraphService} from './services/general/graph.service';
import {AuthService} from './services/auth.service';

import {AppComponent} from './components/general/app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  CORE_DIRECTIVES,
  provide(LocationStrategy, { useClass: PathLocationStrategy }),

  AuthService,
  CompanyService,
  EmployeeService,
  CompanyObjectiveService,
  DepartmentObjectiveService,
  ObjectiveAssociationService,
  GraphService
]);