import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Message } from 'src/app/shared/models/message.model';
import { MessageService } from 'src/app/shared/services/message.service';
import {
  ActionTypes,
  GetAllMessagesSuccess,
  PostMessage,
  PostMessageSuccess,
  MessageError
} from '../actions/messages.actions';
import { of } from 'rxjs';

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
        }),
        catchError(() => of(new MessageError("Message error")))
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
        catchError(() => of(new MessageError("Message error")))
      );
    })
  );
}
