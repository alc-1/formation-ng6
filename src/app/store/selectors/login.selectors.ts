import { createSelector } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { AppState } from 'src/app/store';
import { LoginState } from 'src/app/store/reducers/login.reducer';

export const loginState$ = (state: AppState) => state.login;

export const user$ = createSelector(
  loginState$,
  (state: LoginState) => state.user);

export const isLoggedIn$ = createSelector(
  user$,
  (user: User) => !!user && !!user.name);
