import { test, expect } from '@playwright/test';

test.describe.parallel('Paralelní testy', () => {

test('test', async ({ page }) => {
  
  await page.goto('https://www.csfd.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByRole('combobox', { name: 'Vyhledávání' }).click();
  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();
  await page.getByRole('heading', { name: 'Reese Witherspoon', exact: true }).getByRole('link').click();
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');
  await page.getByRole('row', { name: '2025 The Morning Show' }).getByRole('link').click();
 
 await expect(page.locator('h1')).toContainText('The Morning Show');
 await page.getByRole('link', { name: 'Trailer' }).click();
  const trailerLink = page.getByRole('link', { name: 'Trailer' });
  
 
});

test('CSFD - proklikání všech filmů z výsledků', async ({ page }) => {
 
  
  await page.goto('https://www.csfd.cz/');

  // Zavřít cookie banner, pokud je viditelný
  const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
  if (await cookieButton.isVisible()) {
    await cookieButton.click();
  }

  // Vyhledat herečku
  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
await page.waitForTimeout(500); // krátké čekání
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

  // Kliknout na správnou herečku
  const actressLink = page.getByRole('heading', { name: 'Reese Witherspoon', exact: true }).getByRole('link');
  await actressLink.click();
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');

 await page.getByRole('row', { name: 'Poznáš, až to přijde?' }).getByRole('link').click();
 
 await expect(page.locator('h1')).toContainText('Poznáš, až to přijde?');
 await page.getByRole('link', { name: 'Trailer' }).click();
  const trailerLink = page.getByRole('link', { name: 'Trailer' });
 


});



});