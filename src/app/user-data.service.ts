import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private username: String;

  constructor() { }

  setUsername(username: String) {
    this.username = username;
    localStorage.setItem('username', username.toString());
  }

  getUsername() {
    if (localStorage.getItem('username') != null) {
      return localStorage.getItem('username');
    }
  }

  logout() {
    localStorage.clear();
  }
}
