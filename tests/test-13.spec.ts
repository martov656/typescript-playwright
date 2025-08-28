import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.super.cz/');
  
  
  
  await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Victoria Silvstedt');
  await page.getByRole('button', { name: 'Vyhledat' }).click();


  await expect(page.locator('#top-row-content-wrapper-ref-element')).toContainText('Victoria Silvstedt');

  await page.getByRole('link', { name: 'Victoria Silvstedt – Wikipedie' }).click();
  await expect(page.locator('#firstHeading')).toContainText('Victoria Silvstedt');
  
  

});

test('testreese2', async ({ page }) => {
  await page.goto('https://www.super.cz/');
  

await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Reese Witherspoon');

await page.getByRole('button', { name: 'Reese Witherspoonová', exact: true }).click();

 
await page.getByRole('link', { name: 'Reese Witherspoonová –' }).click();
await expect(page.locator('#firstHeading')).toContainText('Reese Witherspoonová');
await page.getByRole('link', { name: 'Pravá blondýnka' }).first().click();
await expect(page.locator('#firstHeading')).toContainText('Pravá blondýnka');


  

  

});


test('testreese3', async ({ page }) => {
  await page.goto('https://www.super.cz/');
  

await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Reese Witherspoon');

await page.getByRole('button', { name: 'Reese Witherspoonová', exact: true }).click();


await page.getByRole('link', { name: 'Reese Witherspoon | ČSFD.cz' }).click();
await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page.locator('h1')).toContainText('Reese Witherspoon');
await page.getByRole('link', { name: 'Srdečně vás zveme' }).first().click();


  

});


test('testreese4', async ({ page }) => {
  await page.goto('https://www.super.cz/');
  

await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Reese Witherspoon');

await page.getByRole('button', { name: 'Reese Witherspoonová', exact: true }).click();


await page.getByRole('link', { name: 'Reese Witherspoon | ČSFD.cz' }).click();
await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page.locator('h1')).toContainText('Reese Witherspoon');
await page.getByRole('link', { name: 'U tebe nebo u mě?' }).first().click();


  

});

test('testreese5', async ({ page }) => {
  await page.goto('https://www.super.cz/');
  

await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Reese Witherspoon');

await page.getByRole('button', { name: 'Reese Witherspoonová', exact: true }).click();


await page.getByRole('link', { name: 'Reese Witherspoon | ČSFD.cz' }).click();
await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page.locator('h1')).toContainText('Reese Witherspoon');
await page.getByRole('link', { name: 'The Morning Show' }).first().click();


  

});

test('testreese6', async ({ page }) => {
  await page.goto('https://www.super.cz/');
  

await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Reese Witherspoon');

await page.getByRole('button', { name: 'Reese Witherspoonová', exact: true }).click();


await page.getByRole('link', { name: 'Reese Witherspoon | ČSFD.cz' }).click();
await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page.locator('h1')).toContainText('Reese Witherspoon');
await page.getByRole('link', { name: 'Divočina' }).first().click();


  

});

test('testreese7', async ({ page }) => {
  await page.goto('https://www.super.cz/');
  

await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Reese Witherspoon');

await page.getByRole('button', { name: 'Reese Witherspoonová', exact: true }).click();


await page.getByRole('link', { name: 'Reese Witherspoon | ČSFD.cz' }).click();
await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page.locator('h1')).toContainText('Reese Witherspoon');
await page.getByRole('link', { name: 'Divoká dvojka' }).first().click();


  

});

test('testreese8', async ({ page }) => {
  await page.goto('https://www.super.cz/');
  

await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Reese Witherspoon');

await page.getByRole('button', { name: 'Reese Witherspoonová', exact: true }).click();


await page.getByRole('link', { name: 'Reese Witherspoon | ČSFD.cz' }).click();
await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page.locator('h1')).toContainText('Reese Witherspoon');
await page.getByRole('link', { name: 'Který je ten pravý?' }).first().click();


  

});

test('testreese9', async ({ page }) => {
  await page.goto('https://www.super.cz/');
  

await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Reese Witherspoon');

await page.getByRole('button', { name: 'Reese Witherspoonová', exact: true }).click();


await page.getByRole('link', { name: 'Reese Witherspoon | ČSFD.cz' }).click();
await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page.locator('h1')).toContainText('Reese Witherspoon');
await page.getByRole('link', { name: 'Tohle je válka!' }).first().click();


  

});