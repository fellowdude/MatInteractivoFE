import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { Card } from 'src/app/core/models/card.model';

@Component({
  selector: 'snr-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss'],
})
export class HomeNewsComponent implements OnInit {
  cardCharla: Card;
  cardNoticia: Card;
  cardRecurso: Card;

  loaded = false;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNewsSalientAll().subscribe(
      (res) => {
        this.cardCharla = res.charlasNews!;
        this.cardNoticia = res.noticiasNews!;
        this.cardRecurso = res.recursosNews!;

        console.log(this.cardCharla);
        console.log(this.cardNoticia);
        console.log(this.cardRecurso);
        this.loaded = true;
      },
      (_err) => {
        // TODO
      },
    );
  }
}
