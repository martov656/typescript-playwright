import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.imdb.com/');
  await page.getByTestId('suggestion-search').click();
  await page.getByTestId('suggestion-search').fill('Eva Longoria');
  await page.getByRole('link', { name: 'Eva Longoria Eva Longoria' }).click();
  await page.getByTestId('reject-button').click();
  await expect(page.getByTestId('hero__primary-text')).toContainText('Eva Longoria');
  await page.getByTestId('accordion-item-producer-previous-projects').click();
  await page.getByText('Eva Longoria: Searching for Mexico').click();
   await expect(page.getByTestId('hero__primary-text')).toContainText('Eva Longoria: Searching for Mexico');
  await page.getByRole('link', { name: 'Watch Official Trailer' }).nth(1).click();
  await page.getByRole('button', { name: 'Play' }).click();
  
 
});

