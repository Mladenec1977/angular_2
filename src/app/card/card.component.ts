import {Component, Input, OnInit} from '@angular/core';
import {ICard} from "../interfaces/card.interfaces";

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
    <h3>{{ card?.title }}</h3>
    </div>
  `,
  styles: [`
    .card {
       background: antiquewhite;
       width: 80%;
       padding: 2px;
       margin: 5px auto;
    }
  `]
})
export class CardComponent implements OnInit {

  @Input() card: ICard | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
