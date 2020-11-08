import { Action } from "@ngrx/store";


export const CARGAR_LOGOUT = '[Logout] Cargar logout';
export const CARGAR_LOGOUT_FAIL = '[Logout] Cargar logout fail';
export const CARGAR_LOGOUT_SUCCESS = '[Logout] Cargar logout success';


export class CargarLogout implements Action {
    readonly type = CARGAR_LOGOUT;
    constructor(public data: any){}
} 

export class CargarLogoutFail implements Action {
    readonly type = CARGAR_LOGOUT_FAIL;
    constructor(public payload: any){}
} 

export class CargarLogoutSuccess implements Action {
    readonly type = CARGAR_LOGOUT_SUCCESS;
    constructor(public data: any){}
} 

export type loginAcciones = CargarLogout |
                            CargarLogoutFail |
                            CargarLogoutSuccess;