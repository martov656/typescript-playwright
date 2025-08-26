import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.themoviedb.org/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ChuckNor');
  await page.getByRole('textbox', { name: 'Password' }).fill('Whitesnake1987');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Profil a nastavení' }).click();

  await expect(page.getByRole('tooltip')).toContainText('ChuckNor');


  await page.getByRole('link', { name: 'Odhlásit se' }).click();
  await expect(page.locator('#main')).toContainText('Logged Out!');
 
  
});


test('Přihlášení a odhlášení na TMDB', async ({ page }) => {
 
  await page.goto('https://www.themoviedb.org/');
  
  // Přihlášení
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ChuckNor');
  await page.getByRole('textbox', { name: 'Password' }).fill('Whitesnake1987');
  await page.getByRole('button', { name: 'Login' }).click();

  // Ověření přihlášení
 await expect(page.getByText('ChuckNor').first()).toBeVisible();

  // Odhlášení
  await page.getByRole('link', { name: 'Profil a nastavení' }).click();
  await page.getByRole('link', { name: 'Odhlásit se' }).click();

  // Ověření odhlášení
 await expect(page.locator('#main')).toContainText('Logged Out!');
 await expect(page.locator('#main')).toContainText('You have been successfully logged out.');
});


