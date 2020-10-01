import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ErrorMessages } from './error-messages';

@Component({
  selector: 'app-abstract',
  template: '<div></div>',
})
export abstract class AbstractFormFieldComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() idOverride: string;

  id: string;

  constructor() {}

  getMessage(control: FormControl): string {
    let message = '';
    for (const id in control.errors) {
      if (control.errors.hasOwnProperty(id)) {
        message += ErrorMessages[id];
      }
    }
    return message;
  }

  protected getId(): string {
    return this.idOverride || this.label;
  }
}
