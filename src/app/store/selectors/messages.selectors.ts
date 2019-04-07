import { createSelector } from '@ngrx/store';
import { Message } from 'src/app/shared/models/message.model';
import { AppState } from 'src/app/store';
import { MessageState } from 'src/app/store/reducers/messages.reducer';

export const messageState$ = (state: AppState) => state.messages;

export const messages$ = createSelector(
  messageState$,
  (state: MessageState) => state.all);

export const areMessagesLoaded$ = createSelector(
  messages$,
  (all: Message[]) => !!all);
