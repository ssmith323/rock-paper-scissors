import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appSubmitForm]',
})
export class SubmitFormDirective {
  @Input() appSubmitForm: FormGroup;

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    for (const control in this.appSubmitForm.controls) {
      if (this.appSubmitForm.controls.hasOwnProperty(control)) {
        this.appSubmitForm.controls[control].markAsTouched();
      }
    }
    if (!this.appSubmitForm.valid) {
      event.preventDefault();
    }
  }
}
