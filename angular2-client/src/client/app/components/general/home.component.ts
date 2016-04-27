import {Component, OnInit} from 'angular2/core';

import {LoginForm} from './../auth/components/login-form.component';

@Component({
    selector: 'home',
    templateUrl: '/app/components/general/home.component.html',
    directives: [LoginForm]
})

export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
