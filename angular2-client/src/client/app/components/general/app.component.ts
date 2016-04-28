import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {AccountComponent} from './../account/account.component';
import {AuthComponent} from './../auth/auth.component';
import {AuthService} from './../../services/auth.service';
import {Employee} from './../../model/employee';

@RouteConfig([
    { path: '/', component: HomeComponent, as: 'Home' },
    { path: '/about', component: AboutComponent, as: 'About' },
    { path: '/login', component: AuthComponent, as: 'Login' },
    { path: '/account/...', name: 'Account', component: AccountComponent }
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/components/general/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    private loggedInEmployee$: Observable<Employee>;

    constructor(private authService: AuthService) {
        this.loggedInEmployee$ = this.authService.loggedInEmployee$;
    }
}
