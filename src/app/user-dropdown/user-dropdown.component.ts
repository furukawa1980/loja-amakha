import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss'],
  providers: [NgbDropdownConfig]
})
export class UserDropdownComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {

    config.placement = 'bottom-right';

  }

  ngOnInit() {
  }

}
