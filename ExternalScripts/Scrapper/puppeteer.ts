import puppeteer from 'puppeteer';

const LAUNCH_PUPPETEER_OPTS = {
  headless: 'new' as const,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu',
    '--window-size=1920x1080',
  ],
};

const PAGE_PUPPETEER_OPTS = {
  timeout: 3000000,
  waitUntil: 'networkidle2' as const,
};

export async function getPageContent(url: string) {
  const browser = await puppeteer.launch(LAUNCH_PUPPETEER_OPTS);
  const page = await browser.newPage();
  await page.goto(url, PAGE_PUPPETEER_OPTS);
  const content = await page.content();
  browser.close();

  return content;
}
