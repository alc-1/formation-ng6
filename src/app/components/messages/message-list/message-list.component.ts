import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/shared/models/message.model';
import { AppState } from 'src/app/store';
import { messages$ } from 'src/app/store/selectors/messages.selectors';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {
  messagesSubscription: Subscription;
  messages: Message[];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.messagesSubscription = this.store
      .pipe(select(messages$))
      .subscribe((messages: Message[]) => {
        this.messages = messages;
      });
  }

  ngOnDestroy() {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }
}
