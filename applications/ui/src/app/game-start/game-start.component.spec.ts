import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
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
  gameStartService.getForm.and.returnValue(new FormGroup({}));
  gameStartService.createPracticeModeControl.and.returnValue(
    new FormControl(true),
  );
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
    expect(gameStartService.getForm).toHaveBeenCalled();
    expect(gameStartService.createPracticeModeControl).toHaveBeenCalled();
    expect(gameStartService.getPlayers).toHaveBeenCalled();
    expect(gameStartService.getThrows).toHaveBeenCalled();
  });
});
