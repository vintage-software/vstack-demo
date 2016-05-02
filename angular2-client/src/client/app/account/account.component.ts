import {Component} from 'angular2/core';
import {Location} from 'angular2/platform/common';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';

@Component({
  selector: 'account-component',
  templateUrl: '/app/account/account.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})
@RouteConfig([
  { path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/profile', name: 'Profile', component: ProfileComponent },
  { path: '/settings', name: 'Settings', component: SettingsComponent },
])
export class AccountComponent {
  constructor(public location: Location) {
  }
}
