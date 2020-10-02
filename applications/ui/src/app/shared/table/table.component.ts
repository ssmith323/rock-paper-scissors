import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit, OnChanges {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() data: any[];
  @Input() columns: ColumnDefinition<T>[];
  @Input() navField = 'id';

  dataSource: MatTableDataSource<any>;

  displayedColumns: string[];
  constructor() {}

  ngOnInit() {
    this.displayedColumns = this.columns.map((c) => c.def);

    this.dataSource = new MatTableDataSource(this.data ? this.data : []);
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(change: SimpleChanges) {
    if (this.dataSource) {
      if (change.data && change.data.currentValue) {
        this.dataSource.data = change.data.currentValue;
      }
    }
  }

  removePeriods(str: string): string {
    return str.toString().replace(/(\.| )/g, '');
  }
}

export interface ColumnDefinition<T> {
  def: string;
  header: string;
  cell: (cell: T) => string;
}
