import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  url = "http://localhost:8081"

  constructor(private http: HttpClient) { }

  generateToken(credentials: any) {
    // console.log(this.http.post(`${this.url}/auth/login`,credentials));
    return this.http.post(`${this.url}/auth/login`, credentials);
  }

  createUser(credentials:any){
    return this.http.post(`${this.url}/auth/create-user`, credentials)
  }

  //user login
  loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user))
  }
  //to check user is logged in or not
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false;
    }
    else {
      return true;
    }
  }
  //for user logout
  logOut() {
    localStorage.removeItem('token');
    console.log("token removed")
    return true;
  }

  //for get token
  getToken() {
    return localStorage.getItem("token");
  }
}
