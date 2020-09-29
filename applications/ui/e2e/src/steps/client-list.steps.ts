import { expect } from 'chai';
import { Before, Then } from 'cucumber';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Then('client list page should display the header', async () => {
  expect(await page.getTitleText()).to.equals('Clients');
});
