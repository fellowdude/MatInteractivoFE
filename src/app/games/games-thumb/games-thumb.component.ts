import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/core/models/games.model';

@Component({
  selector: 'snr-games-thumb',
  templateUrl: './games-thumb.component.html',
  styleUrls: ['./games-thumb.component.scss'],
})
export class GamesThumbComponent implements OnInit {
  @Input() game: Game;

  constructor() {}

  ngOnInit(): void {}
}
