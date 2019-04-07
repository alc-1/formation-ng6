import * as actions from './login.actions';

describe('login actions', () => {

  it('Login action creator should return an object of type Login with a name as payload', () => {
    const action = new actions.Login('Toto');
    expect({...action}).toEqual({
      type: actions.ActionTypes.Login,
      name: 'Toto'
    })
  })

  it('Login action creator should return an object of type Logout without payload', () => {
    const action = new actions.Logout();
    expect({...action}).toEqual({
      type: actions.ActionTypes.Logout,
    })
  })

})
