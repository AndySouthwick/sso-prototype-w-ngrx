import { Action, createReducer, on } from '@ngrx/store';
import * as actionFromActions from './actions';

export interface State {
  loginType: string;
  username: string;
  password: string;
  loginAttempt: number;
}

export const initialState: State = {
 loginType: '',
  username: '',
  password: '',
  loginAttempt: 5,
};

// const _counterReducer = createReducer(initialState,
//   on(increment, state => state + 1),
//   on(decrement, state => state - 1),
//   on(reset, state => 0),
// );

const ssoReducer = createReducer(initialState,
  on(actionFromActions.loginClicked, (state, {loginType}) => ({...state, loginType})),
  on(actionFromActions.loginUserName, (state, {username}) => ({...state, username})),
  on(actionFromActions.loginPassword, (state, {password}) => ({...state, password})),
  on(actionFromActions.storeToken, (state, {token}) => ({...state, token})),
  on(actionFromActions.alertFailedLogin, (state, {loginAttempt}) => ({...state, loginAttempt: loginAttempt - 1}),
))


export function Reducer(state, action) {
  return ssoReducer(state, action);
}
