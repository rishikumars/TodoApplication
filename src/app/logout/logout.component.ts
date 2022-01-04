import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SessionAuthenticationService } from '../services/session-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
username='rishi';
  constructor(private router:Router,private sessionAuthentication:SessionAuthenticationService) { }

  ngOnInit()  {
    
sessionStorage.removeItem('authenticatedUser');
sessionStorage.removeItem('token');
    this.router.navigate([""]);
    }

}
