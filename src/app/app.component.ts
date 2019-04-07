import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { Router } from '@angular/router';
import { isLoggedIn$ } from './store/selectors/login.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    public router: Router
  ) { }

  ngOnInit() {
    this.store.pipe(select(isLoggedIn$))
      .subscribe((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/']);
        }
      })
  }
}
