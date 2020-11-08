import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
    return this.http.post("http://run.mocky.io/v3/50336c08-1b1e-48e0-a2aa-5a359e805968", data, {headers: this.httpHeaders});
  }  

  getlogout(data: any){
    this.getHeaders(data);
    return this.http.post("http://run.mocky.io/v3/ee3acbff-0382-48ed-af3d-f68d3c7a7c75", data.dataRq, {headers: this.httpHeaders});
  } 
}
