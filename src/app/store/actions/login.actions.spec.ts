import * as actions from './login.actions';

describe('login actions', () => {

  it('Login action creator should return an object of type Login with a name as payload', () => {
    const action = new actions.Login('Toto');
    expect({...action}).toEqual({
      type: actions.ActionTypes.Login,
      name: 'Toto'
    });
  });

});
