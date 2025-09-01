import { test, expect } from '@playwright/test';




test('testGenesis', async ({ page }) => {
await page.goto('https://www.rockboard.cz/');
await page.getByRole('button', { name: 'Souhlas' }).click();
await page.getByRole('link', { name: 'profily' }).click();
await expect(page.locator('h2')).toContainText('Profily skupin');

await page.getByRole('textbox', { name: 'Jméno kapely nebo alba' }).fill('Genesis');
await page.getByRole('button', { name: 'Hledat' }).click();
await page.getByRole('row', { name: 'Genesis From Genesis to' }).getByRole('link').first().click();
await expect(page.locator('h1')).toContainText('Genesis');

  
   
  
  
 
});


test('testSabbath', async ({ page }) => {
await page.goto('https://www.rockboard.cz/');
await page.getByRole('button', { name: 'Souhlas' }).click();
await page.getByRole('link', { name: 'profily' }).click();
await expect(page.locator('h2')).toContainText('Profily skupin');

await page.getByRole('textbox', { name: 'Jméno kapely nebo alba' }).fill('Paranoid');
await page.getByRole('button', { name: 'Hledat' }).click();



await page.getByRole('row', { name: 'Paranoid' }).getByRole('link').first().click();
await expect(page.locator('h1')).toContainText('Black Sabbath');


 
});

test('testDeep', async ({ page }) => {
await page.goto('https://www.rockboard.cz/');
await page.getByRole('button', { name: 'Souhlas' }).click();
await page.getByRole('link', { name: 'profily' }).click();
await expect(page.locator('h2')).toContainText('Profily skupin');

await page.getByRole('textbox', { name: 'Jméno kapely nebo alba' }).fill('Machine Head');
await page.getByRole('button', { name: 'Hledat' }).click();



await page.getByRole('row', { name: 'Machine Head' }).getByRole('link').first().click();
await expect(page.locator('h1')).toContainText('Deep Purple');


 
});