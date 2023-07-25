import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  credentials={

    email:'',
    password:''

  }
  constructor(private loginService:LoginService){}

  OnSubmit(){

    // console.log("Form is submitted");
    if((this.credentials.email!='' && this.credentials.password!='') && (this.credentials.email!=null && this.credentials.password!=null)){
      // console.log("we have to give details");
      this.loginService.generateToken(this.credentials).subscribe((response:any)=>{
          console.log('Login sucess',response.jwtToken);
          this.loginService.loginUser(response.jwtToken)
          window.location.href="/dashboard"

      },
      
      error=>{
        console.log('Login error',error);
      }

      )

    }else{
      console.log("Fields are empty");
    }

  }

}
