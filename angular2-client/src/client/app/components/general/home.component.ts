import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'home',
    templateUrl: '/app/components/general/home.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})

export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
