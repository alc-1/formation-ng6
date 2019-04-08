import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { MessageErrorConsumed } from 'src/app/store/actions/messages.actions';
import { error$ } from 'src/app/store/selectors/messages.selectors';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  message: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.pipe(select(error$)).subscribe((error: string) => {
      if (error) {
        setTimeout(() => {
          this.store.dispatch(new MessageErrorConsumed());
        }, 2000);
      }
      this.message = error;
    });
  }
}
