import puppeteer from "puppeteer";

const testPort = 5000;
const testServer = `http://localhost:${testPort}`;

describe("basic", () => {
  let browser;
  /** @type {import("puppeteer").Page} */
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: [`--no-sandbox`, `--disable-setuid-sandbox`],
    });
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterAll(() => browser.close());

  it("can load page with puppeteer", async () => {
    await page.goto(`${testServer}/`);
    let h1 = await page.waitForSelector("h1");
    expect(await h1.evaluate((n) => n.innerText)).toBe("Hello, World!");
  });

  it("can navigate pages with puppeteer", async () => {
    await page.goto(`${testServer}/`);
    let h1 = await page.waitForSelector("h1");
    expect(await h1.evaluate((n) => n.innerText)).toBe("Hello, World!");
    await page.goto(`${testServer}/second`);
    h1 = await page.waitForSelector("h1");
    expect(await h1.evaluate((n) => n.innerText)).toBe("Hello, Second World!");
  });
});
