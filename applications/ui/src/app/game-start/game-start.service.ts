import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BasicOption } from '../shared/form-field/select/select.component';
import { Game, GameService } from '../shared/services/game.service';
import { Player, PlayerService } from '../shared/services/player.service';

@Injectable({
  providedIn: 'root',
})
export class GameStartService {
  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
    private gameService: GameService,
  ) {}

  getForm(): FormGroup {
    return this.fb.group({
      player1: ['', Validators.required],
      player2: ['', Validators.required],
      player1Throw: ['', Validators.required],
      player2Throw: ['', Validators.required],
    });
  }

  createPracticeModeControl(): FormControl {
    return this.fb.control(true);
  }

  getPlayers(): Observable<BasicOption<Player>[]> {
    return this.playerService
      .getAll()
      .pipe(map((x) => x.map((p) => ({ value: p, label: p.name }))));
  }

  getThrows(): BasicOption<string>[] {
    return [
      {
        label: 'Rock',
        value: 'ROCK',
      },
      {
        label: 'Paper',
        value: 'PAPER',
      },
      {
        label: 'Scissors',
        value: 'SCISSORS',
      },
    ];
  }

  play(game: Game, isPractice: boolean): Observable<Game> {
    if (isPractice) {
      return this.gameService.playPractice(game);
    } else {
      return this.gameService.playRank(game);
    }
  }
}
