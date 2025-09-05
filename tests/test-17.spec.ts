import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.fdb.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
  await page.getByRole('link', { name: 'Reese Witherspoon Reese' }).click();
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');
  await page.getByRole('link', { name: 'Srdečně vás zveme' }).click();
  await expect(page.locator('h1')).toContainText('Srdečně vás zveme');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Otevřít IMDb' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('link', { name: 'Home' })).toBeVisible();
  await page1.getByTestId('accept-button').click();
  await page1.getByTestId('mosaic-img-0-1').click();
  await expect(page1.getByTestId('media-viewer__touch-handler')).toBeVisible();
});

test('testKate', async ({ page }) => {
  await page.goto('https://www.fdb.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  

  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Kate Beckinsale');
  await page.getByRole('link', { name: 'Kate Beckinsale Kate' }).click();
  await expect(page.locator('h1')).toContainText('Kate Beckinsale');

await page.getByRole('link', { name: 'Klik - život na dálkové ovládání', exact: true }).click();


await expect(page.locator('h1')).toContainText('Klik - život na dálkové ovládání');

const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Otevřít IMDb' }).click();
  const page1 = await page1Promise;
await expect(page1.getByRole('link', { name: 'Home' })).toBeVisible();
await page1.getByTestId('accept-button').click();
await page1.getByTestId('mosaic-img-0-0').click();
await expect(page1.getByTestId('media-viewer__touch-handler')).toBeVisible();

  
});

test('testKateW', async ({ page }) => {
  await page.goto('https://www.fdb.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  

  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Kate Winslet');
  await page.getByRole('link', { name: 'Kate Winslet Kate' }).click();
  await expect(page.locator('h1')).toContainText('Kate Winslet');

  await page.getByRole('link', { name: 'Celá filmografie' }).click();
  await expect(page.locator('#main')).toContainText('Kate Winslet');
  await page.getByRole('link', { name: 'Lee: Fotografka v první linii' }).click();
  await expect(page.locator('h1')).toContainText('Lee: Fotografka v první linii');

});

test('testJen', async ({ page }) => {
  await page.goto('https://www.fdb.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  

  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Jennifer Aniston');
  await page.getByRole('link', { name: 'Jennifer Aniston Jennifer' }).click();
 

  await expect(page.locator('h1')).toContainText('Jennifer Aniston');

await page.getByRole('link', { name: 'Hra s nevěrou', exact: true }).click();
await expect(page.locator('h1')).toContainText('Hra s nevěrou');
await page.getByRole('link', { name: 'Clive Owen' }).click();
await expect(page.locator('h1')).toContainText('Clive Owen');

  

});

test('testJen2', async ({ page }) => {
  await page.goto('https://www.fdb.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  

  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Jennifer Aniston');
  await page.getByRole('link', { name: 'Jennifer Aniston Jennifer' }).click();
  await expect(page.locator('h1')).toContainText('Jennifer Aniston');

await page.getByRole('link', { name: 'Filmografie', exact: true }).click();
await page.getByRole('link', { name: 'Je prostě báječná' }).click();
await expect(page.locator('h1')).toContainText('Je prostě báječná');
await page.locator('section').filter({ hasText: 'Popis a galerie+37Živelná' }).locator('img').nth(2).click();
await expect(page.getByRole('dialog', { name: 'Galerie' }).locator('img')).toBeVisible();



});

test('testJen3', async ({ page }) => {

await page.goto('https://www.fdb.cz/');
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  

  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Jennifer Aniston');
  await page.getByRole('link', { name: 'Jennifer Aniston Jennifer' }).click();
  await expect(page.locator('h1')).toContainText('Jennifer Aniston');


await page.getByRole('link', { name: 'Filmografie', exact: true }).click();
await page.getByRole('link', { name: 'Pařba o Vánocích' }).click();
await expect(page.locator('h1')).toContainText('Pařba o Vánocích');
await page.getByRole('button', { name: 'Zobrazit další' }).click();
const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Otevřít IMDb' }).click();
  const page1 = await page1Promise;
await page1.getByTestId('accept-button').click();
await page1.getByTestId('hero-parent').getByRole('link', { name: 'Olivia Munn' }).click();
await expect(page1.getByTestId('hero__primary-text')).toContainText('Olivia Munn');




});

test('testbay', async ({ page }) => {
await page.goto('https://www.imdb.com/');

await page.getByTestId('suggestion-search').fill('Baywatch');
await page.getByRole('link', { name: 'Baywatch Baywatch 1989 David' }).click();
await page.getByTestId('accept-button').click();
await page.getByTestId('hero__primary-text').click();
await expect(page.getByTestId('hero__primary-text')).toContainText('Baywatch');
await page.getByText('All cast & crew').click();
await page.getByRole('link', { name: 'Heidi Mark', exact: true }).click();
await expect(page.getByTestId('hero__primary-text')).toContainText('Heidi Mark');
await page.getByTestId('mosaic-img-1-2').click();

await expect(page.getByTestId('media-viewer__touch-handler')).toBeVisible();




});

test('testbay2', async ({ page }) => {
await page.goto('https://www.imdb.com/');

await page.getByTestId('suggestion-search').fill('Baywatch');
await page.getByRole('link', { name: 'Baywatch Baywatch 1989 David' }).click();
await page.getByTestId('accept-button').click();
await page.getByTestId('hero__primary-text').click();
await expect(page.getByTestId('hero__primary-text')).toContainText('Baywatch');
await page.getByText('All cast & crew').click();
await page.getByRole('link', { name: 'Heidi Mark', exact: true }).click();
await expect(page.getByTestId('hero__primary-text')).toContainText('Heidi Mark');
await page.getByTestId('mosaic-img-1-2').click();

await expect(page.getByTestId('media-viewer__touch-handler')).toBeVisible();

await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Close' }).click();
await page.getByTestId('mv-breadcrumb-close-button').click();
await page.getByTestId('nm_kwn_for_1').getByText('Thunder in Paradise').click();
await expect(page.getByTestId('hero__primary-text')).toContainText('Thunder in Paradise');


});


test('testbest', async ({ page }) => {


  await page.goto('https://www.themoviedb.org/?language=cs');
  await page.getByRole('heading', { name: 'Nejnavštěvovanější' }).click();
  await expect(page.locator('#main')).toContainText('Nejnavštěvovanější');
  
  await page.getByRole('link', { name: 'Wednesday' }).first().click();
  await expect(page.locator('#original_header')).toContainText('Wednesday');





});



test('Proklik 5 nejnavštěvovanějších titulů', async ({ page }) => {
  await page.goto('https://www.themoviedb.org/?language=cs');

 
  await page.getByRole('link', { name: 'Kontaktujte nás' }).click();
  await expect(page.locator('#main')).toContainText('Get In Touch');

  
page.goBack()


await page.getByLabel('Filmy').click();
await page.getByRole('link', { name: 'Oblíbené' }).click();
await page.getByText('A Line of Fire').click();
await expect(page.locator('#original_header')).toContainText('A Line of Fire');


  
});









