import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home/home.service"
import { Produtos } from "../home/home.model"

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  produtos: Produtos[]

  constructor(private home: HomeService) { }

  ngOnInit() {
      this.home.produtos().subscribe(produtos => this.produtos = produtos);
  }

}
