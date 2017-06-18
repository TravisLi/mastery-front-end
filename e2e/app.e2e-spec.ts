import { MasteryFrontEndPage } from './app.po';

describe('mastery-front-end App', () => {
  let page: MasteryFrontEndPage;

  beforeEach(() => {
    page = new MasteryFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
