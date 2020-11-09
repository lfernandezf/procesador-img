import * as fromLogout from "../actions/logout.actions";



export interface LogoutState {
    loaded: boolean;
    loading: boolean;
    error: any;
    data: any;
    authorized: boolean
}

export const estadoInicialLogin: LogoutState = {
    loaded: false,
    loading: false,
    error: null,
    data: null,
    authorized: false
}


export function logoutReducer( actions: fromLogout.loginAcciones, state = estadoInicialLogin): LogoutState{
    switch (actions.type) {
        case fromLogout.CARGAR_LOGOUT:
            
            return {
                ...state,
                loading: true,
                error: null
            };
        case fromLogout.CARGAR_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: actions.data,
                authorized: actions.data.data.authorized
            }
        case fromLogout.CARGAR_LOGOUT_FAIL:
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
    
        default:
            return state;
    }
}