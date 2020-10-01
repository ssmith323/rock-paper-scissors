import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

import { AbstractFormFieldComponent } from '../abstract-form-field.component';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent extends AbstractFormFieldComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.id = this.getId();
  }

  openCalendar(picker: MatDatepicker<Date>) {
    picker.open();
  }
}
