import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Attempto Team';

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

}
