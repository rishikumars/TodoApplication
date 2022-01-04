import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionAuthenticationService } from '../services/session-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
username=this.sessionAuthenticationService.getLoggedInUsername();
  constructor(private activatedRoute:ActivatedRoute,private sessionAuthenticationService:SessionAuthenticationService) { }

  ngOnInit(): void {
   // this.username=this.activatedRoute.snapshot.params['name'];
  }

}
