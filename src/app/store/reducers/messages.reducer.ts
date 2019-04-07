import { User } from "src/app/models/user.model";
import { ActionTypes } from "src/app/store/actions/messages.actions";
import { Message } from "src/app/models/message.model";

export interface MessagesState {
  allMessages: Message[];
}

const initState: MessagesState = {
  allMessages: null
}

export function messagesReducer( state: MessagesState = initState, action ) {
  switch( action.type ) {
    case ActionTypes.GetAllMessagesSuccess:
      const allMessages = action.messages;
      return {
        ...state,
        allMessages
      }
    case ActionTypes.PostMessageSuccess:
      return {
        ...state,
        allMessages: [...state.allMessages, action.message]
      }
    default:
      return state;
  }
}
