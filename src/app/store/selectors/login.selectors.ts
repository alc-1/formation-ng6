import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { User } from "src/app/models/user.model";

export const login$ = (state: AppState) => state.login;
export const user$ = createSelector(login$, login => !!login ? login.user : null);
export const isLoggedIn$ = createSelector(user$, (user:User) => !!user && !!user.name)
export const error$ = createSelector(login$, login => login.error)
