import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { OnsNavigator } from 'ngx-onsenui';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html'
})
export class PointsComponent implements OnInit {

  constructor(private userData: UserDataService) { }

  ngOnInit() {
  }

  viewTeams() {
    // this._navigator.element.pushPage(TeamComponent, {animation: 'slide', data: {aaa: 'bbb'}});
  }
}
