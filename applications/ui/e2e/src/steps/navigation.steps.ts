import { Before, Given, When } from 'cucumber';
import { by, element } from 'protractor';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(
  'I am on the {string} page',
  { timeout: 2 * 5000 },
  async (url: string) => {
    await page.navigateTo(url);
  },
);

Given(
  'I click on client navigation',
  { timeout: 2 * 5000 },
  async (url: string) => {
    await page.navigateTo(url);
  },
);

When('I click the hamburger button', async () => {
  await element(by.css('#hamburgerNav')).click();
});

When('I am click Client', { timeout: 2 * 5000 }, async () => {
  await element(by.css('#clientLink')).click();
});

When('I am click Roster', { timeout: 2 * 5000 }, async () => {
  await element(by.css('#personLink')).click();
});
