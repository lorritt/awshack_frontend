import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commute',
  templateUrl: './commute.component.html',
  styleUrls: ['./commute.component.css']
})
export class CommuteComponent implements OnInit {
  colors: string[] = ['Bike', 'Car', 'Tube', 'Train', 'Bus'];
  homePostcode: String = '';
  workPostcode: String = '';
  selectedModifier: String = '7:00';
  modifiers = [
    {value: '5', label: '5:00'},
    {value: '6', label: '6:00'},
    {value: '7', label: '7:00'},
    {value: '8', label: '8:00'},
    {value: '9', label: '9:00'},
    {value: '10', label: '10:00'},
    {value: '11', label: '11:00'},
    {value: '12', label: '12:00'},
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goBack(){
    this.router.navigate(['home']);
  }
}
