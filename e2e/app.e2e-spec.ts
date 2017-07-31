import { Ang2WebpackPage } from './app.po';

describe('ang2-webpack App', function() {
  let page: Ang2WebpackPage;

  beforeEach(() => {
    page = new Ang2WebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
