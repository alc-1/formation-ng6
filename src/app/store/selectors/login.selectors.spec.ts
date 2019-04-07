import { appStateWithoutUser, appStateWithUser, loginState } from 'src/app/store/state.test.data';
import * as Selectors from './login.selectors';

describe('Messages selectors', () => {

  it('isLoggedIn should be true if a user is define', () => {
    expect(Selectors.isLoggedIn$(appStateWithUser)).toBeTruthy();
  });

  it('isLoggedIn should be false if no user is define', () => {
    expect(Selectors.isLoggedIn$(appStateWithoutUser)).toBeFalsy();
  });

  it('loginState should return the login part of the state ', () => {
    expect(Selectors.loginState$(appStateWithUser)).toBe(loginState);
  });

  it('user should return the user', () => {
    expect(Selectors.user$(appStateWithUser)).toBe(loginState.user);
  });

  it('user should return null if no user', () => {
    expect(Selectors.user$(appStateWithoutUser)).toBeNull();
  });

});
