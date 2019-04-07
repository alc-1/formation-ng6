import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { MessageInputComponent } from './messages/message-input/message-input.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesResolver } from './messages/messages.resolver';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MessageService } from './services/message.service';
import { metaReducers, reducers } from './store';
import { MessageEffects } from './store/effects/messages.effects';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    LoginFormComponent,
    NotFoundComponent,
    MessagesComponent,
    ErrorComponent,
    MessageInputComponent,
    MessageItemComponent,
    MessageListComponent,
    NavigationBarComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([MessageEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    AuthGuardService,
    MessageService,
    MessagesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
