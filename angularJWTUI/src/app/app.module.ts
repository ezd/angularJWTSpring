import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { AccountResetComponent } from './pages/account-reset/account-reset.component';
import { Resource1Component } from './pages/resource1/resource1.component';
import { BackEndService } from './services/back-end.service';
import { AuthGuardGuard } from './authguard/auth-guard.guard';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { RequestIntercepterService } from './services/request-intercepter.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SigninComponent } from './pages/signin/signin.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageuploadComponent } from './components/imageupload/imageupload.component';
import { AppFirebaseModule } from './app-firebase.module';
import { DropZoneDirective } from './components/drop-zone.directive';
import { UploaderTaskComponent } from './components/uploader-task/uploader-task.component';
import { UploaderComponent } from './components/uploader/uploader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserRegistrationComponent,
    AccountResetComponent,
    Resource1Component,
    SigninComponent,
    ImageuploadComponent,
    DropZoneDirective,
    UploaderTaskComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    FlexLayoutModule,
    AppFirebaseModule

  ],
  providers: [BackEndService,AuthGuardGuard
    , {provide: HTTP_INTERCEPTORS, useClass: RequestIntercepterService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
