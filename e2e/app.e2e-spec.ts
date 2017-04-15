import { BlueKTaskPage } from './app.po';

describe('blue-ktask App', () => {
  let page: BlueKTaskPage;

  beforeEach(() => {
    page = new BlueKTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
