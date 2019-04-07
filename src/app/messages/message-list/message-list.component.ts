import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../../models/message.model';
import { Store, select } from '@ngrx/store';
import { MessagesState } from 'src/app/store/reducers/messages.reducer';
import { Subscription } from 'rxjs';
import { messages$ } from 'src/app/store/selectors/messages.selectors';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {

  messagesSubscription: Subscription;
  messages:Message[];

  constructor(private store: Store<MessagesState>) {}

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
