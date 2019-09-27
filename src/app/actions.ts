import { createAction, props } from '@ngrx/store';

export const loginClicked = createAction(
  '[BUTTON COMPONENT], clicked',
  props<{loginType}>())
export const loginUserName = createAction(
  `[FORM COMPONENT], text added to username`,
  props<{username}>())
export const loginPassword = createAction(
  `[FORM COMPONENT], text added to password`,
  props<{password}>())
export const storeToken = createAction(
  `[LOGIN BUTTON], Success or fail of login attempt`,
  props<{token}>())
export const alertFailedLogin = createAction(`[ALERT], Alert module triggered`,
  props<{loginAttempt}>())


// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');
