import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');

  const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
  if (await cookieButton.isVisible()) await cookieButton.click();

  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Clint Eastwood');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

  const personLink = page.getByRole('heading', { name: 'Clint Eastwood', exact: true }).getByRole('link');
  await personLink.click();
  await expect(page.locator('h1')).toContainText('Clint Eastwood');

  await page.getByRole('link', { name: 'Pašerák' }).first().click();
  await expect(page.locator('h1')).toContainText('Pašerák');
});

test('CSFD test - Pravá blondýnka', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');

  const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
  if (await cookieButton.isVisible()) await cookieButton.click();

  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

  const personLink = page.getByRole('heading', { name: 'Reese Witherspoon', exact: true }).getByRole('link');
  await personLink.click();
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');

  await page.getByRole('link', { name: 'Srdečně vás zveme' }).first().click();
  await expect(page.locator('h1')).toContainText('Srdečně vás zveme');
});

test('CSFD test - Forrest Gump', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');

  const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
  if (await cookieButton.isVisible()) await cookieButton.click();

  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Tom Hanks');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

  const personLink = page.getByRole('heading', { name: 'Tom Hanks', exact: true }).getByRole('link');
  await personLink.click();
  await expect(page.locator('h1')).toContainText('Tom Hanks');

  await page.getByRole('link', { name: 'Forrest Gump' }).first().click();
  await expect(page.locator('h1')).toContainText('Forrest Gump');
});


