import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private username: String;

  constructor() { }

  setUsername(username: String) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }
}
