import { Observable } from 'rxjs';
import { GetNews } from './news.model';
import { GetApiResponse } from './response.model';

export abstract class NewsServiceAbstract {
  abstract getNewsList(
    category: string,
    page: number,
    quantity?: number,
  ): Observable<GetApiResponse<GetNews[]>>;
}
