import { RunningMapsPage } from './app.po';

describe('running-maps App', () => {
  let page: RunningMapsPage;

  beforeEach(() => {
    page = new RunningMapsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
