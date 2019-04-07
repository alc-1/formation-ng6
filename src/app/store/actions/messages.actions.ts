import { Action } from '@ngrx/store';
import { Message } from 'src/app/shared/models/message.model';

export enum ActionTypes {
  GetAllMessages = '[Message Page] Get all messages',
  GetAllMessagesSuccess = '[Message Page] Get all messages success'
}

export class GetAllMessages implements Action {
  readonly type = ActionTypes.GetAllMessages;

  constructor() {}
}

export class GetAllMessagesSuccess implements Action {
  readonly type = ActionTypes.GetAllMessagesSuccess;

  constructor(public messages: Message[]) {}
}

export type MessageActions = GetAllMessages | GetAllMessagesSuccess;
