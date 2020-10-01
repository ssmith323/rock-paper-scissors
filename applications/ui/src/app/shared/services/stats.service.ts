import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Player } from './player.service';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private url = `${environment.baseUrl}/stats`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<PlayerStats[]> {
    return this.http.get<PlayerStats[]>(this.url);
  }
}

export interface PlayerStats {
  player: Player;
  gamesWon: number;
  gameLost: number;
  gameTied: number;
  rocksThrown: number;
  papersThrown: number;
  scissorsThrown: number;
}
