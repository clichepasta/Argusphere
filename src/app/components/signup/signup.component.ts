import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  credentials = {
    name: '',
    email: '',
    password: '',
    gender: ''

  }
  comformPassword = '';

  constructor(private loginService: LoginService) { }

  onSubmit() {

    if ((this.credentials.email != '' && this.credentials.password != '' && this.credentials.name != '' && this.comformPassword != '' && this.credentials.gender != '') && (this.credentials.email != null && this.credentials.password != null && this.credentials.name != null && this.comformPassword != null && this.credentials.gender != null) && (this.credentials.password == this.comformPassword)) {
      // console.log("we have to give details");
      
     
      
      
      
      this.loginService.createUser(this.credentials).subscribe(
        (res) => {
          console.log(res);
          window.location.href=""
          
        },
        (error: HttpErrorResponse) => {
          console.error(error);

        }
      )
      

      
      // console.log("user created");


    } else {
      console.log("Fields are empty");
    }

  }




}
