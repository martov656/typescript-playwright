import { test, expect } from '@playwright/test';

test('testBaywatch', async ({ page }) => {
  await page.goto('https://www.themoviedb.org/');
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).click({
    button: 'right'
  });
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('Pobřežní hlídka');
  await page.getByText('Baywatch in TV Shows').click();
  await page.getByRole('link', { name: 'Baywatch', exact: true }).nth(1).click();
  await expect(page.locator('#original_header')).toContainText('Baywatch');
});