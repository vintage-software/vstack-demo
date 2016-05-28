import { ClientAngular2Page } from './app.po';

describe('client-angular2 App', function() {
  let page: ClientAngular2Page;

  beforeEach(() => {
    page = new ClientAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('client-angular2 works!');
  });
});
