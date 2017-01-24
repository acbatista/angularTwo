import { AngularTwoPage } from './app.po';

describe('angular-two App', function() {
  let page: AngularTwoPage;

  beforeEach(() => {
    page = new AngularTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
