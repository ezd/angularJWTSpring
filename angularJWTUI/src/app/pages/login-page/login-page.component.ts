import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BackEndService } from 'src/app/services/back-end.service';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: UserModel[];
messege:string;

  private username:string;
  private password:string;
  private authResulte;


  constructor(private backeEndService:BackEndService,private router:Router) { }

    ngOnInit() {
    }

  

  authenticate(){
    // this.messege=this.authService.isAuthenticated(new UserInfo('abc','abc'))?'Authenticated':'not Authenticated';
    //this.testdata=this.backeEndService.getTestdata();

  }
  onFormSubmit(f:NgForm){
    if(f.value && f.value.username && f.value.password){

      const username=f.value.username;
      const password=f.value.password;
      this.backeEndService.authenticate(username,password).subscribe(result=>{
        console.log("result is:",result);
        
        if(result!=null){
          // debugger
          this.authResulte=result
          console.log("Auth result:",this.authResulte);
          
          if(this.authResulte.token!=null && this.authResulte.pid!=null){
            sessionStorage.setItem("token",this.authResulte.token)
            sessionStorage.setItem("pid",this.authResulte.pid)
            this.router.navigate(['home'])
          }
        }
      },
      error=>{
        console.log(error);
        
        this.messege="Invalid user credential.";
      });
    }
    
    
  }

}
