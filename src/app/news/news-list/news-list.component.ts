import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/core/models/card.model';
import { NewsServiceAbstract } from 'src/app/core/models/news-service.abstract';
import { mapNewsToCard, NewsCategory } from 'src/app/core/models/news.model';

@Component({
  selector: 'snr-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  cards: Card[] = [];
  page = 1;
  pageLimit = false;
  selectedNewsType: NewsCategory = 'noticias';

  cardDateColor:
    | 'var(--color-dark-blue)'
    | 'var(--color-yellow)'
    | 'var(--color-green)' = 'var(--color-dark-blue)';

  loaded = false;
  id: string;

  constructor(private newsService: NewsServiceAbstract, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'] || '1';

    if(this.id === '1')
      this.getNewsList('noticias');
    if(this.id === '2')
      this.getNewsList('charlas');
    if(this.id === '3')
      this.getNewsList('recursos_educativos');
  }

  getNewsList(type: NewsCategory) {
    if (type !== this.selectedNewsType) {
      this.loaded = false;
      this.selectedNewsType = type;
      this.cards = [];
      this.page = 1;
      this.pageLimit = false;
    }

    switch (type) {
      case 'noticias':
        this.cardDateColor = 'var(--color-dark-blue)';
        this.id = '1';
        break;
      case 'charlas':
        this.cardDateColor = 'var(--color-yellow)';
        this.id = '2';
        break;
      case 'recursos_educativos':
        this.cardDateColor = 'var(--color-green)';
        this.id = '3';
        break;
    }

    this.newsService.getNewsList(type, this.page, 12).subscribe(
      (newsList) => {
        console.log(newsList);
        // Map the result from news list to cards
        if (newsList.data?.length > 0) {
          this.cards = newsList.data.map<Card>((news) =>
            mapNewsToCard(news, newsList.url_attachment),
          );
          this.pageLimit = this.page >= newsList.quantityPage!;
          this.loaded = true;
        }
      },
      (_err) => {
        // TODO
      },
    );
  }
  prevPage() {
    if (this.page <= 1) return;
    this.loaded = false;
    this.page--;
    this.getNewsList(this.selectedNewsType);
  }
  nextPage() {
    if (this.pageLimit) return;
    this.loaded = false;
    this.page++;
    this.getNewsList(this.selectedNewsType);
  }
}
