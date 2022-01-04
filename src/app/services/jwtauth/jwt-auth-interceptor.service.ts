import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtAuthenticationService } from './jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthInterceptorService implements HttpInterceptor {

  
  constructor(private jwtAuthService:JwtAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
   let bearerToken=this.jwtAuthService.getToken();
   let username=this.jwtAuthService.getLoggedInUsername();
   if(bearerToken && username){
    req=req.clone({
      setHeaders:{
        Authorization : bearerToken
      }
    }) 
   }
   return next.handle(req);
  }
}
