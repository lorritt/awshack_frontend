import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { ChallengeService } from '../challenge.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public challenges;
  constructor(private userData: UserDataService, private challengeService: ChallengeService, private router: Router) { }

  ngOnInit() {
  }

  getChallenge() {
       this.challengeService.getChallenges().subscribe(
        data => { this.challenges = data; },
        err => console.error(err),
            () => console.log('done loading challenges')
          );
  }

  goToTeam() {
    this.router.navigate(['team']);
  }

  goToCommute() {
    this.router.navigate(['commute']);
  }

  completeChallenge(points: number) {
    alert('points ' + points);
    this.userData.setPoints(points);
  }

}
