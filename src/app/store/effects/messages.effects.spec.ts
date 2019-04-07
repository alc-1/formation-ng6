import { TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { httpStub } from 'src/app/shared/services/http.stub';
import { MessageService } from 'src/app/shared/services/message.service';
import * as actions from '../actions/messages.actions';
import { testMessages } from '../state.test.data';
import { MessageEffects } from './messages.effects';

describe('Message Effects', () => {
  let actions$: Observable<any>;
  let effects: MessageEffects;

  describe('With healthy http requests', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          MessageEffects,
          provideMockActions(() => actions$),
          MessageService,
          {provide: Http, useValue: httpStub}
        ]
      });

      effects = TestBed.get(MessageEffects);
    });

    it('should be created', () => {
      expect(effects).toBeTruthy();
    });

    it('GetAllMessages should complete with GetAllMessageSuccess', () => {
      const action = new actions.GetAllMessages();
      const completion = new actions.GetAllMessagesSuccess(testMessages);

      actions$ = hot('--a-', { a: action})
      const expected = cold('--b', { b: completion });

      expect(effects.getAllMessages$).toBeObservable(expected);
    });
  });
});
