import { UpdaterTesterPage } from './app.po';

describe('updater-tester App', () => {
  let page: UpdaterTesterPage;

  beforeEach(() => {
    page = new UpdaterTesterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
