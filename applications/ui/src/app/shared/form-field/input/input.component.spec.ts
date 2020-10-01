import { FormControl, Validators } from '@angular/forms';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;

  beforeEach(() => {
    component = new InputComponent();
  });

  describe('ngOnInit', () => {
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

  describe('getMessage', () => {
    it('should have no message', () => {
      const control = new FormControl('t', Validators.required);

      const actual = component.getMessage(control);

      expect(actual).toEqual('');
    });

    it('should have no message', () => {
      const control = new FormControl('', Validators.required);

      const actual = component.getMessage(control);

      expect(actual).toEqual('This field is required');
    });
  });
});
