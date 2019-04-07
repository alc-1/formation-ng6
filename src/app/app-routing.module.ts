import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';
import { LoginComponent } from 'src/app/components//login/login.component';
import { MessagesComponent } from 'src/app/components/messages/messages.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
