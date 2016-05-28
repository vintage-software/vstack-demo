import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ControlGroup, AbstractControl, Validators } from '@angular/common';
import 'rxjs/add/operator/skip';

@Component({
  moduleId: module.id,
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
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
  
  ngOnInit() {
  }

  submitted(): void {
    if (this.form.valid) {
      this.onSubmit.emit([this.email.value, this.password.value]);
    }
  }

}
