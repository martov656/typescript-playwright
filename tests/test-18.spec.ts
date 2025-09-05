import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

await page.goto('https://www.moviezone.cz/');
await page.getByTestId('button-agree').click();
await page.getByRole('textbox', { name: 'Hledat...' }).first().fill('Reese Witherspoon');
await page.getByRole('textbox', { name: 'Hledat...' }).first().press('Enter');


await page.getByRole('link', { name: 'Srdečně vás zveme: Recenze' }).click();



await expect(page.locator('#mainContainer')).toContainText('Srdečně vás zveme | You´re Cordially Invited | 2025');
const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'kinobox' }).click();
  const page1 = await page1Promise;
await page1.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page1.locator('h1')).toContainText('Srdečně vás zveme');




});