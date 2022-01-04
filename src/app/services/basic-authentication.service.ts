import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_URL } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }
handleBasicAuthLogin(username:string, password:string){
  let basicAuthHeaderString=this.constructAuthorizationHeader(username,password);
  let header=new HttpHeaders({
    Authorization:basicAuthHeaderString
  })
return this.http.get(`${API_URL}/basicauthlogin`,{headers:header}).pipe(
 map(
   data=>{
    sessionStorage.setItem('authenticatedUser', username);
    sessionStorage.setItem('token', basicAuthHeaderString);
    return data;
   }
 )
)
}

isUserLoggedIn(){
  return sessionStorage.getItem('authenticatedUser')!=null;
}
getLoggedInUsername():string{
  const username=sessionStorage.getItem('authenticatedUser');
  return username || "";
}
getToken(){
  if(this.isUserLoggedIn())
  return sessionStorage.getItem('token');
  else
  return null;
}

 constructAuthorizationHeader(username:string, password:string): string {
  return 'Basic '+ window.btoa(username+':'+password);
}

}
