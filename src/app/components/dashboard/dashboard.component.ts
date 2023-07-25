import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private userService:UserService, private loginServices:LoginService){}

  // ngOnInit(): void {
  //   this.getUser();
  // }
  


  // getUser(){
  //   this.userService.getUser().subscribe(
  //     email=>{
  //       console.log(email);
        
  //     },
  //     error => {
  //       console.log(error);
        
  //     }
  //   )
  // }

  getUser(){
    this.userService.getUser().subscribe(
      
      email=>{
        console.log(email);
        
      },
      error => {
        console.log(error);
        
      }
      // (user:any)=>{
      //   this.loginServices.setUser(user)
      //   console.log(user);
        
      // }
    )
  }

  }


