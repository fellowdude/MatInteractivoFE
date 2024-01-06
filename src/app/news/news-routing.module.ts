import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsArticleComponent } from './news-article/news-article.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: NewsListComponent,
      },
      {
        path: ':articleId',
        component: NewsArticleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
