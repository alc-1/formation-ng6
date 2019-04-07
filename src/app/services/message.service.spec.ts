import {TestBed, inject, async} from '@angular/core/testing';
import {MessageService} from './message.service';
import {Http, HttpModule} from "@angular/http";

describe('MessageService', () => {

  let httpStub;

  beforeEach(() => {
    httpStub = {
      get: () => {
        return {
          toPromise: () => Promise.resolve({json: () => [{id: 1, content: 'fake content', author: 'fhi'}]})
        }
      },
      post: () => {
        return {
          toPromise: () => Promise.resolve({
            json: () => {
              return {id: 1, content: 'hello world', author: 'abc'}
            }
          })
        }
      }
    }
    TestBed.configureTestingModule({
      providers: [
        MessageService,
        {provide: Http, useValue: httpStub}
      ]
    });
  });

  it('should inject message service', inject([MessageService], (service:MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('should have messageUrl property set', inject([MessageService], (service:MessageService) => {
    expect(service.messagesUrl).toEqual('http://microblog-api.herokuapp.com/api/messages');
  }));

  it('should set messages array to empty by default', inject([MessageService], (service:MessageService) => {
    expect(service.messages).toEqual([]);
  }));

  it('#getMessages should fetch messages and set `messages` property', inject([MessageService, Http],
    (service:MessageService, http:Http) => {

      service.messagesUrl = 'http://fake.base.url';

      const observable = {
        toPromise: () => Promise.resolve({json: () => [{id: 1, content: 'fake content', author: 'fhi'}]})
      };

      const spy = spyOn(http, 'get').and.returnValue(observable);

      service.getMessages().then(response => {
        expect(spy).toHaveBeenCalledWith('http://fake.base.url');
        expect(response).toEqual([{id: 1, content: 'fake content', author: 'fhi'}]);
      })
    }));

  it('#createMessage should post new message and add it to `messages` property', inject([MessageService, Http],
    (service:MessageService, http:Http) => {
      
      service.messagesUrl = 'http://fake.base.url';
      
      const message = {content: 'hello world', author: 'abc'};

      const observable = {
        toPromise: () => Promise.resolve({
          json: () => {
            return {id: 1, content: 'hello world', author: 'abc'}
          }
        })
      };

      const spy = spyOn(http, 'post').and.returnValue(observable);

      service.createMessage(message).then(() => {
        expect(spy).toHaveBeenCalledWith('http://fake.base.url', message);
        expect(service.messages).toEqual([{id: 1, content: 'hello world', author: 'abc'}]);
      })
    }));

});
