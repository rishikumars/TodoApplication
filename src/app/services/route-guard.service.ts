import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SessionAuthenticationService } from './session-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private sessionAuthenticationService: SessionAuthenticationService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
   if(this.sessionAuthenticationService.isUserLoggedIn()){return true;}
   else{this.router.navigate([""]);
  return true;}
  }

}
