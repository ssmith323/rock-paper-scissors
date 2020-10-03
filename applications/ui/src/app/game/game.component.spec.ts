import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { Game } from '../shared/services/game.service';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  const fb = new FormBuilder();
  const playerService = jasmine.createSpyObj(['getAll']);
  playerService.getAll.and.returnValue(of([{ name: 'Test', id: 0 }]));

  const gameService = jasmine.createSpyObj(['playRank', 'playPractice']);
  gameService.playPractice.and.returnValue(Promise.resolve({} as Game));
  gameService.playRank.and.returnValue(Promise.resolve({} as Game));

  const component = new GameComponent(fb, playerService, gameService);

  describe('ngOnInit', () => {
    it('should call call the statsService', async () => {
      component.ngOnInit();
      expect(playerService.getAll).toHaveBeenCalled();
      component.playerList$.subscribe((x) =>
        expect(x).toEqual([{ value: { name: 'Test', id: 0 }, label: 'Test' }]),
      );
    });

    it('should declare the throw types', () => {
      component.ngOnInit();
      expect(component.throwTypes).toEqual([
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
      ]);
    });

    it('should set practice mode to true', () => {
      component.ngOnInit();
      expect(component.practiceMode.value).toBeTrue();
    });
  });

  describe('play', () => {
    it('should run in practice mode', () => {
      component.gameForm = fb.group({});
      component.play();

      expect(gameService.playPractice).toHaveBeenCalledWith({});
    });
  });
});
