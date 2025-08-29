import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.kinobox.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByLabel('Hlavní navigace').getByRole('link', { name: 'Žebříčky' }).click();
  await page.getByRole('link', { name: 'Vykoupení z věznice Shawshank' }).click();
  await expect(page.locator('h1')).toContainText('Vykoupení z věznice Shawshank');
 

  await page.getByRole('link', { name: 'Tim Robbins Tim Robbins Andy' }).click();
  
  await expect(page.getByRole('link', { name: 'Tim Robbins', exact: true })).toBeVisible();



});

test('test2', async ({ page }) => {
  await page.goto('https://www.kinobox.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();


  await page.getByPlaceholder('Hledat film, seriál...').click();
  await page.getByPlaceholder('Hledat film, seriál...').fill('Reese Whitherspoon');
  await page.getByRole('link', { name: 'Reese Witherspoon Reese' }).click();

 
  await expect(page.getByRole('link', { name: 'Reese Witherspoon', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Milenec nebo vrah Milenec' }).click();
  await expect(page.getByRole('link', { name: 'Milenec nebo vrah', exact: true })).toBeVisible();
  
  await page.getByRole('button', { name: 'Recenze Recenze (3)' }).click();
  await expect(page.getByRole('link', { name: 'Recenze filmu Milenec nebo' })).toBeVisible();



});

test('test3', async ({ page }) => {
  await page.goto('https://www.kinobox.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByPlaceholder('Hledat film, seriál...').click();
  await page.getByPlaceholder('Hledat film, seriál...').fill('Salma Hayek');
  await page.getByRole('link', { name: 'Salma Hayek Salma Hayek (1966)' }).click();
   await expect(page.getByRole('link', { name: 'Salma Hayek', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Filmy a seriály Filmy a seriá' }).click();

  
  await page.getByRole('link', { name: 'Desperado (1995)' }).click();
    page.goBack()
  await page.getByRole('button', { name: 'Videa Videa' }).click();

});

test('test4', async ({ page }) => {
  await page.goto('https://www.kinobox.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByPlaceholder('Hledat film, seriál...').click();
  await page.getByPlaceholder('Hledat film, seriál...').fill('Eva Longoria');
  await page.getByRole('link', { name: 'Eva Longoria Eva Longoria (1975)' }).click();
  await expect(page.getByRole('link', { name: 'Eva Longoria', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Eva Longoria a všechny chutě' }).click();
  await expect(page.getByRole('link', { name: 'Eva Longoria a všechny chutě Mexika', exact: true })).toBeVisible();
  await page.getByRole('link', { name: '1. sezóna 1. série, Eva' }).click();
page.goBack()
page.goBack()


await page.getByRole('link', { name: 'Manžel na zkoušku Manžel na' }).click();

await expect(page.getByRole('link', { name: 'Manžel na zkoušku', exact: true })).toBeVisible();
});


test('test47', async ({ page }) => {
  await page.goto('https://www.kinobox.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByPlaceholder('Hledat film, seriál...').click();
  await page.getByPlaceholder('Hledat film, seriál...').fill('salma hayek');
  await page.getByRole('link', { name: 'Salma Hayek Salma Hayek (1966)' }).click();
   await expect(page.getByRole('link', { name: 'Salma Hayek', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Filmy a seriály Filmy a seriá' }).click();

  
  await page.getByRole('link', { name: 'Desperado (1995)' }).click();
    page.goBack()
  await page.getByRole('button', { name: 'Videa Videa' }).click();

});