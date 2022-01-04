import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionAuthenticationService } from '../services/session-authentication.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
username='rishi';
  constructor(private sessionAuthentication: SessionAuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
takeMeHome(){
if(this.sessionAuthentication.isUserLoggedIn()){
  this.router.navigate(['welcome', this.username]);
}
else
this.router.navigate([""]);
}
}
