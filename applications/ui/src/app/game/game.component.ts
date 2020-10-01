import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BasicOption } from '../shared/form-field/select/select.component';
import { Player, PlayerService } from '../shared/services/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  gameForm: FormGroup;
  practiceMode: FormControl;
  playerList$: Observable<BasicOption<Player>[]>;
  throwTypes: BasicOption<string>[];

  constructor(private fb: FormBuilder, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.gameForm = this.fb.group({
      player1: ['', Validators.required],
      player2: ['', Validators.required],
      player1Throw: ['', Validators.required],
      player2Throw: ['', Validators.required],
    });
    this.practiceMode = this.fb.control(true);
    this.playerList$ = this.playerService
      .getAll()
      .pipe(map((x) => x.map((p) => ({ value: p, label: p.name }))));
    this.throwTypes = [
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

  play(event) {
    console.log(event);
  }
}
