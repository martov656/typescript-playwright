import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://www.csfd.cz/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByRole('link', { name: 'Žebříčky' }).click();
  await expect(page.locator('h1')).toContainText('Nejlepší filmy - Žebříčky');
  await page.getByText('Poslední skaut').click();
  
  await expect(page.locator('h1')).toContainText('Poslední skaut');
});

test('test2', async ({ page }) => {
  await page.goto('https://www.csfd.cz/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByRole('link', { name: 'Žebříčky' }).click();
  await expect(page.locator('h1')).toContainText('Nejlepší filmy - Žebříčky');
  await page.getByText('Chyť mě, když to dokážeš').click();
  await expect(page.locator('h1')).toContainText('Chyť mě, když to dokážeš');
      
   page.goBack()

   await page.getByRole('link', { name: '800' }).nth(1).click();
   await page.getByText('Trosečník').click();
   await expect(page.locator('h1')).toContainText('Trosečník');
   await page.locator('#creators').getByRole('link', { name: 'Tom Hanks' }).click();
   await expect(page.locator('h1')).toContainText('Tom Hanks');
    

});