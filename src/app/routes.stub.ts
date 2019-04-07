import { Component } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  template: ``
})
export class MockComponent {}

export const routesStub: Routes = [
  {
    path: '',
    component: MockComponent
  },
  { path: 'about', component: MockComponent },
  { path: 'login', component: MockComponent },
  { path: '**', component: MockComponent}
];

