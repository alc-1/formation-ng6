import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppState, reducers } from './store';
import { Login } from './store/actions/login.actions';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<AppState>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers)
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    store = TestBed.get(Store);
    router = TestBed.get(Router);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(router, 'navigate');
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /login on first load', () => {
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should navigate to / when a user log in', () => {
    store.dispatch(new Login('Arnaud'));
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  })

});
