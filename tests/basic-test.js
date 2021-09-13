import puppeteer from 'puppeteer';

const testPort = 5000;
const testServer = `http://localhost:${testPort}`;

describe('basic', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: [`--no-sandbox`, `--disable-setuid-sandbox`]
    });
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterAll(() => browser.close());

  it('can load page with puppeteer', async () => {
    await page.goto(`${testServer}/`);
    console.log(page);
  });
});
