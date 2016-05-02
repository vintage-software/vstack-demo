import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {provide, bind} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
// LocationStrategy, PathLocationStrategy
import {CompanyService} from './services/company.service';
import {EmployeeService} from './services/employee.service';
import {CompanyObjectiveService} from './services/company-objective.service';
import {DepartmentObjectiveService} from './services/department-objective.service';
import {ObjectiveAssociationService} from './services/objective-association.service';
import {GraphService} from './services/general/graph.service';
import {AuthService} from './services/auth.service';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  bind(LocationStrategy).toClass(HashLocationStrategy),

  AuthService,
  CompanyService,
  EmployeeService,
  CompanyObjectiveService,
  DepartmentObjectiveService,
  ObjectiveAssociationService,
  GraphService
]);
