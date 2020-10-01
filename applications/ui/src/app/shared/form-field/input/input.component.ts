import { Component, Input, OnInit } from '@angular/core';

import { AbstractFormFieldComponent } from '../abstract-form-field.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent extends AbstractFormFieldComponent
  implements OnInit {
  @Input() type: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.id = this.getId();
  }
}
