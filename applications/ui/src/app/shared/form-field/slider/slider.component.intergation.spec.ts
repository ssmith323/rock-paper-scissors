import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';

import { SliderComponent } from './slider.component';

@Component({
  selector: 'app-host',
  template: '<app-slider [control]="control" label="Pick Me!"></app-slider>',
})
class HostComponent {
  control = new FormControl(true);
}

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, SliderComponent],
      imports: [MatSlideToggleModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.debugElement.query(By.directive(SliderComponent))
      .componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a label', () => {
    expect(
      fixture.debugElement.query(By.css('.slider-label')).nativeElement
        .innerText,
    ).toBe('Pick Me!');
  });
});
