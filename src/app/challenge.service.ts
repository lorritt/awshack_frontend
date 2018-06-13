import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {


  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getChallenges() {
      return this.http.get('https://vtdnub7e9g.execute-api.us-east-1.amazonaws.com/dev/getFull');
  }
}
