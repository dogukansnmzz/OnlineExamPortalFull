import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'SinavPortalUI';
  isLogginIn = false;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.isLogginIn = true;
    } else {
      this.isLogginIn = false;
    }
  }


  logout(){
    this.authService.logout();
  }

  
}
