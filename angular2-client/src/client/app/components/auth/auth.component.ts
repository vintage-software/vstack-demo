import { Component } from 'angular2/core';
import { LoginForm } from './components/login-form.component';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'auth-component',
  templateUrl: '/app/components/auth/auth.component.html',
  directives: [LoginForm]
})
export class AuthComponent {
  constructor(private _authService: AuthService) {
  }

  onSubmit(values: [string, string]) {
    this._authService.authenticate(values[0], values[1])
    .do(i => console.log('loggedIn: ', i));
  }
}