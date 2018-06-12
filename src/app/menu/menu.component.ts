import { Component, OnInit, ViewChild } from '@angular/core';
import {SidePageComponent} from '../sidepage/sidepage.component';
import { MenuService} from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sidePage = SidePageComponent;
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    this.menuService.menu$.subscribe(() => this.splitter.nativeElement.side.open());
  }
  ngOnInit() {
  }

}
