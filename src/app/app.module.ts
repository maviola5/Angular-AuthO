import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import { AuthService } from './services/auth.service';
import { DealService } from './services/deal.service';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth-guard.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions){
  return new AuthHttp( new AuthConfig({}), http, options );
}


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
  providers: [ DealService, AuthService, { provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http, RequestOptions]}, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
