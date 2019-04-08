import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Message } from 'src/app/shared/models/message.model';
import { MessageService } from 'src/app/shared/services/message.service';
import {
  ActionTypes,
  GetAllMessagesSuccess,
  PostMessage,
  PostMessageSuccess
} from '../actions/messages.actions';

@Injectable()
export class MessageEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}

  @Effect()
  getAllMessages$ = this.actions$.pipe(
    ofType(ActionTypes.GetAllMessages),
    switchMap(() => {
      return this.messageService.getMessages().pipe(
        map((messages: Message[]) => {
          return new GetAllMessagesSuccess(messages);
        })
      );
    })
  );

  @Effect()
  postMessage$ = this.actions$.pipe(
    ofType(ActionTypes.PostMessage),
    switchMap((action: PostMessage) => {
      return this.messageService.createMessage(action.message).pipe(
        map(message => {
          return new PostMessageSuccess(message);
        }),
      );
    })
  );
}
