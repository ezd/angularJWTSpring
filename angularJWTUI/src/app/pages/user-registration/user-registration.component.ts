import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackEndService } from 'src/app/services/back-end.service';
import { UserModel } from 'src/app/models/user.model';
import { AlertModel } from 'src/app/models/alert.model';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  repassword:string='';

  userModel:UserModel=new UserModel();
  savedUser=null;
  alertModel:AlertModel=new AlertModel(false,null,null,null);
  constructor(private backEndService:BackEndService,private router:Router) { }

  ngOnInit() {
  }

  onFormSubmit(formData:NgForm){
    
    
    console.log(formData);
    this.userModel=new UserModel();
    this.userModel.email=formData.value.email;
    this.userModel.userPassword=formData.value.userPassword;
    this.userModel.userFullName=formData.value.userFullName;
    this.userModel.phoneNumber=formData.value.phoneNumber;
    this.userModel.reuserPassword=formData.value.userPassword;
    // this.userModel=
    debugger
    this.backEndService.registerUser(this.userModel)
    .subscribe( 
      result=>{ 
        console.log("result",result); 
        this.savedUser=result;
        sessionStorage.setItem("pid",this.savedUser.userPublicId)
        this.router.navigate(['/account/login'])
        //debugger
        //this.alertModel=new AlertModel(true,"Success","User Saved","The user successfully registerd.")
      },
      error=>{
        debugger
        var msg="We are not able to save the user. Please retry later."
        if(error!=null && error.status!=null && error.status==409){
          msg="We are not able to save the user. The email address already used."
        }
        console.error(error);
        this.savedUser=null;
        this.alertModel=new AlertModel(true,"Fail","User Not Saved",msg)
      },
      ()=>{console.log("save completed with:"+this.savedUser);
    })
    

    console.log("the saved value is:"+this.userModel);
    console.log("the saved alert is:"+this.alertModel);
    

    
  }


}
