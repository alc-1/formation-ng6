import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { isLoggedIn$ } from 'src/app/store/selectors/login.selectors';

@Injectable()
export class AuthGuardService implements CanActivate {

  isLoggedIn: boolean;

  constructor(private store: Store<AppState>, public router: Router) {
    this.store.pipe(select(isLoggedIn$))
      .subscribe((isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      });
  }

  canActivate(): boolean {
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
    }
    return this.isLoggedIn;
  }

}
