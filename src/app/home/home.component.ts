import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public challenges;
  constructor(private userData: UserDataService, private challengeService: ChallengeService) { }

  ngOnInit() {
  }

  getChallenge() {
       this.challengeService.getChallenges().subscribe(
        data => { this.challenges = '{"name":"test,"points":5}'; },
        err => console.error(err),
            () => console.log('done loading challenges')
          );
  }

}
