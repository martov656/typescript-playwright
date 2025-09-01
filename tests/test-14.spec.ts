import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.themoviedb.org/');
  await page.getByLabel('Movies').click();
  await page.getByRole('menuitem', { name: 'Popular' }).getByLabel('Popular').click();
  await page.getByText('Superman').click();
  await expect(page.locator('#original_header')).toContainText('Superman');
  await page.getByText('Rachel Brosnahan').click();
  await expect(page.locator('#media_v4')).toContainText('Rachel Brosnahan');
});




test('testBaywatch', async ({ page }) => {
  await page.goto('https://www.themoviedb.org/');
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).click({
    
  });
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('Pobřežní hlídka');
  await page.getByText('Baywatch in TV Shows').click();
  await page.getByRole('link', { name: 'Baywatch', exact: true }).nth(1).click();
  await expect(page.locator('#original_header')).toContainText('Baywatch');

});


test('testBaywatch1', async ({ page }) => {
await page.goto('https://www.themoviedb.org/?language=cs-CZ');
await page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true }).click();
await page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true }).fill('Pobřežní hlídka');
await page.getByText('Pobřežní hlídka ve filmech').click();
await page.getByRole('link', { name: 'Pobřežní hlídka (Baywatch)' }).click();
await expect(page.locator('#original_header')).toContainText('Pobřežní hlídka');

});

test('testBaywatchczech', async ({ page }) => {
await page.goto('https://www.themoviedb.org/?language=cs-CZ');

await page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true }).fill('Pobřežní hlídka');
await page.getByText('Pobřežní hlídka v seriálech').click();
await page.getByRole('link', { name: 'Pobřežní hlídka (Baywatch)' }).click();
await expect(page.locator('#original_header')).toContainText('Pobřežní hlídka');

});

test('TMDB - Pobřežní hlídka v češtině', async ({ page }) => {
  // Explicitně načteme stránku v české mutaci
  await page.goto('https://www.themoviedb.org/?language=cs-CZ');

  // Vyhledávání
  const searchBox = page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true });
  await searchBox.click();
  await searchBox.fill('Pobřežní hlídka');
  
  // Klik na přesný výsledek
  await page.getByText('Pobřežní hlídka v seriálech').click();
  await page.getByRole('link', { name: 'Pobřežní hlídka (Baywatch)' }).click();

  // Ověření, že jsme na stránce filmu
  await expect(page.locator('#original_header')).toContainText('Pobřežní hlídka');
});

test('TMDB - Sedmi', async ({ page }) => {
  // Explicitně načteme stránku v české mutaci
  await page.goto('https://www.themoviedb.org/?language=cs-CZ');

  // Vyhledávání
  const searchBox = page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true });
  await searchBox.click();
  await searchBox.fill('Sedmilhářky');
  
  // Klik na přesný výsledek
  await page.getByText('Sedmilhářky v seriálech').click();
  await page.getByRole('link', { name: 'Sedmilhářky (Big Little Lies)' }).click();

  // Ověření, že jsme na stránce filmu
  await expect(page.locator('#original_header')).toContainText('Sedmilhářky');



await page.getByRole('link', { name: '2. sezóna', exact: true }).click();
await page.getByText('Co udělaly?').click();

await expect(page.locator('#main_column')).toContainText('Co udělaly?');

await page.locator('.episode_images > div > a').first().click();
const page1Promise = page.waitForEvent('popup');
  await page.locator('.block.w-full').first().click();
  const page1 = await page1Promise;

});




test('TMDB - Silo2', async ({ page }) => {
  // Explicitně načteme stránku v české mutaci
  await page.goto('https://www.themoviedb.org/?language=cs-CZ');

  // Vyhledávání
  const searchBox = page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true });
  await searchBox.click();
  await searchBox.fill('Silo');
  
  // Klik na přesný výsledek
 
  await page.getByRole('option', { name: 'Silo v seriálech' }).locator('div').nth(1).click();
 

await expect(page.locator('#main')).toContainText('2023');


await page.getByRole('link', { name: 'Silo', exact: true }).nth(1).click();


  await expect(page.locator('#main')).toContainText('2023');

  await expect(page.locator('#original_header')).toContainText('2023');
  
});


test('TMDB - Silo', async ({ page }) => {
  // Explicitně načteme stránku v české mutaci
  await page.goto('https://www.themoviedb.org/?language=cs-CZ');

  // Vyhledávání
  const searchBox = page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true });
  await searchBox.click();
  await searchBox.fill('Tohle je válka!');

  await page.getByText('Tohle je válka ! (This Means').click();
  await expect(page.locator('#main')).toContainText('Tohle je válka ! (This Means War)');
  await page.getByRole('link', { name: 'Tohle je válka ! (This Means' }).click();
  await expect(page.locator('#original_header')).toContainText('Tohle je válka !');



});


test('testBaywatch45', async ({ page }) => {
  await page.goto('https://www.themoviedb.org/');
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).click({
    
  });
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('Pobřežní hlídka');
  await page.getByText('Baywatch in TV Shows').click();
  await page.getByRole('link', { name: 'Baywatch', exact: true }).nth(1).click();
  await expect(page.locator('#original_header')).toContainText('Baywatch');
  
});



test('TMDB - land3', async ({ page }) => {
  // Explicitně načteme stránku v české mutaci
  await page.goto('https://www.themoviedb.org/?language=cs-CZ');

  // Vyhledávání
  const searchBox = page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true });
  await searchBox.click();
  await searchBox.fill('Landman');
  
  // Klik na přesný výsledek
 
  await page.getByRole('option', { name: 'Landman v seriálech' }).locator('div').nth(1).click();
 

await expect(page.locator('#main')).toContainText('2024');


await page.getByRole('link', { name: 'Landman', exact: true }).nth(1).click();


  await expect(page.locator('#main')).toContainText('2024');

  await expect(page.locator('#original_header')).toContainText('2024');
  
});


test('TMDB - Chernobyl', async ({ page }) => {


await page.goto('https://www.themoviedb.org/?language=cs-CZ');


await page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true }).fill('Černobyl');
await page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true }).press('Enter');
await expect(page.locator('#main')).toContainText('Černobyl (Chernobyl)');
await page.getByRole('link', { name: 'Černobyl (Chernobyl)' }).click();
await expect(page.locator('#original_header')).toContainText('Černobyl');
await page.getByRole('link', { name: 'Miniseries', exact: true }).click();
await page.getByText('1. díl').click();



});

