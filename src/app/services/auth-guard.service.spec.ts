import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { routesStub, MockComponent } from 'src/app/routes.stub';
import { reducers } from '../store';
import { Login } from '../store/actions/login.actions';
import { LoginState } from '../store/reducers/login.reducer';
import { AuthGuardService } from './auth-guard.service';


describe('AuthGuardService', () => {

  let store: Store<LoginState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent],
      imports: [
        RouterTestingModule.withRoutes(routesStub),
        StoreModule.forRoot(reducers)
      ],
      providers: [
        AuthGuardService,
      ],
    });
    store = TestBed.get(Store);

  });

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });

  it('canActivate() should return true if logged in', inject([AuthGuardService],
    (authGuard: AuthGuardService) => {
      store.dispatch(new Login('Toto'));
      expect(authGuard.canActivate()).toBeTruthy();
  }));

  it('canActivate() should return false if not logged in', inject([AuthGuardService],
    (authGuard: AuthGuardService) => {
      expect(authGuard.canActivate()).toBeFalsy();
  }));

});
