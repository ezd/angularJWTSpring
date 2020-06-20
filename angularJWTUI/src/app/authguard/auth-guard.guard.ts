import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackEndService } from '../services/back-end.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private backEndService:BackEndService, private router:Router  ){}
  canActivate(): boolean{
    let pid=sessionStorage.getItem("pid")
    let token=sessionStorage.getItem("token")
    if(sessionStorage.length>0 
      && sessionStorage.getItem("pid")
      && sessionStorage.getItem("token")
      // && this.backEndService.isValidToken({ token, pid })
      )
      {
        return true
      }else{
        this.router.navigate(['/account/login'])
        return false
      }
  }
  
}
