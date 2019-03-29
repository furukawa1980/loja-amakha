import { Component, OnInit } from '@angular/core';
import { Produtos } from "../home/home.model"
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-order-request',
  templateUrl: './order-request.component.html',
  styleUrls: ['./order-request.component.scss']
})
export class OrderRequestComponent implements OnInit {

  produtos: Produtos[]

  constructor(private home: HomeService) { }

  ngOnInit() {
    this.home.produtos().subscribe(produtos => this.produtos = produtos);
  }

}
