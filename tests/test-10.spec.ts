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
  await page.getByRole('button', { name: 'Play' }).click ();      
  
 
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