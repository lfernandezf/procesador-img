import { provideMockActions } from '@ngrx/effects/testing';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginEffects } from './login.effects';
import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { LoginMockService } from 'src/app/mocks/login';
import { Actions } from '@ngrx/effects';
import { Mock, provideMagicalMock } from 'angular-testing-library/src/service_mock';
import { cold } from 'jasmine-marbles';
import { CargarLogin, CargarLoginFail, CargarLoginSuccess } from '../actions/login.actions';

describe('login Effects', () => {
    let effects: LoginEffects;
    let loginService: Mock<LoginService>;
    let actions: Observable<any>;
    const login = {
        item: new LoginMockService().loginMock,
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LoginEffects,
                provideMagicalMock(LoginService),
                provideMockActions(() => actions)
            ],
        });
        actions = TestBed.inject(Actions);
        effects = TestBed.inject(LoginEffects);
        loginService = TestBed.get(LoginService);
    });
    it('Deberia crear el effect login', () => {
        expect(effects).toBeTruthy();
    });
    it('Login Effects Test --> CargarLogin / CargarLoginSuccess', () => {
        const dataRqLogin = {};
        const action = new CargarLogin(dataRqLogin);
        const result = new CargarLoginSuccess(login.item as any);
        actions = of(action);
        const response = cold('-a|', { a: login.item });
        const expected = cold('-b|', { b: result });
        loginService.getLogin.and.returnValue(response);
        expect(effects.cargarLogin$).toBeObservable(expected);
    });
    it('Convenios Effects Test --> CargarLogin / CargarLoginFail', () => {
       const dataRqLogin = {};
       const action = new CargarLogin(dataRqLogin);
       actions = of(action);
       loginService.getLogin.and.returnValue(throwError({
           error: {
               errors: [
                   {
                       code: 801,
                       detail: '¡Lo sentimos!-',
                       id: '20190822110141871871',
                       timestamp: '2019082211012959',
                       title: 'Transacción no autorizada.',
                       status: 500
                   }
               ]
           }
       }));
       const expected = cold('(b|)', { b: new CargarLoginFail({
           code: 801,
           detail: '¡Lo sentimos!-',
           id: '20190822110141871871',
           timestamp: '2019082211012959',
           title: 'Transacción no autorizada.',
           status: 500
       }) });
       expect(effects.cargarLogin$).toBeObservable(expected);
   });
});
