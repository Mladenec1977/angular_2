import {Component, Input, OnInit} from '@angular/core';
import {ILists} from "../interfaces/lists.interfaces";

@Component({
  selector: 'app-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.scss']
})
export class ListBoardComponent implements OnInit {

  @Input() lists: ILists | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
