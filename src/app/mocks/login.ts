import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginMockService {
    loginMock = {
      token: 'qiowAS9ndnjLKSS32LaLAPlDKL2'
    };
    httpHeaders: HttpHeaders;
}
