import { Component, Output, EventEmitter } from 'angular2/core';
import { FormBuilder, ControlGroup, AbstractControl, Validators } from 'angular2/common';
import 'rxjs/add/operator/skip';

@Component({
  selector: 'login-form',
  templateUrl: '/app/components/auth/components/login-form.component.html'
})
export class LoginForm {
  @Output() onSubmit: EventEmitter<[string, string]> = new EventEmitter<[string, string]>();

  form: ControlGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  submitted(): void {
    if (this.form.valid) {
      this.onSubmit.emit([this.email.value, this.password.value]);
    }
  }
}
