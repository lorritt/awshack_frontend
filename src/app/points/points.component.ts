import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html'
})
export class PointsComponent implements OnInit {

  constructor(private userData: UserDataService) { }

  ngOnInit() {
  }

}
