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
  await page.getByRole('link', { name: 'Watch Official Trailer' }).nth(1).click   ();
     
  
 
});


test('testf', async ({ page }) => {
  await page.goto('https://www.imdb.com/');
    await page.getByTestId('reject-button').click();
  await page.getByTestId('suggestion-search').click();
  await page.getByTestId('suggestion-search').fill('Madonna');
 
  await page.getByRole('link', { name: 'Madonna Madonna Actress, A' }).click();
  await page.getByTestId('nm_kwn_for_0').getByText('A League of Their Own').click();
  await expect(page.getByRole('link', { name: 'View ’A League of Their Own’' })).toBeVisible();
  
page.goBack()
       
  await page.getByTestId('nm_kwn_for_2').getByText('Desperately Seeking Susan').click();
  await expect(page.getByTestId('hero__primary-text')).toContainText('Desperately Seeking Susan');

});

test('testm', async ({ page }) => {
  await page.goto('https://www.imdb.com/');
    await page.getByTestId('reject-button').click();
  await page.getByTestId('suggestion-search').click();
  await page.getByTestId('suggestion-search').fill('Madonna');
 
  await page.getByRole('link', { name: 'Madonna Madonna Actress, A' }).click();
  await page.getByTestId('nm_kwn_for_1').getByText('Evita').click();
  await expect(page.getByRole('link', { name: 'View ’Evita’' })).toBeVisible();
  


});

test('testReese', async ({ page }) => {
  await page.goto('https://www.imdb.com/');
    await page.getByTestId('reject-button').click();
  await page.getByTestId('suggestion-search').click();
  await page.getByTestId('suggestion-search').fill('Reese Witherspoon');
  await page.getByRole('link', { name: 'Reese Witherspoon Reese' }).click();
  await expect(page.getByTestId('hero__primary-text')).toContainText('Reese Witherspoon');


await page.getByTestId('cred_producer_12').getByText('The Morning Show').click();
await expect(page.getByTestId('hero__primary-text')).toContainText('The Morning Show');
await page.getByTestId('mosaic-img-0-0').click();
await expect(page.getByTestId('media-viewer__touch-handler')).toBeVisible();
await page.getByTestId('mv-breadcrumb-close-button').click();


});

test('testReesenot', async ({ page }) => {
  await page.goto('https://www.imdb.com/');
    await page.getByTestId('reject-button').click();
  await page.getByTestId('suggestion-search').click();
  await page.getByTestId('suggestion-search').fill('Reese Witherspoon');
  await page.getByRole('link', { name: 'Reese Witherspoon Reese' }).click();
  await expect(page.getByTestId('hero__primary-text')).toContainText('Reese Witherspoon');


await page.getByTestId('cred_producer_12').getByText('The Morning Show').click();
await expect(page.getByTestId('hero__primary-text')).toContainText('The Morning Show');
await page.getByTestId('mosaic-img-0-0').click();
await expect(page.getByTestId('media-viewer__touch-handler')).toBeVisible();



});