import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String = '';
  constructor(private userData: UserDataService, private router: Router) { }

  ngOnInit() {
  }

  loginAction() {
      this.userData.setUsername(this.username);
      this.router.navigate(['home']);
  }

}
