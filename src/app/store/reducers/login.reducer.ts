import { User } from "src/app/models/user.model";
import { ActionTypes } from "src/app/store/actions/login.actions";

export interface LoginState {
  user: User;
  error: string;
}

const initState: LoginState = {
  user: null,
  error: null
}

export function loginReducer( state:LoginState = initState, action ) {
  switch( action.type ) {
    case ActionTypes.Login:
      const user = new User(action.name);
      return {
        ...state,
        user
      }
    case ActionTypes.Logout:
      return {
        ...state,
        user: null
      }
    default:
      return state;
  }
}
