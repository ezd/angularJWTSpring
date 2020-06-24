import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { AccountResetComponent } from './pages/account-reset/account-reset.component';
import { Resource1Component } from './pages/resource1/resource1.component';
import { BackEndService } from './services/back-end.service';
import { AuthGuardGuard } from './authguard/auth-guard.guard';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { RequestIntercepterService } from './services/request-intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    HomeComponent,
    UserRegistrationComponent,
    AccountResetComponent,
    Resource1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [BackEndService,AuthGuardGuard
    , {provide: HTTP_INTERCEPTORS, useClass: RequestIntercepterService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
