import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'home',
    templateUrl: '/app/home/home.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})

export class HomeComponent {
    constructor() { }

    ngOnInit() { }
}
