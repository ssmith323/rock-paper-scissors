import { Component, OnInit } from '@angular/core';

import { AbstractFormFieldComponent } from '../abstract-form-field.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent extends AbstractFormFieldComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
