import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../services/basic-authentication.service';
import { JwtAuthenticationService } from '../services/jwtauth/jwt-authentication.service';
import { SessionAuthenticationService } from '../services/session-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
showError=false;
username: string='';
password: string='';
response:Object | undefined;
  constructor(private router:Router,
    private sessionAuthenticationService:SessionAuthenticationService,
    private basicAuthService:BasicAuthenticationService,
    private jwtAuthService:JwtAuthenticationService) { }

  ngOnInit(): void {
  }
authenticate(){
  if(this.sessionAuthenticationService.sessionAuthenticate(this.username,this.password))
  {  
    this.router.navigate(['welcome',this.username]);
  }
  else{
    this.showError=true;
  }
  console.log("login works");
}

basicAuthenticate(){
this.basicAuthService.handleBasicAuthLogin(this.username,this.password).subscribe(
  response=>{
    this.router.navigate(['welcome',this.username]);  
  },
  error=>{
    this.showError=true;  
  }
  )
}


jwtAuthenticate(){
  this.jwtAuthService.handleJWTAuthLogin(this.username,this.password).subscribe(
    response=>{
      this.router.navigate(['welcome',this.username]);  
    },
    error=>{
      this.showError=true;  
    }
    )
  }
}
