import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from '../store';
import { LoginState } from '../store/reducers/login.reducer';
import { Login } from '../store/actions/login.actions';

describe('AuthGuardService', () => {

  let store: Store<LoginState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
