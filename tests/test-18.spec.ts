import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

await page.goto('https://www.moviezone.cz/');
await page.getByTestId('button-agree').click();
await page.getByRole('textbox', { name: 'Hledat...' }).first().fill('Reese Witherspoon');
await page.getByRole('textbox', { name: 'Hledat...' }).first().press('Enter');


await page.getByRole('link', { name: 'Srdečně vás zveme: Recenze' }).click();



await expect(page.locator('#mainContainer')).toContainText('Srdečně vás zveme | You´re Cordially Invited | 2025');
const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'kinobox' }).click();
  const page1 = await page1Promise;
await page1.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page1.locator('h1')).toContainText('Srdečně vás zveme');




});


test('testkate', async ({ page }) => {
  
await page.goto('https://en.wikipedia.org/wiki/Main_Page');

await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('Kate Winslet');
await page.getByRole('link', { name: 'Kate Winslet English' }).click();
await expect(page.locator('#firstHeading')).toContainText('Kate Winslet');


await page.getByRole('link', { name: 'Titanic', exact: true }).nth(1).click();
await expect(page.locator('#firstHeading')).toContainText('Titanic');
await page.locator('div:nth-child(2) > .thumbimage > span > .mw-file-description').click();
await expect(page.locator('.mw-mmv-final-image')).toBeVisible();


  

});


test('testkateb', async ({ page }) => {
  
await page.goto('https://en.wikipedia.org/wiki/Main_Page');

await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('Kate Beckinsale');
await page.getByRole('link', { name: 'Kate Beckinsale English' }).click();


await page.getByRole('row', { name: '2001 Pearl Harbor Nurse Lt.' }).getByRole('link').click();
await expect(page.locator('#firstHeading')).toContainText('Pearl Harbor');
await page.getByRole('listitem').filter({ hasText: /^Kate Beckinsale$/ }).getByRole('link').click();
await expect(page.locator('#firstHeading')).toContainText('Kate Beckinsale');
await page.getByRole('figure', { name: 'Beckinsale at the 2008' }).getByRole('link').first().click();
await expect(page.getByRole('img', { name: 'undefined' })).toBeVisible();


});

test('testjou', async ({ page }) => {
  
await page.goto('https://en.wikipedia.org/wiki/Main_Page');



await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('Journey ');
await page.getByRole('link', { name: 'Journey (band) American rock' }).click();
await expect(page.locator('#firstHeading')).toContainText('Journey (band)');
await expect(page.locator('#toc-Discography').getByRole('link', { name: 'Discography' })).toBeVisible();
await page.getByRole('link', { name: 'Studio albums' }).click();
await page.getByRole('listitem').filter({ hasText: 'Frontiers (1983)' }).getByRole('link').click();
await expect(page.locator('#firstHeading')).toContainText('Frontiers');
await page.getByRole('listitem').filter({ hasText: 'Steve Perry – lead vocals' }).getByRole('link').click();
await expect(page.locator('#firstHeading')).toContainText('Steve Perry');




});


test('testkatebeva', async ({ page }) => {
  
await page.goto('https://en.wikipedia.org/wiki/Main_Page');

await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('Eva Longoria');
await page.getByRole('link', { name: 'Eva Longoria American' }).click();


await page.getByRole('link', { name: 'Eva Longoria filmography' }).click();
await expect(page.locator('#firstHeading')).toContainText('Eva Longoria filmography');
await page.getByRole('link', { name: 'The Sentinel' }).click();

await expect(page.locator('#firstHeading')).toContainText('The Sentinel');
await page.getByRole('listitem').filter({ hasText: /^Eva Longoria$/ }).click();
await page.getByRole('listitem').filter({ hasText: /^Eva Longoria$/ }).getByRole('link').click();
await expect(page.locator('#firstHeading')).toContainText('Eva Longoria');
await page.getByRole('figure', { name: 'Longoria at the 2006 Cannes' }).getByRole('link').click();
await expect(page.getByRole('img', { name: 'undefined' })).toBeVisible();






});

