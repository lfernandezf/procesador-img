import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpHeaders: HttpHeaders;


  constructor( private http: HttpClient) { 
    this.httpHeaders = new HttpHeaders(); 
  }

  getHeaders(data){
    console.log(data);
    this.httpHeaders = new HttpHeaders({
      'Content-type': 'application/json'
    }); 
  }  
  
  getLogin(data: any){
    this.getHeaders(data);   
    return this.http.post(environment.urlLogin, data, {headers: this.httpHeaders});
  }  

  getlogout(data: any){
    this.getHeaders(data);
    return this.http.post(environment.urlLogout, data.dataRq, {headers: this.httpHeaders});
  } 
}
