import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store';
import { Logout } from 'src/app/store/actions/login.actions';
import { isLoggedIn$ } from 'src/app/store/selectors/login.selectors';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  logginSubscription: Subscription;
  loggedIn: boolean;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(isLoggedIn$))
      .subscribe((isLoggedIn: boolean) => {
        this.loggedIn = isLoggedIn;
      })
  }

  get isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  ngOnDestroy() {
    if (this.logginSubscription) {
      this.logginSubscription.unsubscribe();
    }
  }
}
