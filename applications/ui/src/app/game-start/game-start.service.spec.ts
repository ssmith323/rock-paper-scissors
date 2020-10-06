import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

import { BasicOption } from '../shared/form-field/select/select.component';
import { Game } from '../shared/services/game.service';
import { GameStartService } from './game-start.service';

describe('GameStartService', () => {
  const game = of({} as Game);
  const fb = new FormBuilder();
  const playerService = jasmine.createSpyObj(['getAll']);
  playerService.getAll.and.returnValue(of([{ name: 'Test', id: 0 }]));

  const gameService = jasmine.createSpyObj(['playRank', 'playPractice']);
  gameService.playPractice.and.returnValue(game);
  gameService.playRank.and.returnValue(game);

  const service = new GameStartService(fb, playerService, gameService);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getForm', () => {
    let actual: FormGroup;
    beforeAll(() => {
      actual = service.getForm();
    });

    it('should have empty values', () => {
      expect(actual.value).toEqual({
        player1: '',
        player2: '',
        player1Throw: '',
        player2Throw: '',
      });
    });

    it('should be invalid', () => {
      expect(actual.valid).toBeFalsy();
    });
  });

  describe('getPlayers', () => {
    it('should return players as BasicOptions', () => {
      const actual = service.getPlayers();

      expect(playerService.getAll).toHaveBeenCalled();
      actual.subscribe((x) =>
        expect(x).toEqual([{ value: { name: 'Test', id: 0 }, label: 'Test' }]),
      );
    });
  });

  describe('createPracticeModeControl', () => {
    let actual: FormControl;
    beforeAll(() => {
      actual = service.createPracticeModeControl();
    });

    it('should be initialized to true', () => {
      expect(actual.value).toBeTruthy();
    });
  });

  describe('getThrows', () => {
    let actual: BasicOption<string>[];
    beforeAll(() => {
      actual = service.getThrows();
    });

    it('should have rock', () => {
      expect(actual[0]).toEqual({ label: 'Rock', value: 'ROCK' });
    });

    it('should have paper', () => {
      expect(actual[1]).toEqual({ label: 'Paper', value: 'PAPER' });
    });

    it('should have scissors', () => {
      expect(actual[2]).toEqual({ label: 'Scissors', value: 'SCISSORS' });
    });
  });

  describe('play', () => {
    it('should call practice', () => {
      const actual = service.play({} as Game, true);

      expect(gameService.playPractice).toHaveBeenCalledWith({} as Game);
      expect(actual).toEqual(game);
    });

    it('should play a rank game', () => {
      const actual = service.play({} as Game, false);

      expect(gameService.playRank).toHaveBeenCalledWith({} as Game);
      expect(actual).toEqual(game);
    });
  });
});
