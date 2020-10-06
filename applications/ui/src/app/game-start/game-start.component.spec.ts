import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { FormFieldTestingModule } from '../shared/form-field/testing/form-field-testing.module';
import { Game } from '../shared/services/game.service';
import { GameStartComponent } from './game-start.component';
import { GameStartService } from './game-start.service';

describe('GameStartComponent', () => {
  let component: GameStartComponent;
  let fixture: ComponentFixture<GameStartComponent>;
  const gameStartService = jasmine.createSpyObj([
    'getForm',
    'createPracticeModeControl',
    'getPlayers',
    'getThrows',
    'play',
  ]);
  const form = new FormGroup({});
  const practiceMode = new FormControl(true);
  gameStartService.getForm.and.returnValue(form);
  gameStartService.createPracticeModeControl.and.returnValue(practiceMode);
  gameStartService.getPlayers.and.returnValue(of([]));
  gameStartService.getThrows.and.returnValue([]);
  gameStartService.play.and.returnValue({} as Game);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameStartComponent],
      imports: [FormFieldTestingModule],
      providers: [{ provide: GameStartService, useValue: gameStartService }],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(gameStartService.getThrows).toHaveBeenCalled();
  });

  it('should set players', () => {
    expect(gameStartService.getPlayers).toHaveBeenCalled();
    component.playerList$.subscribe((x) => expect(x).toEqual([]));
  });

  it('should get the form', () => {
    expect(gameStartService.getForm).toHaveBeenCalled();
    expect(component.gameForm).toEqual(form);
  });

  it('should create the toggle', () => {
    expect(gameStartService.createPracticeModeControl).toHaveBeenCalled();
    expect(component.practiceMode).toEqual(practiceMode);
  });

  it('should submit when button is clicked', () => {
    fixture.debugElement
      .query(By.css('button[type=submit]'))
      .nativeElement.click();

    expect(gameStartService.play).toHaveBeenCalled();
  });
});
