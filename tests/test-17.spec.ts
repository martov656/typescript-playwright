import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.fdb.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
  await page.getByRole('link', { name: 'Reese Witherspoon Reese' }).click();
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');
  await page.getByRole('link', { name: 'Srdečně vás zveme' }).click();
  await expect(page.locator('h1')).toContainText('Srdečně vás zveme');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Otevřít IMDb' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('link', { name: 'Home' })).toBeVisible();
  await page1.getByTestId('accept-button').click();
  await page1.getByTestId('mosaic-img-0-1').click();
  await expect(page1.getByTestId('media-viewer__touch-handler')).toBeVisible();
});

test('testKate', async ({ page }) => {
  await page.goto('https://www.fdb.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  

  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Kate Beckinsale');
  await page.getByRole('link', { name: 'Kate Beckinsale Kate' }).click();
  await expect(page.locator('h1')).toContainText('Kate Beckinsale');

await page.getByRole('link', { name: 'Klik - život na dálkové ovládání', exact: true }).click();
await expect(page.locator('h1')).toContainText('Klik - život na dálkové ovládání');
const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Otevřít IMDb' }).click();
  const page1 = await page1Promise;
await expect(page1.getByRole('link', { name: 'Home' })).toBeVisible();
await page1.getByTestId('accept-button').click();
await page1.getByTestId('mosaic-img-0-0').click();
await expect(page1.getByTestId('media-viewer__touch-handler')).toBeVisible();

  
});

test('testKateW', async ({ page }) => {
  await page.goto('https://www.fdb.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  

  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Kate Winslet');
  await page.getByRole('link', { name: 'Kate Winslet Kate' }).click();
  await expect(page.locator('h1')).toContainText('Kate Winslet');

  await page.getByRole('link', { name: 'Celá filmografie' }).click();
  await expect(page.locator('#main')).toContainText('Kate Winslet');
  await page.getByRole('link', { name: 'Lee: Fotografka v první linii' }).click();
  await expect(page.locator('h1')).toContainText('Lee: Fotografka v první linii');

});
