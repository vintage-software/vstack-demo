import { Component, OnInit } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { Location } from '@angular/common';

import { DashboardComponent } from './+dashboard';
import { ProfileComponent } from './+profile';
import { SettingsComponent } from './+settings';

@Component({
  moduleId: module.id,
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/', component: DashboardComponent},
  {path: '/profile', component: ProfileComponent},
  {path: '/settings', component: SettingsComponent}
])
export class AccountComponent implements OnInit {

  constructor(public location: Location) {}

  ngOnInit() {
  }

}
