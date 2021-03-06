import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Player } from './player.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private url = `${environment.baseUrl}/game`;

  constructor(private http: HttpClient) {}

  playRank(game: Game): Observable<Game> {
    return this.http.post<Game>(this.url, game);
  }

  playPractice(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.url}?practice=true`, game);
  }
}

export interface Game {
  id?: number;
  player1: Player;
  player2: Player;
  player1Throw: string;
  player2Throw: string;
  outcome?: string;
}
