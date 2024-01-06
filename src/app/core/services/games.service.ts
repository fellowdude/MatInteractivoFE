import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Game } from '../models/games.model';
import { games } from '../static/games.static';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor() {}

  getGamesList(quantity = 8): Observable<Game[]> {
    return of(games).pipe(take(quantity));
  }
  getGame(id: string): Observable<Game> {
    const game = games.find((game) => game.id === id);
    return game ? of(game) : throwError('Game id could not be found');
  }
}
