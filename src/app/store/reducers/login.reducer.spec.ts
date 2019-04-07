import { User } from 'src/app/shared/models/user.model';
import * as actions from '../actions/login.actions';
import { loginStateWithoutUser } from '../state.test.data';
import * as reducers from './login.reducer';

describe('login reducers', () => {

  it('Login should add a new user in the login state', () => {
    const action = new actions.Login('Toto');
    const expectedState = {
      ...loginStateWithoutUser,
      user: new User('Toto')
    };
    const newState = reducers.loginReducer(loginStateWithoutUser, action);
    expect(newState).toEqual(expectedState);
  });

});
