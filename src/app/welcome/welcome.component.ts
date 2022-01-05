import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtAuthenticationService } from '../services/jwtauth/jwt-authentication.service';
import { SessionAuthenticationService } from '../services/session-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
username=this.jwtAuthService.getLoggedInUsername();
  constructor(private activatedRoute:ActivatedRoute,private jwtAuthService:JwtAuthenticationService) { }

  ngOnInit(): void {
   // this.username=this.activatedRoute.snapshot.params['name'];
  }

}
