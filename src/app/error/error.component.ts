import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { error$ } from '../store/selectors/messages.selectors';
import { AppState } from '../store';
import { MessageErrorConsumed } from '../store/actions/messages.actions';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  message: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.pipe(select(error$))
      .subscribe((error: string) => {
        if (error) {
          setTimeout(() => {
            this.store.dispatch(new MessageErrorConsumed())
          }, 2000);
        }
        this.message = error;
      })
  }
}
