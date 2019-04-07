import { User } from "src/app/shared/models/user.model";
import { ActionTypes } from "src/app/store/actions/login.actions";

export interface LoginState {
  user: User;
};

const initState: LoginState = {
  user: null,
};

export function loginReducer( state:LoginState = initState, action ) {
  switch (action.type ) {
    case ActionTypes.Login:
      const user = new User(action.name);
      return { user };
    default:
      return state;
  }
}
