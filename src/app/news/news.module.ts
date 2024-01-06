import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewsComponent } from './news.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsListComponent } from './news-list/news-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsServiceAbstract } from '../core/models/news-service.abstract';
import { NewsService } from '../core/services/news.service';

@NgModule({
  declarations: [NewsComponent, NewsArticleComponent, NewsListComponent],
  imports: [CommonModule, SharedModule, HttpClientModule, NewsRoutingModule],
  providers: [{ provide: NewsServiceAbstract, useExisting: NewsService }],
})
export class NewsModule {}
