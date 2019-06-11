import { Component, OnInit } from '@angular/core';
import { toggleAnimations, collapseAnimations } from '../animations'

@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.scss'],
  animations: [
      toggleAnimations,
      collapseAnimations
  ]
})

export class ResponsiveMenuComponent implements OnInit {

  state: string = 'close';

  show = true;
  divName = '';
  count = 0;

  animateMe() {
    this.state = (this.state === 'close' ? 'open' : 'close');
  }

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  animationDone() {
    this.count++;
    if (this.count < 2) {
      this.show = !this.show;
    }
  }

  toggle(myDiv) {
    this.count = 0;
    this.show = !this.show;
    if (this.divName === myDiv) {
      this.divName = '';
    } else {
      this.divName = myDiv;
    }
  }

  ngOnInit() {
  }

}
