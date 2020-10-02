import { LeaderboardService } from './leaderboard.service';

describe('LeaderboardService', () => {
  let service: LeaderboardService;
  let element: any;

  beforeEach(() => {
    element = {
      player: {
        name: 'Test',
      },
      gamesWon: 1,
      gamesLost: 1,
      gamesTied: 1,
      rocksThrown: 1,
      papersThrown: 1,
      scissorsThrown: 1,
    };
    service = new LeaderboardService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getColumns', () => {
    it('should have a player', () => {
      const actual = service.getColumns();

      expect(actual[0].def).toEqual('player');
      expect(actual[0].header).toEqual('Player');
      expect(actual[0].cell(element)).toEqual('Test');
    });

    it('should have a winning %', () => {
      const actual = service.getColumns();

      expect(actual[1].def).toEqual('winningPercentage');
      expect(actual[1].header).toEqual('Winning Percentage');
      expect(actual[1].cell(element)).toEqual(`${1 / 3}`);
    });

    it('should have a number of games played', () => {
      const actual = service.getColumns();

      expect(actual[2].def).toEqual('numberOfGames');
      expect(actual[2].header).toEqual('Number of Games');
      expect(actual[2].cell(element)).toEqual('3');
    });

    it('should have a number of games won', () => {
      const actual = service.getColumns();

      expect(actual[3].def).toEqual('wins');
      expect(actual[3].header).toEqual('Wins');
      expect(actual[3].cell(element)).toEqual('1');
    });

    it('should have a number of games losses', () => {
      const actual = service.getColumns();

      expect(actual[4].def).toEqual('losses');
      expect(actual[4].header).toEqual('Losses');
      expect(actual[4].cell(element)).toEqual('1');
    });

    it('should have a number of games ties', () => {
      const actual = service.getColumns();

      expect(actual[5].def).toEqual('ties');
      expect(actual[5].header).toEqual('Ties');
      expect(actual[5].cell(element)).toEqual('1');
    });

    it('should have a number of rocks thrown', () => {
      const actual = service.getColumns();

      expect(actual[6].def).toEqual('rocksThrown');
      expect(actual[6].header).toEqual('Rocks Thrown (%)');
      expect(actual[6].cell(element)).toEqual(`${1 / 3}`);
    });

    it('should have a number of paper thrown', () => {
      const actual = service.getColumns();

      expect(actual[7].def).toEqual('papersThrown');
      expect(actual[7].header).toEqual('Papers Thrown (%)');
      expect(actual[7].cell(element)).toEqual(`${1 / 3}`);
    });

    it('should have a number of scissors thrown', () => {
      const actual = service.getColumns();

      expect(actual[8].def).toEqual('scissorsThrown');
      expect(actual[8].header).toEqual('Scissors Thrown (%)');
      expect(actual[8].cell(element)).toEqual(`${1 / 3}`);
    });
  });
});
