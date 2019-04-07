import { User } from "src/app/models/user.model";
import { ActionTypes } from "src/app/store/actions/messages.actions";
import { Message } from "src/app/models/message.model";

export interface MessageState {
  all: Message[];
  error: string;
}

const initState: MessageState = {
  all: null,
  error: null
}

export function messagesReducer( state: MessageState = initState, action ) {
  switch( action.type ) {
    case ActionTypes.GetAllMessagesSuccess:
      const all = action.messages;
      return {
        ...state,
        all
      }
    case ActionTypes.PostMessageSuccess:
      return {
        ...state,
        allMessages: [...state.all, action.message]
      }
    case ActionTypes.MessageError:
      return {
        ...state,
        error: action.error
      }
    case ActionTypes.MessageErrorConsumed:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}
