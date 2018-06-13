import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commute',
  templateUrl: './commute.component.html',
  styleUrls: ['./commute.component.css']
})
export class CommuteComponent implements OnInit {
  colors: string[] = ['Bike', 'Car', 'Tube', 'Train', 'Bus'];
  homePostcode: String = '';
  workPostcode: String = '';

  constructor() { }

  ngOnInit() {
  }

}
