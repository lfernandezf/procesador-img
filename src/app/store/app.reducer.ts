import { ActionReducerMap } from '@ngrx/store';
import { LoginState, loginReducer } from './login/reducer/login.reducer';
import { LogoutState, logoutReducer } from './login/reducer/logout.reducer';;


export interface AppState{
    login: LoginState;
    logout: LogoutState;
  }

export const appReducers: ActionReducerMap<AppState> = {
    login: loginReducer,
    logout: logoutReducer
}