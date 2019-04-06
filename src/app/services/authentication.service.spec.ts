import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import {LocalStorageService} from "angular-2-local-storage";
import { localStorageServiceStub } from './local-storage.service.stub';
import { Router } from '@angular/router';

describe('AuthenticationService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthenticationService,
        {provide: LocalStorageService, useValue: localStorageServiceStub}
      ]
    });
  });

  it('should inject authenticationService', inject([AuthenticationService], (service:AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('#login should set user value into localStorage', inject([AuthenticationService, LocalStorageService],
    (service:AuthenticationService, localStorage:LocalStorageService) => {
    spyOn(localStorage, 'set');
    service.login('abc');
    expect(localStorage.set).toHaveBeenCalledWith('user', 'abc');
  }));

  it('#login should navigate to /', inject([AuthenticationService, Router], (service:AuthenticationService, router: Router) => {
    spyOn(router, 'navigateByUrl');
    service.login('abc');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/');
  }));

  it('#isLoggedIn should return true if user is set inside localStorage', inject([AuthenticationService, LocalStorageService],
    (service:AuthenticationService, localStorage:LocalStorageService) => {
    spyOn(localStorage, 'get').and.returnValue('abc');
    expect(service.isLoggedIn()).toBe(true);
  }));

  it('#isLoggedIn should return false if user is not set inside localStorage', inject([AuthenticationService], (service:AuthenticationService) => {
    spyOn(localStorageServiceStub, 'get').and.returnValue(undefined);
    expect(service.isLoggedIn()).toBe(false);
  }));

});
