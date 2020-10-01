import { FormControl } from '@angular/forms';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent<string>;

  beforeEach(() => {
    component = new SelectComponent();
  });

  it('should have a no id override', () => {
    component.label = 'Test';
    component.control = new FormControl();

    component.ngOnInit();

    expect(component.id).toEqual('Test');
  });

  it('should have a id override', () => {
    component.label = 'Test';
    component.idOverride = 'Hi';
    component.control = new FormControl();

    component.ngOnInit();

    expect(component.id).toEqual('Hi');
  });
});
