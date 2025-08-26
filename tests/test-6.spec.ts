import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');
  await page.getByRole('combobox', { name: 'Vyhledávání' }).click();
  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();
  await page.getByRole('heading', { name: 'Reese Witherspoon', exact: true }).getByRole('link').click();


  
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');


  await page.getByRole('row', { name: '2025 The Morning Show' }).getByRole('link').click();


  await expect(page.locator('h1')).toContainText('The Morning Show');

});