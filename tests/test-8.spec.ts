import { test, expect } from '@playwright/test';


test.describe.parallel('Paralelní testy', () => {

  test('test', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.csfd.cz/');

    const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
    if (await cookieButton.isVisible().catch(() => false)) {
      await cookieButton.click();
    }

    await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Clint Eastwood');
    await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

    await page.getByRole('heading', { name: 'Clint Eastwood', exact: true }).getByRole('link').click();
    await expect(page.locator('h1')).toContainText('Clint Eastwood');

    await page.getByRole('link', { name: 'Pašerák' }).first().click();
    await expect(page.locator('h1')).toContainText('Pašerák');

    await page.getByRole('link', { name: 'Trailer' }).click();
  });

  test('CSFD - proklikání všech filmů z výsledků', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.csfd.cz/');

    const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
    if (await cookieButton.isVisible().catch(() => false)) {
      await cookieButton.click();
    }

    await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Clint Eastwood');
    await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

    const actressLink = page.getByRole('heading', { name: 'Clint Eastwood', exact: true }).getByRole('link');
    await actressLink.click();
    await expect(page.locator('h1')).toContainText('Clint Eastwood');

    await page.getByRole('link', { name: 'Bojové nasazení' }).first().click();
    await expect(page.locator('h1')).toContainText('Bojové nasazení');

    await page.getByRole('link', { name: 'Trailer' }).click();
  });

  

});