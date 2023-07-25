import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
  
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl='http://localhost:8081';

  constructor(private http:HttpClient, private loginService: LoginService) { }

  token = this.loginService.getToken();
  
  

  getCurrentUser(){
    console.log(this.token);
    return this.http.get(`${this.baseUrl}/home/current-user`, )
  }

  getUser(){
    console.log(this.token);
    return this.http.get(`${this.baseUrl}/home/users`, )
  }
}
