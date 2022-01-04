import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionAuthenticationService } from '../services/session-authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//username=this.sessionAuthenticationService.getLoggedInUsername();
  constructor(public sessionAuthenticationService: SessionAuthenticationService,private router:Router) { }

  ngOnInit(): void {
}
}