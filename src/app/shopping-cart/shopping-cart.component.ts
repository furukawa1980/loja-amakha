import { Component, OnInit } from '@angular/core';
import { Produtos } from "../home/home.model"
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  produtos: Produtos[]

  constructor(private home: HomeService) { }

  ngOnInit() {
    this.home.produtos().subscribe(produtos => this.produtos = produtos);
  }

}
