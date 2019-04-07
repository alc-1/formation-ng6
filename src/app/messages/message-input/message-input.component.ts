import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import { AppState } from 'src/app/store';
import { PostMessage } from 'src/app/store/actions/messages.actions';
import { user$ } from 'src/app/store/selectors/login.selectors';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;
  user: User;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userSubscription = this.store
      .pipe(select(user$))
        .subscribe((user) => {
          this.user = user;
        })
  }

  addMessage(content: HTMLInputElement) {
    this.store.dispatch(new PostMessage(new Message(this.user.name,content.value)));
    content.value = null;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }


}
