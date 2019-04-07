import { Action } from '@ngrx/store';

export enum ActionTypes {
  Login = '[Login Page] Login',
  LoginSuccess = '[Login Page] Login success',
  Logout = '[Login Page] Logout',
  LoginError = '[Login Page] Login error',
}

export class Login implements Action {
  readonly type = ActionTypes.Login;

  constructor(public name: string) {}
}

export class Logout implements Action {
  readonly type = ActionTypes.Logout;

  constructor() {}
}
