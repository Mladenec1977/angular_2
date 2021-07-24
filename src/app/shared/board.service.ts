import {Injectable} from "@angular/core";
import {IBoard} from "../interfaces/board.interface";

@Injectable({providedIn: 'root'})
export class BoardService {
  public boards: IBoard [] = [
    { id: 1, title: 'покупки' },
    { id: 2, title: 'подготовка к свадьбе' },
    { id: 3, title: 'разработка интернет-магазина' },
    { id: 4, title: 'курс по продвижению в соцсетях' }
  ]
}
