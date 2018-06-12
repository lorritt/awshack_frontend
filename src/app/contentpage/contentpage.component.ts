import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css']
})
export class ContentPageComponent {
  constructor(private menuService: MenuService) { }
  openMenu() {
    console.log("Opening Menu");
    this.menuService.open();
  }
}
