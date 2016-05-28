import { Component } from '@angular/core';
import { HTTP_BINDINGS } from '@angular/http';
import { HomeComponent } from './+home';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AboutComponent } from './+about';
import { AccountComponent } from './+account';
import { LoginComponent } from './+login';

import { CompanyService } from './shared/services/company.service';
import { EmployeeService } from './shared/services/employee.service';
import { CompanyObjectiveService } from './shared/services/company-objective.service';
import { DepartmentObjectiveService } from './shared/services/department-objective.service';
import { ObjectiveAssociationService } from './shared/services/objective-association.service';
import { GraphService } from './shared/services/general/graph.service';
import { AuthService } from './shared/services/auth.service';
import { Employee } from './shared/model/employee';

@Component({
  moduleId: module.id,
  selector: 'client-angular2-app',
  templateUrl: 'client-angular2.component.html',
  styleUrls: ['client-angular2.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_BINDINGS,
    CompanyService,
    EmployeeService,
    CompanyObjectiveService,
    DepartmentObjectiveService,
    ObjectiveAssociationService,
    GraphService,
    AuthService]
})
@Routes([
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent },
  { path: '/account', component: AccountComponent },
  { path: '/login', component: LoginComponent }
])
export class ClientAngular2AppComponent {
  title = 'client angular2';
  private loggedInEmployee$: Observable<Employee>;

  constructor(private authService: AuthService) {
    this.loggedInEmployee$ = this.authService.loggedInEmployee$;
  }
}
