import { test, expect } from '@playwright/test';

test('CSFD test - Pašerák', async ({ page }) => {
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

test('CSFD test - Legally Blonde', async ({ page }) => {
  // stejné kroky, jen jiné vyhledávání a film
});

test('CSFD test - Forrest Gump', async ({ page }) => {
  // stejné kroky, jen jiné vyhledávání a film
});