import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from '../services/jwtauth/jwt-authentication.service';
import { SessionAuthenticationService } from '../services/session-authentication.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
username=this.jwtAuthenticationService.getLoggedInUsername();
  constructor(private jwtAuthenticationService: JwtAuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
takeMeHome(){
if(this.jwtAuthenticationService.isUserLoggedIn()){
  this.router.navigate(['welcome', this.username]);
}
else
this.router.navigate([""]);
}
}
