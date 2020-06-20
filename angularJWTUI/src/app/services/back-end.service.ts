import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertModel } from '../models/alert.model';
import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {
  // isValidToken(token: string, pid:string):boolean {
  //   this.isValidTokenAndPid(token,pid).subscribe(
  //     res=>{
  //       return res;
  //     },
  //     error=>{
  //       return false;
  //     }
  //   )
  //   return false;
  // }
  
  private usersBaseUrl: string;
  private resourceBaseUrl: string;
  
  
  constructor(private httpClinet:HttpClient) { 
    
    this.usersBaseUrl = environment.baseUserAuthUrl;
    this.resourceBaseUrl=environment.resourceUrl
  }
  
  // public findAllUsers(): Observable<UserModel[]> {
  //   return this.httpClinet.get<UserModel[]>(this.usersBaseUrl);
  // }

  public registerUser(user: UserModel):Observable<Object> {
    debugger;
      return this.httpClinet.post(this.usersBaseUrl+'/createUser',user);
  // 
}
// public isValidTokenAndPid(token,pid):Observable<Object> {
//   debugger;
//     return this.httpClinet.post(this.usersBaseUrl+'/validate',{'token':token,'pid':pid});
// // 
// }

public authenticate(username:string,password:string):Observable<Object>{
  debugger
  const userlogininfo={"username": username,"password": password}
  return this.httpClinet.post(this.usersBaseUrl+'/login',userlogininfo);
}


public getResource(resourceName:string):Observable<Object> {
  
  debugger
  console.log("the session storated:",sessionStorage.getItem('pid'))
  return this.httpClinet.get(this.resourceBaseUrl+"/"+resourceName);
// 
}





  
 
 
  
}
