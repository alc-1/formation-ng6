import { Action } from '@ngrx/store';

export enum ActionTypes {
  Login = '[Login Page] Login',
  Logout = '[Login Page] Logout',
}

export class Login implements Action {
  readonly type = ActionTypes.Login;

  constructor(public name: string) {}
}

export class Logout implements Action {
  readonly type = ActionTypes.Logout;

  constructor() {}
}
