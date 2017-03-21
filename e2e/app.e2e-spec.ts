import { PersonalBlogS4DevPage } from './app.po';

describe('personal-blog-s4-dev App', () => {
  let page: PersonalBlogS4DevPage;

  beforeEach(() => {
    page = new PersonalBlogS4DevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
