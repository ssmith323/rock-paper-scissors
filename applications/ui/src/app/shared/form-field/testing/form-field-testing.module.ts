import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AbstractFormFieldComponent } from '../abstract-form-field.component';

@Component({
  selector: 'app-datepicker',
  template: '<div [id]="label"></div>',
})
class DatepickerComponent extends AbstractFormFieldComponent {}

@Component({
  selector: 'app-input',
  template: '<div [id]="label"></div>',
})
class InputComponent extends AbstractFormFieldComponent {}

@Component({
  selector: 'app-select',
  template: '<div [id]="label"></div>',
})
class SelectComponent extends AbstractFormFieldComponent {
  @Input() options: any;
}

@Component({
  selector: 'app-submit',
  template: '<div>Submit</div>',
})
class SubmitComponent {
  @Input() form: FormGroup;
}

const components = [
  InputComponent,
  SelectComponent,
  DatepickerComponent,
  SubmitComponent,
];

@NgModule({
  declarations: [components],
  exports: [ReactiveFormsModule, components],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormFieldTestingModule {}
