import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginState } from '../store/reducers/login.reducer';
import { Store, select } from '@ngrx/store';
import { isLoggedIn$ } from 'src/app/store/selectors/login.selectors';

@Injectable()
export class AuthGuardService implements CanActivate {

  isLoggedIn: boolean;

  constructor(private store: Store<LoginState>, public router: Router) {
    this.store.pipe(select(isLoggedIn$))
      .subscribe((isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      });
  }

  canActivate(): boolean {
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
    }
    return this.isLoggedIn
  }

}
