import { estadoInicialLogin, loginReducer } from '../reducer/login.reducer';
import * as loginActions from '../actions/login.actions';

describe('Estado inicial - Reducer Login', () => {
    it('Deberia retornar el estado inicial del reducer', () => {
        const action = {} as any;
        const result = loginReducer(estadoInicialLogin, action);
        expect(result).toBe(estadoInicialLogin);
    });
    it('loginActions tipo: CARGAR_LOGIN', () => {
        const data = [];
        const action = new loginActions.CargarLogin(data);
        const result = loginReducer(estadoInicialLogin, action);
        expect(result).toEqual(
            {
            ...estadoInicialLogin,
            loading: true,
            error: null
            });
    });
    it('loginActions tipo: CARGAR_LOGIN_SUCCESS', () => {
        const data = [];
        const action = new loginActions.CargarLoginSuccess(data);
        const result = loginReducer(estadoInicialLogin, action);
        expect(result).toEqual(
            {
            ...estadoInicialLogin,
            loading: false,
            loaded: true,
            data: [...action.data],
            authorized: action.data.success
           }
        );
    });
    it('loginActions tipo: CARGAR_LOGIN_FAIL', () => {
        const payload = [];
        const action = new loginActions.CargarLoginFail(payload);
        const result = loginReducer(estadoInicialLogin, action);
        expect(result).toEqual(
            {
                ...estadoInicialLogin,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url

                }
           }
        );
    });
    it('loginActions tipo: REICIAR_VALORES_LOGIN', () => {
        const action = new loginActions.ReiciarValores();
        const result = loginReducer(estadoInicialLogin, action);
        expect(result).toEqual(
            {
            ...estadoInicialLogin,
            data: null,
            loaded: false,
            loading: false,
            error: null,
            authorized: false
           }
        );
    });
});
