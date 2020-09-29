import { expect } from 'chai';
import { Before, Then } from 'cucumber';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Then(
  'I should be taken to the not found page',
  { timeout: 2 * 5000 },
  async () => {
    expect(await page.getTitleText()).to.equals('Not Found');
  },
);
