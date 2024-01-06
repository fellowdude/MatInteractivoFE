import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/core/models/card.model';

@Component({
  selector: 'snr-home-game-article',
  templateUrl: './home-game-article.component.html',
  styleUrls: ['./home-game-article.component.scss'],
})
export class HomeGameArticleComponent implements OnInit {
  @Input() card: Card;
  @Input() link = '/juegos';
  @Input() color: string;
  @Input() isInverted = false;

  constructor() {}

  ngOnInit(): void {}
}
