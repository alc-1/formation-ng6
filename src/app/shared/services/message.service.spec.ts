import { inject, TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';
import { of } from 'rxjs';
import { testMessages } from 'src/app/store/state.test.data';
import { httpStub } from './http.stub';
import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService, { provide: Http, useValue: httpStub }]
    });
  });

  it('should inject message service', inject(
    [MessageService],
    (service: MessageService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should have messageUrl property set', inject(
    [MessageService],
    (service: MessageService) => {
      expect(service.messagesUrl).toEqual(
        'http://microblog-api.herokuapp.com/api/messages'
      );
    }
  ));

  it('#getMessages should fetch messages and set `messages` property', inject(
    [MessageService, Http],
    (service: MessageService, http: Http) => {
      service.messagesUrl = 'http://fake.base.url';

      const observable = of({ json: () => testMessages });
      const spy = spyOn(http, 'get').and.returnValue(observable);

      service.getMessages().subscribe(response => {
        expect(spy).toHaveBeenCalledWith('http://fake.base.url');
        expect(response).toEqual(testMessages);
      });
    }
  ));
});
