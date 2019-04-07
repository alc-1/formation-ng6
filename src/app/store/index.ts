import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { LoginState, loginReducer }  from './reducers/login.reducer';
import { MessagesState, messagesReducer } from './reducers/messages.reducer';

export interface AppState {
  login: LoginState,
  messages: MessagesState,
}

export const reducers: ActionReducerMap<AppState> = {
  login: loginReducer,
  messages: messagesReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
