import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SubmitFormDirective } from './submit-form.directive';

describe('SubmitFormDirective', () => {
  it('should create an instance', () => {
    const directive = new SubmitFormDirective();
    expect(directive).toBeTruthy();
  });

  it('should not prevent default when valid', () => {
    const directive = new SubmitFormDirective();
    directive.appSubmitForm = new FormGroup({});
    const event = new Event('click');
    const spy = spyOn(event, 'preventDefault');
    directive.onClick(event);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should prevent default when invalid', () => {
    const directive = new SubmitFormDirective();
    directive.appSubmitForm = new FormGroup({
      id: new FormControl('', Validators.required),
    });
    const event = new Event('click');
    const spy = spyOn(event, 'preventDefault');
    directive.onClick(event);

    expect(spy).toHaveBeenCalled();
  });
});
