import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { BasicOption } from '../shared/form-field/select/select.component';
import { Game } from '../shared/services/game.service';
import { Player } from '../shared/services/player.service';
import { GameStartService } from './game-start.service';

@Component({
  selector: 'app-game',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss'],
})
export class GameStartComponent implements OnInit {
  gameForm: FormGroup;
  practiceMode: FormControl;
  playerList$: Observable<BasicOption<Player>[]>;
  throwTypes: BasicOption<string>[];
  gameResult$: Observable<Game>;

  constructor(private gameStartService: GameStartService) {}

  ngOnInit(): void {
    this.gameForm = this.gameStartService.getForm();
    this.practiceMode = this.gameStartService.createPracticeModeControl();
    this.playerList$ = this.gameStartService.getPlayers();
    this.throwTypes = this.gameStartService.getThrows();
  }

  play(): void {
    this.gameResult$ = this.gameStartService.play(
      this.gameForm.value,
      this.practiceMode.value,
    );
  }
}
