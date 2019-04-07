import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockComponent, routesStub } from './routes.stub';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, AppState } from './store';
import { Router } from '@angular/router';
import { Login } from './store/actions/login.actions';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<AppState>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routesStub),
        StoreModule.forRoot(reducers)
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
    store = TestBed.get(Store);
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
    store.dispatch(new Login('Toto'));
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  })

});
