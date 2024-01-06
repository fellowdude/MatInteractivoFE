import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/core/services/games.service';
import { Card } from 'src/app/core/models/card.model';

@Component({
  selector: 'snr-home-games',
  templateUrl: './home-games.component.html',
  styleUrls: ['./home-games.component.scss'],
})
export class HomeGamesComponent implements OnInit {
  cards: Card[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getGamesList(2).subscribe(
      (gamesList) => {
        // Map the result from games list to cards
        this.cards = gamesList.map<Card>((game) => ({
          id: game.id,
          title: game.title,
          description: game.description,
          date: game.date,
          imgUrls: game.imgUrls,
          subtitle: game.subtitle,
        }));
      },
      (_err) => {
        // TODO
      },
    );
  }
}
