import { AmrPage } from './app.po';

describe('amr App', () => {
  let page: AmrPage;

  beforeEach(() => {
    page = new AmrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
