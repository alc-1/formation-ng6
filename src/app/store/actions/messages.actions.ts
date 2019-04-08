import { Action } from '@ngrx/store';
import { Message } from 'src/app/shared/models/message.model';

export enum ActionTypes {
  PostMessage = '[Message Page] Post message',
  PostMessageSuccess = '[Message Page] Post message success',
  GetAllMessages = '[Message Page] Get all messages',
  GetAllMessagesSuccess = '[Message Page] Get all messages success',
  MessageError = '[Message Page] Message error',
  MessageErrorConsumed = '[Message Page] Message error consumed'
}

export class PostMessage implements Action {
  readonly type = ActionTypes.PostMessage;

  constructor(public message: Message) {}
}

export class PostMessageSuccess implements Action {
  readonly type = ActionTypes.PostMessageSuccess;

  constructor(public message: Message) {}
}

export class GetAllMessages implements Action {
  readonly type = ActionTypes.GetAllMessages;

  constructor() {}
}

export class GetAllMessagesSuccess implements Action {
  readonly type = ActionTypes.GetAllMessagesSuccess;

  constructor(public messages: Message[]) {}
}

export class MessageError implements Action {
  readonly type = ActionTypes.MessageError;

  constructor(public error: string) {}
}
export class MessageErrorConsumed implements Action {
  readonly type = ActionTypes.MessageErrorConsumed;

  constructor() {}
}

export type MessageActions =
  | PostMessage
  | PostMessageSuccess
  | GetAllMessages
  | GetAllMessagesSuccess
  | MessageError
  | MessageErrorConsumed;
