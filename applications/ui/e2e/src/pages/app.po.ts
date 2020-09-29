import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(page: string) {
    let url: string;
    switch (page) {
      case 'Home':
        url = '/';
        break;
      case 'Unknown':
        url = '/unknown';
        break;
      case 'Roster':
        url = '/person';
        break;
      case 'Client List':
        url = '/client';
        break;
    }
    return browser.get(url);
  }

  getTitleText() {
    return element(by.css('#mainHeader')).getText();
  }
}
