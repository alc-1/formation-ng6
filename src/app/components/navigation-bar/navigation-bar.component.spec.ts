import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing/';
import { MockComponent, routesStub } from 'src/app/routes.stub';
import { NavigationBarComponent } from './navigation-bar.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from 'src/app/store';
import { Logout, Login } from 'src/app/store/actions/login.actions';
import { By } from '@angular/platform-browser';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBarComponent, MockComponent],
      imports: [
        RouterTestingModule.withRoutes(routesStub),
        StoreModule.forRoot(reducers)
      ]
    }).compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component', () => {
    it('#logout should dispatch a logout action', () => {
      component.logout();
      expect(store.dispatch).toHaveBeenCalledWith(new Logout());
    });

    it('#isLoggedIn should return true if loggedIn', () => {
      store.dispatch(new Login('Toto'));
      expect(component.isLoggedIn).toBe(true);
    });

    it('#isLoggedIn should return false if loggedOut', () => {
      expect(component.isLoggedIn).toBe(false);
    });
  });

  describe('Template', () => {
    it('Should show logout link if logged in', () => {
      component.loggedIn = true;
      fixture.detectChanges();

      const logoutElement = fixture.debugElement.query(
        By.css('#navigation-bar__logout')
      );
      expect(logoutElement !== null).toEqual(true);
    });

    it('Should not show logout link if not logged in', () => {
      component.loggedIn = false;
      fixture.detectChanges();

      const logoutElement = fixture.debugElement.query(
        By.css('#navigation-bar__logout')
      );
      expect(logoutElement !== null).toEqual(false);
    });
  });
});
