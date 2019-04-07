import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { LoginComponent } from './components/login/login.component';
import { MessageItemComponent } from './components/messages/message-item/message-item.component';
import { MessageListComponent } from './components/messages/message-list/message-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { MessageService } from './shared/services/message.service';
import { metaReducers, reducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    NavigationBarComponent,
    LoginFormComponent,
    MessagesComponent,
    MessageListComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    AuthGuardService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
