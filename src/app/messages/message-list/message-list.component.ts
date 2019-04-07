import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MessageState } from 'src/app/store/reducers/messages.reducer';
import { messages$ } from 'src/app/store/selectors/messages.selectors';
import { Message } from '../../models/message.model';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {

  messagesSubscription: Subscription;
  messages:Message[];

  constructor(private store: Store<MessageState>) {}

  ngOnInit() {
    this.messagesSubscription = this.store.pipe(select(messages$))
      .subscribe((messages: Message[]) => {
        this.messages = messages;
      })
  }

  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }
}
