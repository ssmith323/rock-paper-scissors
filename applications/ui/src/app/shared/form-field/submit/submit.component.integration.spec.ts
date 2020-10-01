import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFormDirective } from './submit-form.directive';
import { SubmitComponent } from './submit.component';

describe('Integration SubmitComponent', () => {
  let component: SubmitComponent;
  let fixture: ComponentFixture<SubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitComponent, SubmitFormDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
