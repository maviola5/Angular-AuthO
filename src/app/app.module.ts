import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import { AuthService } from './services/auth.service';
import { DealService } from './services/deal.service';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ DealService, AuthService, AUTH_PROVIDERS, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
