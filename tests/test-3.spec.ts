import { test, expect } from '@playwright/test';






  test('test3', async ({ page }) => {
await page.goto('https://www.imdb.com/');
await page.getByRole('link', { name: 'Sign in', exact: true }).first().click();
  await page.getByTestId('sign_in_option_IMDB').click();

await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Email or mobile phone number' }).fill('martintovarek2@gmail.com');
await page.getByRole('textbox', { name: 'Password' }).fill('Whitesnake1987');

await page.getByRole('button', { name: 'Sign in' }).click();
await expect(page.locator('#imdbHeader')).toContainText('Martin');
  });



  