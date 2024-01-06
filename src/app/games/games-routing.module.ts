import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesArticleComponent } from './games-article/games-article.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      {
        path: '',
        component: GamesListComponent,
      },
      {
        path: ':articleId',
        component: GamesArticleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
