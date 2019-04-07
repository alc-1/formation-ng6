import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [
        AuthGuardService,
      ],
    });
  });

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });

  it('canActivate() should return true if logged in', inject([AuthGuardService],
    (authGuard: AuthGuardService) => {
      //spyOn(service, 'isLoggedIn').and.returnValue(true);
      expect(authGuard.canActivate()).toBeTruthy();
  }));

  it('canActivate() should return false if not logged in', inject([AuthGuardService],
    (authGuard: AuthGuardService) => {
      //spyOn(service, 'isLoggedIn').and.returnValue(false);
      expect(authGuard.canActivate()).toBeFalsy();
  }));

});
