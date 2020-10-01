import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerStats, StatsService } from '../shared/services/stats.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  playerStats$: Observable<PlayerStats[]>;

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.playerStats$ = this.statsService.getAll();
  }

  getPlayerStats() {}
}
