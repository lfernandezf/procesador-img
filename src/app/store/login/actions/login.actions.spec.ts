import * as fromLogin from '../actions/login.actions';
describe('Deberia ejecutar la acción de CargarLogin' , () => {
    it('fromLogin.CARGAR_LOGIN', () => {
        const accion = new fromLogin.CargarLogin({});
        expect(accion.type).toEqual(fromLogin.CARGAR_LOGIN);
    });
});
describe('Deberia ejecutar la acción de CargarLoginSuccess' , () => {
    it('fromLogin.CARGAR_LOGIN_SUCCESS', () => {
        const login = {};
        const accion = new fromLogin.CargarLoginSuccess(login);
        expect(accion.type).toEqual(fromLogin.CARGAR_LOGIN_SUCCESS);
    });
});
describe('Deberia ejecutar la acción de CargarLoginFail' , () => {
    it('fromLogin.CARGAR_LOGIN_FAIL', () => {
        const payload = [];
        const accion = new fromLogin.CargarLoginFail(payload);
        expect(accion.type).toEqual(fromLogin.CARGAR_LOGIN_FAIL);
    });
});
describe('Deberia ejecutar la acción de ReiciarValores' , () => {
   it('fromLogin.REICIAR_VALORES_LOGIN', () => {
       const accion = new fromLogin.ReiciarValores();
       expect(accion.type).toEqual(fromLogin.REICIAR_VALORES_LOGIN);
   });
});
