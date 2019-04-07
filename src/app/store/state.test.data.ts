import { AppState } from 'src/app/store';
import { User } from 'src/app/shared/models/user.model';
import { LoginState } from './reducers/login.reducer';


/**
 * Login states
 */
export const loginState: LoginState = {
  user: new User('Toto')
}

export const loginStateWithoutUser: LoginState = {
  user: null
}

/**
 * App states
 */
export const appState: AppState = {
  login: null,
}

export const appStateWithUser: AppState = {
  login: loginState,
}

export const appStateWithoutUser: AppState = {
  login: loginStateWithoutUser,
}
