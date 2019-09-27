import { Component, OnInit } from '@angular/core';
import {loginPassword, loginUserName, storeToken, alertFailedLogin} from '../actions';
import { Store } from '@ngrx/store';
import {data} from '../data';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 state$:any;
 alert: Object;
  constructor(private store: Store<{state}>, private router: Router) {
    this.store.select('state').subscribe((thData) => this.state$ = thData);
  }
  checkUserName = (username) => {
  this.store.dispatch(loginUserName({username}));
  }
  checkPassword = (password) => {
    this.store.dispatch(loginPassword({password}));
  }
  buttonClicked = () => {
    if (this.state$.username === data.username && this.state$.password === data.password) {
      console.log('success');
      this.store.dispatch(storeToken({token: true}));
      this.router.navigate(['/interrupt']);
    } else {
      console.log('fail');
      this.store.dispatch(storeToken({token: false}));
      const loginAttempt = this.state$.loginAttempt
      this.store.dispatch(alertFailedLogin({loginAttempt: loginAttempt}));
      this.alert = `Your username or password is
incorrect. You have ${this.state$.loginAttempt} attempts left`;
    }
  }
  ngOnInit() {
    console.log(this.state$);

  }

}
