import { Action } from '@ngrx/store';

export enum ActionTypes {
  Login = '[Login Page] Login',
}

export class Login implements Action {
  readonly type = ActionTypes.Login;

  constructor(public name: string) {}
}
