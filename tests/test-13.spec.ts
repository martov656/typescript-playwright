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



test('testvic15', async ({ page }) => {
  await page.goto('https://www.super.cz/');
  
  
  
  await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Victoria Silvstedt');
  await page.getByRole('button', { name: 'Vyhledat' }).click();


  await expect(page.locator('#top-row-content-wrapper-ref-element')).toContainText('Victoria Silvstedt');

  await page.getByRole('link', { name: 'Victoria Silvstedt | ČSFD.cz' }).click();
await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page.locator('h1')).toContainText('Victoria Silvstedt');
await page.getByRole('link', { name: 'Plnou parou vzad' }).first().click();

  });

  test('testvicu2', async ({ page }) => {
    
  await page.goto('https://www.super.cz/');
  
  
  
  await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Victoria Silvstedt');
  await page.getByRole('button', { name: 'Vyhledat' }).click();


  await expect(page.locator('#top-row-content-wrapper-ref-element')).toContainText('Victoria Silvstedt');

  await page.getByRole('link', { name: 'Victoria Silvstedt | ČSFD.cz' }).click();
await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page.locator('h1')).toContainText('Victoria Silvstedt');
await page.getByRole('link', { name: 'Šílenci na prknech' }).first().click();

  });


  test('testvicrec', async ({ page }) => {
    
  await page.goto('https://www.super.cz/');
  
  
  
  await page.getByRole('textbox', { name: 'Vyhledat' }).fill('Victoria Silvstedt');
  await page.getByRole('button', { name: 'Vyhledat' }).click();


  await expect(page.locator('#top-row-content-wrapper-ref-element')).toContainText('Victoria Silvstedt');

  await page.getByRole('link', { name: 'Victoria Silvstedt | ČSFD.cz' }).click();
await page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' }).click();
await expect(page.locator('h1')).toContainText('Victoria Silvstedt');
await page.getByRole('link', { name: '(K)lamač srdcí' }).first().click();


await page.getByRole('link', { name: 'Recenze', exact: true }).click();
await page.getByRole('link', { name: '15', exact: true }).click();

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

   test('testdab5', async ({ page }) => {

  await page.goto('https://dabingforum.cz/');
  await page.getByRole('button', { name: 'Consent', exact: true }).click();

 

await page.getByRole('link', { name: 'Dabingforum.cz - filmy a seri' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Batman');


   });

  

   test('testdab8', async ({ page }) => {

  await page.goto('https://dabingforum.cz/');
  await page.getByRole('button', { name: 'Consent', exact: true }).click();

 

await page.getByRole('link', { name: 'Dabingforum.cz - filmy a seri' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Superman');


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