import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.themoviedb.org/');
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).click();
   await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('Reese Witherspoon');
    await page.getByText('Reese Witherspoon in People').click();
   await page.getByText('Reese Witherspoon', { exact: true }).click();
 
  
  await page.getByRole('link', { name: 'Reese Witherspoon', exact: true }).click();
  await expect(page.locator('#media_v4')).toContainText('Reese Witherspoon');
 
 
  await page.getByRole('listitem').filter({ hasText: 'This Means War' }).locator('div').getByRole('link').click();
  await page.getByRole('link', { name: 'This Means War' }).click();
  await expect(page.locator('#original_header')).toContainText('This Means War');

  await page.locator('#media_scroller').getByRole('link').click();


  await page.getByRole('dialog', { name: 'This Means War (2012) Trailer' }).locator('iframe').contentFrame().locator('video').click();
});

test('Reese Witherspoon Known For proklik2', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.themoviedb.org/');

  // Vyhledání herečky
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).click();
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('Reese Witherspoon');
  await page.getByText('Reese Witherspoon in People').click();

  // Kliknutí na samotnou herečku
  await page.getByText('Reese Witherspoon', { exact: true }).click();
  await expect(page.locator('#media_v4')).toContainText('Reese Witherspoon');


 await page.getByRole('listitem').filter({ hasText: 'Legally Blonde' }).locator('div').getByRole('link').click();


await page.getByText('Selma Blair').click();
await expect(page.locator('#media_v4')).toContainText('Selma Blair');
await page.getByRole('paragraph').filter({ hasText: /^Cruel Intentions$/ }).getByRole('link').click();
await expect(page.locator('#original_header')).toContainText('Cruel Intentions');


await page.getByRole('link', { name: 'Play Trailer' }).click();
await page.getByRole('dialog', { name: 'Play Trailer' }).getByLabel('Close').click();

});


test('TMDB - Silo (2023)', async ({ page }) => {

await page.goto('https://www.themoviedb.org/?language=cs-CZ');

  // vyhledání přes searchbox
  const searchBox = page.getByPlaceholder('Hledat film, seriál, osobu...', { exact: true });
  await searchBox.click();
  await searchBox.fill('Jennifer Aniston');

  
 await page.getByText('Jennifer Aniston v lidech').click({
    
  });

await page.getByText('Jennifer Aniston', { exact: true }).click();

 await expect(page.locator('#main')).toContainText('Jennifer Aniston');
 await page.getByText('Jennifer Aniston', { exact: true }).click();
 await expect(page.locator('#media_v4')).toContainText('Jennifer Aniston');
 await page.getByRole('paragraph').filter({ hasText: 'Zkus mě rozesmát' }).getByRole('link').click();
 
 await expect(page.getByRole('img', { name: 'Zkus mě rozesmát' }).nth(1)).toBeVisible();

});







  


