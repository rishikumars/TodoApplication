import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor(private basicAuthService:BasicAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
   let basicAuthHeaderString=this.basicAuthService.getToken();
   let username=this.basicAuthService.getLoggedInUsername();
   if(basicAuthHeaderString && username){
    req=req.clone({
      setHeaders:{
        Authorization : basicAuthHeaderString
      }
    }) 
   }
   return next.handle(req);
  }
}
