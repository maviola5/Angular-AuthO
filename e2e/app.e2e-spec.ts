import { AuthOTutPage } from './app.po';

describe('auth-o-tut App', () => {
  let page: AuthOTutPage;

  beforeEach(() => {
    page = new AuthOTutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
