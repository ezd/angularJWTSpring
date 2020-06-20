import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class RequestIntercepterService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      debugger
      let token=sessionStorage.getItem('token')
      let pid=sessionStorage.getItem('pid')
      let tokenizeRequest=null
      if(token!=null && pid!=null){
        tokenizeRequest=req.clone({
          headers: req.headers.set('Authorization', 'Bearer '+token).append('pid',pid)
        })
      }else if(pid!=null){
        tokenizeRequest=req.clone({
          headers: req.headers.append('pid',pid)
        })
      }
      else{
        tokenizeRequest=req.clone();
      }
      
      
    return next.handle(tokenizeRequest);
  }

  constructor() { }
}
