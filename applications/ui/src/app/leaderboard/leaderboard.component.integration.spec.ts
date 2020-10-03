import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { StatsService } from '../shared/services/stats.service';
import { TableTestingModule } from '../shared/table/table-testing.module';
import { LeaderboardComponent } from './leaderboard.component';
import { LeaderboardService } from './leaderboard.service';

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;
  const leaderboardService = jasmine.createSpyObj(['getColumns']);
  const statsService = jasmine.createSpyObj(['getAll']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardComponent],
      imports: [TableTestingModule],
      providers: [
        { provide: LeaderboardService, useValue: leaderboardService },
        { provide: StatsService, useValue: statsService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    statsService.getAll.and.returnValue(of([]));
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create leaderboard with data', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header', () => {
    expect(fixture.debugElement.query(By.css('app-table'))).toBeTruthy();
  });

  describe('refresh', () => {
    it('should refresh the data', async () => {
      spyOn(component, 'getPlayerStats');
      fixture.debugElement
        .query(By.css('button.refresh'))
        .triggerEventHandler('click', null);
      expect(component.getPlayerStats).toHaveBeenCalledTimes(1);
    });
  });
});
