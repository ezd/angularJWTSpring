import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { AccountResetComponent } from './pages/account-reset/account-reset.component';
import { Resource1Component } from './pages/resource1/resource1.component';
import { AuthGuardGuard } from './authguard/auth-guard.guard';
import { SigninComponent } from './pages/signin/signin.component';
import { ImageuploadComponent } from './components/imageupload/imageupload.component';
import { UploaderComponent } from './components/uploader/uploader.component';


const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch: "full"},
  {path:"home", component:HomeComponent},
  {path:"account/register",component:UserRegistrationComponent},
  {path:"account/signin",component:SigninComponent},
  {path:"account/reset",component:AccountResetComponent},
  {path:"Resource1",component:Resource1Component,canActivate:[AuthGuardGuard]},
  {path:"upload",component:ImageuploadComponent},
  {path:"uploadmultiple",component:UploaderComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
