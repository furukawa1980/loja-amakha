import { Component, OnInit} from '@angular/core';
import { HomeService } from './../home/home.service';
import { Sidebar } from "./sidebar.model"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  sidebar: Sidebar[]

  isActive = true

  constructor(private home: HomeService) { }

  ngOnInit() {
      this.home.sidebar().subscribe(sidebar => this.sidebar = sidebar)
  }

}
