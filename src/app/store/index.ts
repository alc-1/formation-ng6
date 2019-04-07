import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';
import { loginReducer, LoginState } from './reducers/login.reducer';
import { messagesReducer, MessageState } from './reducers/messages.reducer';

export interface AppState {
  login: LoginState,
  messages: MessageState,
}

export const reducers: ActionReducerMap<AppState> = {
  login: loginReducer,
  messages: messagesReducer
};

// can replace ngrx-devtools
export function logger(reducer: ActionReducer<AppState>){
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
