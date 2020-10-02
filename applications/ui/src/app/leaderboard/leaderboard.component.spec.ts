import { of } from 'rxjs';

import { LeaderboardComponent } from './leaderboard.component';

describe('LeaderboardComponent', () => {
  const leaderboardService = jasmine.createSpyObj(['getColumns']);
  leaderboardService.getColumns.and.returnValue([]);
  const statsService = jasmine.createSpyObj(['getAll']);
  statsService.getAll.and.returnValue(of([]));

  const component = new LeaderboardComponent(leaderboardService, statsService);

  describe('ngOnInit', () => {
    it('should call call the statsService', async () => {
      component.ngOnInit();
      expect(statsService.getAll).toHaveBeenCalled();
      component.playerStats$.subscribe((x) => expect(x).toEqual([]));
    });

    it('should call call the leaderboardService', () => {
      component.ngOnInit();
      expect(leaderboardService.getColumns).toHaveBeenCalled();
      expect(component.columns).toEqual([]);
    });
  });

  describe('getPlayerStats', async () => {
    it('should call the player service', () => {
      component.getPlayerStats();

      expect(statsService.getAll).toHaveBeenCalled();
      component.playerStats$.subscribe((x) => expect(x).toEqual([]));
    });
  });
});
