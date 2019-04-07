import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store";
import { MessageState } from 'src/app/store/reducers/messages.reducer';
import { Message } from "src/app/models/message.model";

export const messageState$ = (state: AppState) => state.messages;

export const messages$ = createSelector(
  messageState$,
  (state: MessageState) => state.all);

export const areMessagesLoaded$ = createSelector(
  messages$,
  (all: Message[]) => !!all);

export const error$ = createSelector(
  messageState$,
  (state: MessageState) => state.error);
