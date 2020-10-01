import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let httpTestingController: HttpTestingController;
  let service: PlayerService;

  const url = environment.baseUrl + '/player';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayerService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should get all', () => {
      service.getAll().subscribe((response) => {
        expect(response).toEqual([]);
      });
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
