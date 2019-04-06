import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    LoginFormComponent,
    NotFoundComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocalStorageModule.forRoot({
      prefix: 'formation-ng6',
      storageType: 'localStorage'
    })
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
