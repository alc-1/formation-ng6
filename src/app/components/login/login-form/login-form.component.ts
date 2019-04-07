import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/store/actions/login.actions';
import { LoginState } from 'src/app/store/reducers/login.reducer';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private store: Store<LoginState>) { }

  ngOnInit() {}

  login(input: HTMLInputElement): void {
    this.store.dispatch(new Login(input.value));
  }
}
