import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { StatsService } from './stats.service';

describe('StatsService', () => {
  let httpTestingController: HttpTestingController;
  let service: StatsService;

  const url = environment.baseUrl + '/stats';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StatsService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StatsService);
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
