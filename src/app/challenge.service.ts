import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {


  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getChallenges() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
      return this.http.get('https://z9kippml0d.execute-api.us-east-1.amazonaws.com/dev/getFull', {headers : headers});
  }
}
