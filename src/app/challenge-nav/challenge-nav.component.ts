import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-challenge-nav',
  templateUrl: './challenge-nav.component.html'
})
export class ChallengeNavComponent implements OnInit {

  title: String  = 'Points';
  constructor(private menuService: MenuService) { }
  openMenu() {
    console.log("Opening Menu");
    this.menuService.open();
  }
  ngOnInit() {
  }

}
