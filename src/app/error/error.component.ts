import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { error$ } from '../store/selectors/messages.selectors';
import { AppState } from '../store';

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
        console.log(error)
        this.message = error;
      })
  }
}
