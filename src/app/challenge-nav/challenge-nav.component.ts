import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-nav',
  templateUrl: './challenge-nav.component.html'
})
export class ChallengeNavComponent implements OnInit {

  title: String  = 'Points';
  constructor() { }

  ngOnInit() {
  }

}
