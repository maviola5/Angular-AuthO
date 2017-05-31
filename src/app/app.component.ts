import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'daily-deals',
  styleUrls: ['./app.component.sass'],
  template: `
  <div class="container">
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <a routerLink="/dashboard" class="navbar-brand"></a>
      </div>
      <!-- on the left side comment -->
      <ul class="nav navbar-nav">
        <li>
          <a routerLink="/deals" routerLinkActive="active">Deals</a>
        </li>
        <li>
          <a 
          routerLink="/special" 
          routerLinkActive="active"
          *ngIf="authService.authenticated"
          >Private Deals</a>
        </li>
      </ul>
      <!-- On the right side -->
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a *ngIf="!authService.authenticated" (click)="authService.login()">Log In</a>
        </li>
        <li>
          <a (click)="authService.logout()" *ngIf="authService.authenticated">Log Out</a>
        </li>
      </ul>
    </nav>
    <div class="col-sm-12">
      <!-- The router-outlet directive will display the component based  -->
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'Daily Deals';

  constructor(private authService: AuthService){}
}
