import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';
import {AuthenticationService} from "../../services/authentication.service";
import {RouterTestingModule} from "@angular/router/testing/router_testing_module";
import {By} from "@angular/platform-browser";

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;
  let authenticationServiceStub;

  beforeEach(async(() => {
    authenticationServiceStub = {
      logout() {},
      isLoggedIn() {}
    };
    TestBed.configureTestingModule({
      declarations: [ NavigationBarComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: AuthenticationService, useValue: authenticationServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component', () => {
    it('#logout should call logout service', () => {
      let service = fixture.debugElement.injector.get(AuthenticationService);
      spyOn(service, 'logout');
      component.logout();
      expect(service.logout).toHaveBeenCalled();
    });

    it('#isLoggedIn should return true if loggedIn', () => {
      let service = fixture.debugElement.injector.get(AuthenticationService);
      spyOn(service, 'isLoggedIn').and.returnValue(true);
      expect(component.isLoggedIn()).toBe(true);
    });

    it('#isLoggedIn should return false if loggedOut', () => {
      let service = fixture.debugElement.injector.get(AuthenticationService);
      spyOn(service, 'isLoggedIn').and.returnValue(false);
      expect(component.isLoggedIn()).toBe(false);
    });
  });

  describe('Template', () => {

    it('Should show logout link if logged in', () => {

      const service = fixture.debugElement.injector.get(AuthenticationService);
      spyOn(service, 'isLoggedIn').and.returnValue(true);
      fixture.detectChanges();

      const logoutElement = fixture.debugElement.query(By.css('#navigation-bar__logout'));
      expect(logoutElement !== null).toEqual(true);
    });

    it('Should not show logout link if not logged in', () => {
      const service = fixture.debugElement.injector.get(AuthenticationService);
      spyOn(service, 'isLoggedIn').and.returnValue(false);
      fixture.detectChanges();

      const logoutElement = fixture.debugElement.query(By.css('#navigation-bar__logout'));
      expect(logoutElement !== null).toEqual(false);
    });

  });

});
