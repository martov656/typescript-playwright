import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByRole('combobox', { name: 'Vyhledávání' }).click();
  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();
  await page.getByRole('heading', { name: 'Reese Witherspoon', exact: true }).getByRole('link').click();


  
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');


  await page.getByRole('row', { name: '2025 The Morning Show' }).getByRole('link').click();


  await expect(page.locator('h1')).toContainText('The Morning Show');

});

test('testnicole', async ({ page }) => {
   await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByRole('combobox', { name: 'Vyhledávání' }).click();
  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Nicole Kidman');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();
  await page.getByRole('heading', { name: 'Nicole Kidman', exact: true }).getByRole('link').click();


  
  await expect(page.locator('h1')).toContainText('Nicole Kidman');


  await page.getByRole('row', { name: 'Svatba roku' }).getByRole('link').click();


  await expect(page.locator('h1')).toContainText('Svatba roku');

});