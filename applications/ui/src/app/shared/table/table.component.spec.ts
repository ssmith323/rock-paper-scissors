import { SimpleChange, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent<any>;

  beforeEach(() => (component = new TableComponent()));

  describe('ngOnInit', () => {
    it('should get the column defs', () => {
      component.columns = [
        { def: 'name', header: 'Name', cell: (ele) => ele.name },
      ];
      component.ngOnInit();

      expect(component.displayedColumns).toEqual(['name']);
    });
  });

  describe('ngOnChanges', () => {
    it('should do nothing since the datasource is not made', () => {
      component.ngOnChanges({} as SimpleChanges);
      expect(component.dataSource).toBeUndefined();
    });

    it('should do nothing since the datasource is made', () => {
      component.dataSource = new MatTableDataSource();
      component.ngOnChanges({} as SimpleChanges);
      expect(component.dataSource.data).toEqual([]);
    });

    it('should do update the data since the datasource is made and the value changed', () => {
      component.dataSource = new MatTableDataSource();
      component.ngOnChanges({
        data: new SimpleChange([], [1], false),
      } as SimpleChanges);
      expect(component.dataSource.data).toEqual([1]);
    });

    it('should do nothing since the datasource is made and no currentValue', () => {
      component.dataSource = new MatTableDataSource();
      component.ngOnChanges({
        data: new SimpleChange([], undefined, false),
      } as SimpleChanges);
      expect(component.dataSource.data).toEqual([]);
    });
  });

  describe('removePeriods', () => {
    it('should remove periods', () => {
      const actual = component.removePeriods('test.test');

      expect(actual).toBe('testtest');
    });
  });
});
