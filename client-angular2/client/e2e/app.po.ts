export class ClientAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('client-angular2-app h1')).getText();
  }
}
