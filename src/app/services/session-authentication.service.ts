import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SessionAuthenticationService {

  constructor() { }

  sessionAuthenticate(username:string,password:string){
    if((username==='rishi' && password==='rishi') || (username==='madhu' && password==='madhu')){
        sessionStorage.setItem('authenticatedUser', username);
        return true;
    }
    return false;
  }
  isUserLoggedIn(){
    return sessionStorage.getItem('authenticatedUser')!=null;
  }
  getLoggedInUsername():string{
    const username=sessionStorage.getItem('authenticatedUser');
    return username || "";
  }
}
