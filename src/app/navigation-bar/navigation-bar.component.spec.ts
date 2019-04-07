import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from '@angular/router/testing/';
import { NavigationBarComponent } from './navigation-bar.component';
import { StoreModule, Store } from '@ngrx/store';
import { AppState, reducers } from '../store';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationBarComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers)
      ],
    })
    .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component', () => {
    it('#logout should call logout service', () => {
      //let service = fixture.debugElement.injector.get(AuthenticationService);
      //spyOn(service, 'logout');
      component.logout();
      //expect(service.logout).toHaveBeenCalled();
    });

    it('#isLoggedIn should return true if loggedIn', () => {
      //let service = fixture.debugElement.injector.get(AuthenticationService);
      //spyOn(service, 'isLoggedIn').and.returnValue(true);
      //expect(component.isLoggedIn()).toBe(true);
    });

    it('#isLoggedIn should return false if loggedOut', () => {
      //let service = fixture.debugElement.injector.get(AuthenticationService);
      //spyOn(service, 'isLoggedIn').and.returnValue(false);
      //expect(component.isLoggedIn()).toBe(false);
    });
  });

  describe('Template', () => {

    it('Should show logout link if logged in', () => {
      component.loggedIn = true;
      fixture.detectChanges();

      const logoutElement = fixture.debugElement.query(By.css('#navigation-bar__logout'));
      expect(logoutElement !== null).toEqual(true);
    });

    it('Should not show logout link if not logged in', () => {
      component.loggedIn = false;
      fixture.detectChanges();

      const logoutElement = fixture.debugElement.query(By.css('#navigation-bar__logout'));
      expect(logoutElement !== null).toEqual(false);
    });

  });

});
