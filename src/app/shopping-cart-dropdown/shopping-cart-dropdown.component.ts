import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shopping-cart-dropdown',
  templateUrl: './shopping-cart-dropdown.component.html',
  styleUrls: ['./shopping-cart-dropdown.component.scss'],
  providers: [NgbDropdownConfig]
})
export class ShoppingCartDropdownComponent implements OnInit {

  constructor(config: NgbDropdownConfig) { 

    config.placement = 'bottom-right';

  }

  ngOnInit() {
  }

}
