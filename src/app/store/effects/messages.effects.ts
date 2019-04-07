import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Message } from 'src/app/shared/models/message.model';
import { MessageService } from 'src/app/shared/services/message.service';
import { ActionTypes, GetAllMessagesSuccess } from '../actions/messages.actions';

@Injectable()
export class MessageEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}

  @Effect()
  getAllMessages$ = this.actions$
    .pipe(
      ofType(ActionTypes.GetAllMessages),
      switchMap(() => {
        return this.messageService.getMessages()
      }),
      map((messages: Message[]) => new GetAllMessagesSuccess(messages)),
    );
}

