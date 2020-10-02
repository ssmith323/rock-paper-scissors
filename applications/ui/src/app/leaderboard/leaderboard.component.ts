import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerStats, StatsService } from '../shared/services/stats.service';
import { ColumnDefinition } from '../shared/table/table.component';
import { LeaderboardService } from './leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  providers: [LeaderboardService],
})
export class LeaderboardComponent implements OnInit {
  playerStats$: Observable<PlayerStats[]>;
  columns: ColumnDefinition<PlayerStats>[];

  constructor(
    private leaderboardService: LeaderboardService,
    private statsService: StatsService,
  ) {}

  ngOnInit(): void {
    this.columns = this.leaderboardService.getColumns();
    this.getPlayerStats();
  }

  getPlayerStats(): void {
    this.playerStats$ = this.statsService.getAll();
  }
}
