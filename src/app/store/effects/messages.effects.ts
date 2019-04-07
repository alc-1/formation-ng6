import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, delay } from 'rxjs/operators';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';
import { ActionTypes, GetAllMessagesSuccess, MessageError, PostMessage, PostMessageSuccess, MessageErrorConsumed } from '../actions/messages.actions';

@Injectable()
export class MessageEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}

  @Effect()
  getAllMessages = this.actions$
    .pipe(
      ofType(ActionTypes.GetAllMessages),
      switchMap(() => {
        return this.messageService.getMessages()
          .pipe(
            map((messages: Message[]) => new GetAllMessagesSuccess(messages)),
            catchError(() => of(new MessageError("Message error")))
          );
      })
    );

  @Effect()
  postMessage = this.actions$
    .pipe(
      ofType(ActionTypes.PostMessage),
      switchMap((action: PostMessage) => {
        return this.messageService.createMessage(action.message)
          .pipe(
            map((message) => {
              return new PostMessageSuccess(message)
            }),
            catchError(() => of(new MessageError("Message error")))
          );
      })
    );

  @Effect()
  consumeError = this.actions$
    .pipe(
      ofType(ActionTypes.MessageError),
      map(() => new MessageErrorConsumed()),
      delay(5000)
    );
}

