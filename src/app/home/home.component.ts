import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service"
import { Produtos } from "./home.model"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  currentRate = 5;

  constructor() { }

  ngOnInit() {
   

  }

}
