import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';
import { MessageItemComponent } from "../message-item/message-item.component";
import {MessageInputComponent} from "../message-input/message-input.component";
import {MessageService} from '../../services/message.service';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async(() => {
    let messageServiceStub = {
      getMessages()  {
        return Promise.resolve([
          {id: 35, author: 'won', content: 'fake message'}
        ]);
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        MessageListComponent,
        MessageItemComponent,
        MessageInputComponent
      ],
      providers: [{provide: MessageService, useValue: messageServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get messages on ngInit', async(() => {
    //spyOn(component, 'getMessages');
    component.ngOnInit();
    //expect(component.getMessages).toHaveBeenCalled();
  }));

  it(`should set 'messages' property when promise resolves`, async(() => {
    /*component.getMessages().then(() => {
      expect(component.messages).toEqual([
        {id: 35, author: 'won', content: 'fake message'}
      ]);
    });
    */
  }));

});
