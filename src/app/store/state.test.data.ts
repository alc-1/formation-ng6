import { User } from 'src/app/shared/models/user.model';
import { AppState } from 'src/app/store';
import { Message } from '../shared/models/message.model';
import { LoginState } from './reducers/login.reducer';
import { MessageState } from './reducers/messages.reducer';

export const testMessages = [
  new Message('Toto', 'Salut'),
  new Message('Toto', 'Comment'),
  new Message('Toto', 'Ça'),
  new Message('Toto', 'Va'),
  new Message('Toto', '?')
];

export const twoTestMessages = [
  new Message('Toto', 'Salut'),
  new Message('Toto', 'Comment')
];

export const testMessage = new Message('Toto', 'Salut');

/**
 * Messages states
 */
export const messageState: MessageState = {
  all: testMessages,
};

export const messageStateWithTwoMessages: MessageState = {
  all: twoTestMessages,
};

export const messageStateWithoutMessages: MessageState = {
  all: null,
};

/**
 * Login states
 */
export const loginState: LoginState = {
  user: new User('Toto')
};

export const loginStateWithoutUser: LoginState = {
  user: null
};

/**
 * App states
 */
export const appState: AppState = {
  login: null,
  messages: messageState,
};

export const appStateWithoutMessages: AppState = {
  login: null,
  messages: messageStateWithoutMessages,
};

export const appStateWithError: AppState = {
  login: null,
  messages: null,
}

export const appStateWithUser: AppState = {
  login: loginState,
  messages: null,
}

export const appStateWithoutUser: AppState = {
  login: loginStateWithoutUser,
  messages: null,
}
