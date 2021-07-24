import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from "./board/board.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {
    path: '', component: ListComponent
  },
  {
    path: 'board', component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }