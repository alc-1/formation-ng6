import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputComponent } from './message-input.component';
import {MessageService} from '../../services/message.service';
import {AuthenticationService} from "../../services/authentication.service";

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;

  beforeEach(async(() => {
    let messageServiceStub = {
      createMessage()  {
        return Promise.resolve();
      }
    };
    let authenticationServiceStub = {
    }
    
    TestBed.configureTestingModule({
      declarations: [ MessageInputComponent ],
      providers: [
        {provide: MessageService, useValue: messageServiceStub},
        {provide: AuthenticationService, useValue: authenticationServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
