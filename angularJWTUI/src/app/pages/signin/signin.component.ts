import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackEndService } from 'src/app/services/back-end.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email="";
  password="";
  authResulte;
  messege:string;

  constructor(private backeEndService:BackEndService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form);
    const username=form.value.email;
      const password=form.value.password;
      this.backeEndService.authenticate(username,password).subscribe(result=>{
        console.log("result is:",result);
        
        if(result!=null){
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
