import { NewAngularAppPage } from './app.po';

describe('new-angular-app App', () => {
  let page: NewAngularAppPage;

  beforeEach(() => {
    page = new NewAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
