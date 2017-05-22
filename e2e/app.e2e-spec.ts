import { HeartbeatInkPage } from './app.po';

describe('heartbeat-ink App', () => {
  let page: HeartbeatInkPage;

  beforeEach(() => {
    page = new HeartbeatInkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
