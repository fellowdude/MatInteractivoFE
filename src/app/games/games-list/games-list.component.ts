import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/core/services/games.service';
import { Game } from 'src/app/core/models/games.model';

@Component({
  selector: 'snr-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getGamesList().subscribe(
      (games) => {
        this.games = games;
      },
      (_err) => {
        // TODO
      },
    );
  }
}
