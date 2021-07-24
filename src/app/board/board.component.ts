import {Component, Input, OnInit} from '@angular/core';
import {ILists} from "../interfaces/lists.interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  title = 'Моя тестовая доска';
  lists: ILists [] = [
    {
      id: 1,
      title: "Планы",
      cards: [
        {id: 1, title: "помыть кота"},
        {id: 2, title: "приготовить суп"},
        {id: 3, title: "сходить в магазин"}
      ]
    },
    {
      id: 2,
      title: "В процессе",
      cards: [
        {id: 4, title: "посмотреть сериал"}
      ]
    },
    {
      id: 3,
      title: "Сделано",
      cards: [
        {id: 5, title: "сделать домашку"},
        {id: 6, title: "погулять с собакой"}
      ]
    }
  ]


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('board_id'));
    console.log(productIdFromRoute);
  }

}
