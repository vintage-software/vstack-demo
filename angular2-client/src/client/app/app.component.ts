import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AccountComponent} from './account/account.component';
import {AuthComponent} from './components/auth/auth.component';
import {AuthService} from './services/auth.service';
import {Employee} from './model/employee';

@RouteConfig([
    { path: '/', component: HomeComponent, as: 'Home' },
    { path: '/about', component: AboutComponent, as: 'About' },
    { path: '/login', component: AuthComponent, as: 'Login' },
    { path: '/account/...', name: 'Account', component: AccountComponent }
])
@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <h1>Welcome {{(loggedInEmployee$ | async)?.emailAddress}}</h1>
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    private loggedInEmployee$: Observable<Employee>;

    constructor(private authService: AuthService) {
        this.loggedInEmployee$ = this.authService.loggedInEmployee$;
    }
}
