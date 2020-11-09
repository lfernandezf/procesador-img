import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
    let service: LoginService;
    let injector: TestBed;
    let httpMock: HttpTestingController;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
            LoginService
        ]
      });
      injector = getTestBed();
      httpMock = injector.inject(HttpTestingController);
      service = TestBed.inject(LoginService);
    });
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
    it('Debe obtener los datos de login',  inject([LoginService], () => {
      const mockResponse = {
        token: 'qiowAS9ndnjLKSS32LaLAPlDKL2'
      };
      const url = "http://run.mocky.io/v3/50336c08-1b1e-48e0-a2aa-5a359e805968";
      service.getLogin({}).subscribe(result => {
        expect(result['token']).toEqual('qiowAS9ndnjLKSS32LaLAPlDKL2');
      });
      httpMock.expectOne(url).flush(mockResponse);
    }));
});
