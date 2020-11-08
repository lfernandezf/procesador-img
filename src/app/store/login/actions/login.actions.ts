import { Action } from "@ngrx/store";


export const CARGAR_LOGIN = '[Login] Cargar login';
export const CARGAR_LOGIN_FAIL = '[Login] Cargar login fail';
export const CARGAR_LOGIN_SUCCESS = '[Login] Cargar login success';
export const REICIAR_VALORES_LOGIN =  '[Login] Riniar valores login';


export class CargarLogin implements Action {
    readonly type = CARGAR_LOGIN;
    constructor(public data: any){}
} 

export class CargarLoginFail implements Action {
    readonly type = CARGAR_LOGIN_FAIL;
    constructor(public payload: any){}
} 

export class CargarLoginSuccess implements Action {
    readonly type = CARGAR_LOGIN_SUCCESS;
    constructor(public data: any){}
} 

export class ReiciarValores implements Action {
    readonly type = REICIAR_VALORES_LOGIN;
}

export type loginAcciones =    CargarLogin |
                               CargarLoginFail |
                               CargarLoginSuccess |
                               ReiciarValores;