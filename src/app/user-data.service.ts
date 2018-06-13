import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private username: String;
  private points: number;

  constructor() {
    this.points = 1;
  }

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
  getPoints() {
     return this.points;
  }
  setPoints(points: number) {
    this.points = points;
  }
}
