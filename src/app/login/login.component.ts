import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String = '';
  constructor(private userData: UserDataService) { }

  ngOnInit() {
  }

  loginAction() {
      this.userData.setUsername(this.username);
      alert('Username:' + this.userData.getUsername());
  }

}
