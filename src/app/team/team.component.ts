import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
   people: Array<Person> = [
    {score: 4123, name: 'Paul'},
    {score: 4121, name: 'Jane'},
    {score: 2141, name: 'Joe'},
    {score: 1224, name: 'Mark'},
    {score: 1002 , name: 'Chris'},
    {score: 941, name: 'Jordan'},
    {score: 412, name: 'Lee'},
    {score: 43, name: 'Adam'}

  ];


  constructor(userData: UserDataService, private router: Router) {
      this.people.push({score: userData.getPoints(), name: userData.getUsername()});
   }

  ngOnInit() {

  }

  goBack(){
    this.router.navigate(['home']);  }

}
