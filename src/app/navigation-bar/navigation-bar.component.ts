import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoginState } from '../store/reducers/login.reducer';
import { isLoggedIn$ } from '../store/selectors/login.selectors';
import { Subscription } from 'rxjs';
import { Logout } from '../store/actions/login.actions';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  logginSubscription: Subscription;
  loggedIn: boolean;
  constructor(private store : Store<LoginState>) { }

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
    this.logginSubscription.unsubscribe();
  }

}
