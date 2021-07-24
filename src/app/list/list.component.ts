import {Component} from '@angular/core';
import {BoardService} from "../shared/board.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  title = 'Мои доски';
  constructor(public boardService: BoardService) {
    console.log(boardService.boards?.length)
  }
}
