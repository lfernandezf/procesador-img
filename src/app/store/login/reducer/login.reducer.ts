import * as fromLogin from "../actions/login.actions";



export interface LoginState {
    loaded: boolean;
    loading: boolean;
    error: any;
    data: any;
    authorized: boolean
}

export const estadoInicialLogin: LoginState = {
    loaded: false,
    loading: false,
    error: null,
    data: null,
    authorized: false
}


export function loginReducer( state = estadoInicialLogin, actions: fromLogin.loginAcciones): LoginState{
    switch (actions.type) {
        case fromLogin.CARGAR_LOGIN:
            
            return {
                ...state,
                loading: true,
                error: null
            };
        case fromLogin.CARGAR_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: actions.data,
                authorized: actions.data.success
            }
        case fromLogin.CARGAR_LOGIN_FAIL:
            return {
                 ...state,
                 loaded: false,
                 loading: false,
                 error: {
                     status: actions.payload.status,
                     message: actions.payload.message,
                     url: actions.payload.url

                 }
            }
        case fromLogin.REICIAR_VALORES_LOGIN:
            return {
                ...state,
                error: null,
                loading: false,
                loaded: false,
                data: null,
                authorized: false
            }
    
        default:
            return state;
    }
}