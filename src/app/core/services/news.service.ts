import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { GetNews, mapNewsToCard } from '../models/news.model';
import { NewsServiceAbstract } from '../models/news-service.abstract';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetApiResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService extends NewsServiceAbstract {
  constructor(private api: ApiService) {
    super();
  }

  getNewsList(
    category: string,
    page: number,
    quantity = 9,
  ): Observable<GetApiResponse<GetNews[]>> {
    return this.api.get(`/post/category/${category}/${quantity}/${page}`);
  }

  getNewsArticle(friendlyUrl: string): Observable<GetNews> {
    return this.api.get(`/post/detail/${friendlyUrl}`);
  }

  getNewsSalient(category: string): Observable<GetApiResponse<GetNews[]>> {
    return this.api.get(`/post/salient/${category}`);
  }

  getNewsSalientAll() {
    return zip(
      this.getNewsSalient('charlas'),
      this.getNewsSalient('noticias'),
      this.getNewsSalient('recursos_educativos'),
    ).pipe(
      map(([charlasNews, noticiasNews, recursosNews]) => ({
        charlasNews:
          charlasNews.data.length > 0
            ? mapNewsToCard(charlasNews.data[0], charlasNews.url_attachment)
            : undefined,
        noticiasNews:
          noticiasNews.data.length > 0
            ? mapNewsToCard(noticiasNews.data[0], noticiasNews.url_attachment)
            : undefined,
        recursosNews:
          recursosNews.data.length > 0
            ? mapNewsToCard(recursosNews.data[0], recursosNews.url_attachment)
            : undefined,
      })),
    );
  }
}
