import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  

await page.goto('https://en.wikipedia.org/wiki/Main_Page');
await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('Victoria Silvstedt');
await page.getByRole('link', { name: 'Victoria Silvstedt Swedish' }).click();
await expect(page.locator('#firstHeading')).toContainText('Victoria Silvstedt');
await page.getByRole('link', { name: 'Ulrika Ericsson' }).click();
await expect(page.locator('#mw-content-text')).toContainText('Ulrika Ericsson');
page.goBack()

await page.getByRole('cell', { name: 'Silvstedt at the 2019 Cannes' }).locator('span').getByRole('link').click();

  

});



test('testReese', async ({ page }) => {
  
await page.goto('https://en.wikipedia.org/wiki/Main_Page');

await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('Reese Witherspoon');
await page.getByRole('link', { name: 'Reese Witherspoon American' }).click();
await expect(page.locator('#firstHeading')).toContainText('Reese Witherspoon');


await page.getByRole('link', { name: 'Reese Witherspoon filmography' }).click();
await expect(page.locator('#firstHeading')).toContainText('Reese Witherspoon filmography');

await page.getByRole('cell', { name: 'This Means War' }).click();
await expect(page.locator('#firstHeading')).toContainText('This Means War');
await page.getByRole('link', { name: 'Two men in suits, a woman' }).click();

  



});



test('testreese4', async ({ page }) => {



await page.goto('https://www.csfd.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();
 
  await expect(page.locator('#creators')).toContainText('Tvůrci');
  await page.getByRole('heading', { name: 'Reese Witherspoon', exact: true }).getByRole('link').click();
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');

await page.getByRole('link', { name: 'Srdečně vás zveme' }).first().click();

  await expect(page.locator('h1')).toContainText('Srdečně vás zveme');



});


test('testreesejarmark', async ({ page }) => {


await page.goto('https://www.csfd.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();
 
  await expect(page.locator('#creators')).toContainText('Tvůrci');
  await page.getByRole('heading', { name: 'Reese Witherspoon', exact: true }).getByRole('link').click();
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');

await page.getByRole('link', { name: 'Jarmark marnosti' }).first().click();

  await expect(page.locator('h1')).toContainText('Jarmark marnosti');



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

  


  test('testvicrec', async ({ page }) => {
    
  await page.goto('https://www.csfd.cz/');
  await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Victoria Silvstedt');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();
 
  await expect(page.locator('#creators')).toContainText('Tvůrci');
  await page.getByRole('heading', { name: 'Victoria Silvstedt', exact: true }).getByRole('link').click();
  await expect(page.locator('h1')).toContainText('Victoria Silvstedt');
  await page.getByRole('link', { name: '(K)lamač srdcí' }).click();
 
  await expect(page.locator('h1')).toContainText('(K)lamač srdcí');
  await page.getByRole('link', { name: 'Zajímavosti' }).click();




  });

   test('testdab2', async ({ page }) => {

  await page.goto('https://dabingforum.cz/');
  await page.getByRole('button', { name: 'Consent', exact: true }).click();

 
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Scarlett Johansson');
  await page.getByText('Scarlett Johansson').click();
  await expect(page.locator('h2').getByRole('link', { name: 'Scarlett Johansson' })).toBeVisible();
  await expect(page.locator('h2')).toContainText('Scarlett Johansson');
  await page.getByRole('link', { name: 'Jitka Moučková' }).first().click();
  await expect(page.locator('h2')).toContainText('Jitka Moučková');



  await page.getByRole('link', { name: 'Eva Longoria' }).nth(2).click();

  await expect(page.locator('#post_content23295')).toContainText('Eva Longoria');


   });

   test('testdab3', async ({ page }) => {

  await page.goto('https://dabingforum.cz/');
  await page.getByRole('button', { name: 'Consent', exact: true }).click();

 

await page.getByRole('link', { name: 'Dabingforum.cz - filmy a seri' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('eva longoria');

await page.getByText('Eva Longoria').click();
 await expect(page.locator('#post_content23295')).toContainText('Eva Longoria');
await page.getByRole('link', { name: 'Databáze herců a jejich dabérů' }).click();
await page.getByRole('link', { name: 'A-D Databáze' }).click();
await page.getByRole('link', { name: 'A', exact: true }).click();
await page.getByRole('link', { name: 'Jennifer Aniston' }).click();
await expect(page.locator('#post_content17417')).toContainText('Jennifer Aniston');


  


   });

   test('testdab4', async ({ page }) => {

  await page.goto('https://dabingforum.cz/');
  await page.getByRole('button', { name: 'Consent', exact: true }).click();

 

await page.getByRole('link', { name: 'Dabingforum.cz - filmy a seri' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Batman začíná');


await page.getByText('Batman začíná', { exact: true }).click();

await expect(page.locator('h2')).toContainText('Batman začíná');
await page.getByRole('link', { name: 'Christian Bale' }).click();
await expect(page.locator('h2')).toContainText('Christian Bale');




   });

   test('film Batman nejde najít', async ({ page }) => {
  await page.goto('https://dabingforum.cz/');
  await page.getByRole('button', { name: 'Consent', exact: true }).click();
  await page.getByRole('link', { name: 'Dabingforum.cz - filmy a seri' }).click();
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Batman');
  await page.keyboard.press('Enter'); // spustí vyhledávání

  // Počkáme na výsledek vyhledávání (např. na element s výsledky)
  await page.waitForTimeout(1500); // nebo lepší: wait for specific result element

  // Najdeme všechny výsledky (příklad, uprav podle skutečné HTML struktury)
  const results = await page.locator('.search-results-selector').all(); // Zjisti správný selektor!

  if (results.length === 0) {
    console.log('Film "Batman" nebyl nalezen.');
  } else {
    throw new Error('Film "Batman" byl nalezen, test očekával neúspěch.');
  }
});

test('film Superman nejde najít', async ({ page }) => {
  await page.goto('https://dabingforum.cz/');
  await page.getByRole('button', { name: 'Consent', exact: true }).click();
  await page.getByRole('link', { name: 'Dabingforum.cz - filmy a seri' }).click();
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Superman');
  await page.keyboard.press('Enter');

  await page.waitForTimeout(1500); // nebo lepší: wait for specific result element

  const results = await page.locator('.search-results-selector').all(); // Zjisti správný selektor!

  if (results.length === 0) {
    console.log('Film "Superman" nebyl nalezen.');
  } else {
    throw new Error('Film "Superman" byl nalezen, test očekával neúspěch.');
  }
});
  

    test('testdabreese', async ({ page }) => {

  await page.goto('https://dabingforum.cz/');
  await page.getByRole('button', { name: 'Consent', exact: true }).click();

 
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Reese Witherspoon');
  await page.getByText('Reese Witherspoon').click();
  await expect(page.locator('h2').getByRole('link', { name: 'Reese Witherspoon' })).toBeVisible();
  await expect(page.locator('h2')).toContainText('Reese Witherspoon');
  await page.getByRole('link', { name: 'Lucie Benešová' }).first().click();
  await expect(page.locator('h2')).toContainText('Lucie Benešová');


  await page.getByRole('link', { name: 'Nicole Kidman' }).nth(2).click();

     await expect(page.locator('h2')).toContainText('Nicole Kidman');

   });