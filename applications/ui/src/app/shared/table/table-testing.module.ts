import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

import { ColumnDefinition } from './table.component';

@Component({
  selector: 'app-table',
  template: '<div></div>',
})
class TableComponent {
  @Input() data: any[];
  @Input() columns: ColumnDefinition<any>[];
  @Input() navField = 'id';
}

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [CommonModule],
})
export class TableTestingModule {}
