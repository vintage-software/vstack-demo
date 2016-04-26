import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {AuthComponent} from './../auth/auth.component';

@RouteConfig([
    { path: '/', component: HomeComponent, as: 'Home' },
    { path: '/about', component: AboutComponent, as: 'About' },
    { path: '/login', component: AuthComponent, as: 'Auth' },
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/components/general/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
