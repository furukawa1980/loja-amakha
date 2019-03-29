import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home/home.service"
import { Produtos } from "../home/home.model"

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  produtos: Produtos[]

  currentRate = 5;

  constructor(private home: HomeService) { }

  ngOnInit() {
      this.home.produtos().subscribe(produtos => this.produtos = produtos);
  }

}
