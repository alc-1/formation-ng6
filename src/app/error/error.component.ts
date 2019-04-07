import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { LoginState } from '../store/reducers/login.reducer';
import { error$ } from '../store/selectors/login.selectors';
import { delay, map, tap } from 'rxjs/operators';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  message: string;

  constructor(private store: Store<LoginState>) {
  }

  ngOnInit() {
    this.store.pipe(select(error$))
      .subscribe((error: string) => {
        console.log(error)
        this.message = error;
        setTimeout(() => {
          this.message = null;
        }, 10000)
      })
  }


}
