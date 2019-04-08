import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from "@angular/animations"

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snackbar', [
        state('hidden', style({
          opacity: 0,
          top:0
        })),
        state('visible', style({
          opacity: 1,
          top:'260px'
        })),
        transition('hidden => visible', animate('500ms 0s ease-in')),
        transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Item adicionado no carrinho!'

  snackVisiblity: string = 'hidden'

  constructor() { }

  ngOnInit() {
  }

  toggleSnack() {
    this.snackVisiblity = this.snackVisiblity === 'hidden' ? 'visible' : 'hidden'
  }

}
