import { Given } from 'cucumber';
import { browser } from 'protractor';

Given('I am on a mobile device', () => {
  const width = 500;
  const height = 600;
  browser.driver.manage().window().setSize(width, height);
});

Given('I am on a desktop', () => {
  const width = 1000;
  const height = 600;
  browser.driver.manage().window().setSize(width, height);
});
