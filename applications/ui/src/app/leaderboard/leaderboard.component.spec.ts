import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardComponent } from './leaderboard.component';
import { StubGameGateway } from '../game/stub.game.gateway';
import { GameGateway } from '../game/game.gateway';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;
  let stubRpsGateway: StubGameGateway;

  beforeEach(async(() => {
    stubRpsGateway = new StubGameGateway();

    TestBed.configureTestingModule({
      declarations: [ LeaderboardComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule
      ],
      providers: [
        { provide: GameGateway, useValue: stubRpsGateway }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create leaderboard with data', () => {
    expect(component).toBeTruthy();
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log( 'tableRows: ', tableRows );
    // Data rows
    let row1 = tableRows[1];
    expect(row1.cells[1].innerHTML).toBe('100');
    expect(row1.cells[2].innerHTML).toBe('10');
    expect(row1.cells[3].innerHTML).toBe('10');
    expect(row1.cells[4].innerHTML).toBe('0');

    let row2 = tableRows[2];
    expect(row2.cells[1].innerHTML).toBe('70');
    expect(row2.cells[2].innerHTML).toBe('10');
    expect(row2.cells[3].innerHTML).toBe('6');
    expect(row2.cells[4].innerHTML).toBe('2');

    let row3 = tableRows[3];
    expect(row3.cells[1].innerHTML).toBe('40');
    expect(row3.cells[2].innerHTML).toBe('10');
    expect(row3.cells[3].innerHTML).toBe('2');
    expect(row3.cells[4].innerHTML).toBe('4');
    stubRpsGateway.playerStats[0].gamesWon = 11;
    const player = fixture.nativeElement.querySelector('button');
    console.log('Button', player);
    player.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe('Player 2');
      expect(row1.cells[1].innerHTML).toBe('WON');
      expect(row1.cells[2].innerHTML).toBe('ROCK');
      expect(row1.cells[3].innerHTML).toBe('SCISSORS');
      
    });
  });

  it('should refresh leaderboard with data', () => {
    expect(component).toBeTruthy();
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log( 'tableRows: ', tableRows );
    // Data rows
    let row1 = tableRows[1];
    expect(row1.cells[1].innerHTML).toBe('100');
    expect(row1.cells[2].innerHTML).toBe('10');
    expect(row1.cells[3].innerHTML).toBe('10');
    expect(row1.cells[4].innerHTML).toBe('0');

    stubRpsGateway.playerStats[0].gamesWon = 11;
    stubRpsGateway.playerStats[0].winPercentage = 95;
    stubRpsGateway.playerStats[0].rockPercent = 80;
    const refresh = fixture.nativeElement.querySelector('button.refresh');
    console.log('Button', refresh);
    refresh.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      let row1 = tableRows[1];
      expect(row1.cells[1].innerHTML).toBe('95');
      expect(row1.cells[3].innerHTML).toBe('11');
      expect(row1.cells[6].innerHTML).toBe('80');
      
    });
  });

});
