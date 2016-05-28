import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { LoginFormComponent } from './shared/login-form/login-form.component';
import { AuthService } from './../shared/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [LoginFormComponent]
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(values: [string, string]) {
    this._authService.authenticate(values[0], values[1])
      .do(employee => employee && this._router.navigate(['/account']))
      .subscribe();
  }

}
