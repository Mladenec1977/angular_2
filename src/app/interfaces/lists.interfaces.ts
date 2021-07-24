import {ICard} from "./card.interfaces";

export interface ILists {
  id: number,
  title: string,
  cards: ICard []
}
