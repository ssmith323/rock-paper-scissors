import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { Game, GameService } from './game.service';

describe('GameService', () => {
  let httpTestingController: HttpTestingController;
  let service: GameService;

  const url = environment.baseUrl + '/game';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('playRank', () => {
    it('should get all', () => {
      const game = {} as Game;
      service.playRank(game).then((response) => {
        expect(response).toEqual({} as Game);
      });
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toBe('POST');
      req.flush({});
      httpTestingController.verify();
    });
  });
});
