import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service"
import { Produtos } from "./home.model"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: Produtos[]

  currentRate = 5;

  constructor(private home: HomeService) { }

  ngOnInit() {
      this.home.produtos().subscribe(produtos => this.produtos = produtos);
  }

}
