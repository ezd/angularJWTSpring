import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { AccountResetComponent } from './pages/account-reset/account-reset.component';
import { Resource1Component } from './pages/resource1/resource1.component';
import { AuthGuardGuard } from './authguard/auth-guard.guard';


const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch: "full"},
  {path:"home", component:HomeComponent},
  {path:"account/login",component:LoginPageComponent},
  {path:"account/register",component:UserRegistrationComponent},
  {path:"account/reset",component:AccountResetComponent},
  {path:"Resource1",component:Resource1Component,canActivate:[AuthGuardGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
