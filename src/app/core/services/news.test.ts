import { Injectable } from '@angular/core';
import { GetNews } from '../models/news.model';
import { Observable, of } from 'rxjs';
import { NewsServiceAbstract } from '../models/news-service.abstract';
import { newsList } from '../mockups/news.mockup';
import { ApiServiceTest } from './api.test';
import { map, take } from 'rxjs/operators';
import { GetApiResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class NewsServiceTest extends NewsServiceAbstract {
  constructor(private api: ApiServiceTest) {
    super();
  }

  getNewsList(
    _category: string,
    _page: number,
    quantity = 10,
  ): Observable<GetApiResponse<GetNews[]>> {
    return of(newsList).pipe(
      take(quantity),
      this.api.debug(),
      map((x) => ({ data: x, url_attachment: '' })),
    );
  }
}
