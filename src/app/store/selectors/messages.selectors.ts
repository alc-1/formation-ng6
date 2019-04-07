import { AppState } from "src/app/store";
import { createSelector } from "@ngrx/store";

export const messages$ = (state: AppState) => state.messages.allMessages;
export const areMessagesLoaded$ = createSelector(messages$, (messages) => !!messages)
