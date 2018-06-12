import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-nav',
  templateUrl: './challenge-nav.component.html',
  styleUrls: ['./challenge-nav.component.css']
})
export class ChallengeNavComponent implements OnInit {

  title: String  = "Points";
  constructor() { }

  ngOnInit() {
  }

}
