import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_URL } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private http:HttpClient) { }
handleJWTAuthLogin(username:string, password:string){
        
      return this.http.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
      map(
        data=>{
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', `Bearer ${data.token}`);
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


}
