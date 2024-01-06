import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetNews } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/services/news.service';
@Component({
  selector: 'snr-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss'],
})
export class NewsArticleComponent implements OnInit {
  now = new Date();
  article: GetNews;
  friendlyUrl: string;
  id: number = 1;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
  ) {}

  ngOnInit(): void {
    this.friendlyUrl = this.route.snapshot.params['articleId'];
    this.id = Number(this.route.snapshot.queryParams['id']);
    this.newsService.getNewsArticle(this.friendlyUrl).subscribe((res) => {
      this.article = res;
      console.log(this.article);
    });
  }

  sanitize(text: string) {
    return text;
  }
}
