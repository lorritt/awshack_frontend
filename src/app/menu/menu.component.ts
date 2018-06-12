import { Component, OnInit } from '@angular/core';
import {SidePageComponent} from '../sidepage/sidepage.component';
import {ContentPageComponent} from '../contentpage/contentpage.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sidePage = SidePageComponent;
  contentPage = ContentPageComponent;
  constructor() { }

  ngOnInit() {
  }

}
