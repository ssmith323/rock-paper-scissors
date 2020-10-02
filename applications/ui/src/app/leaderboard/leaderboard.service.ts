import { Injectable } from '@angular/core';

import { PlayerStats } from '../shared/services/stats.service';
import { ColumnDefinition } from '../shared/table/table.component';

@Injectable()
export class LeaderboardService {
  getColumns(): ColumnDefinition<PlayerStats>[] {
    return [
      {
        def: 'player',
        header: 'Player',
        cell: (element) => `${element.player.name}`,
      },
      {
        def: 'winningPercentage',
        header: 'Winning Percentage',
        cell: (element) =>
          `${
            element.gamesWon /
            (element.gamesWon + element.gamesLost + element.gamesTied)
          }`,
      },
      {
        def: 'numberOfGames',
        header: 'Number of Games',
        cell: (element) =>
          `${element.gamesWon + element.gamesLost + element.gamesTied}`,
      },
      {
        def: 'wins',
        header: 'Wins',
        cell: (element) => `${element.gamesWon}`,
      },
      {
        def: 'losses',
        header: 'Losses',
        cell: (element) => `${element.gamesLost}`,
      },
      {
        def: 'ties',
        header: 'Ties',
        cell: (element) => `${element.gamesTied}`,
      },
      {
        def: 'rocksThrown',
        header: 'Rocks Thrown (%)',
        cell: (element) =>
          `${
            element.rocksThrown /
            (element.gamesWon + element.gamesLost + element.gamesTied)
          }`,
      },
      {
        def: 'papersThrown',
        header: 'Papers Thrown (%)',
        cell: (element) =>
          `${
            element.papersThrown /
            (element.gamesWon + element.gamesLost + element.gamesTied)
          }`,
      },
      {
        def: 'scissorsThrown',
        header: 'Scissors Thrown (%)',
        cell: (element) =>
          `${
            element.scissorsThrown /
            (element.gamesWon + element.gamesLost + element.gamesTied)
          }`,
      },
    ];
  }
}
