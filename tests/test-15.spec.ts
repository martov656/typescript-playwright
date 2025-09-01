import { test, expect } from '@playwright/test';




test('testdatart', async ({ page }) => {

await page.goto('https://www.datart.cz/');
await page.getByRole('button', { name: 'Odmítnout volitelné cookies' }).click();
await page.getByRole('button', { name: 'Přihlásit' }).click();
await page.getByRole('textbox', { name: 'E-mail', exact: true }).click({
   
  });
await page.getByRole('textbox', { name: 'E-mail', exact: true }).fill('ma@se.cz');
await page.getByRole('textbox', { name: 'Heslo' }).click({
   
  });
await page.getByRole('textbox', { name: 'Heslo' }).fill('123456789');
await page.locator('#snippet--header-loginForm-dialog').getByRole('button', { name: 'Přihlásit' }).click();

await page.getByRole('button', { name: 'Т Тимур З' }).click();


await page.getByRole('link', { name: 'Moje objednávky' }).click();




  });



    test('datart2', async ({ page }) => {

await page.goto('https://www.datart.cz/');
await page.getByRole('button', { name: 'Odmítnout volitelné cookies' }).click();
await page.getByRole('button', { name: 'Přihlásit' }).click();
await page.getByRole('textbox', { name: 'E-mail', exact: true }).click({
   
  });
await page.getByRole('textbox', { name: 'E-mail', exact: true }).fill('ma@se.cz');
await page.getByRole('textbox', { name: 'Heslo' }).click({
   
  });
await page.getByRole('textbox', { name: 'Heslo' }).fill('123456789');
await page.locator('#snippet--header-loginForm-dialog').getByRole('button', { name: 'Přihlásit' }).click();

await page.getByRole('button', { name: 'Т Тимур З' }).click();


await page.getByRole('link', { name: 'Odhlásit se' }).click();




  });

  test('datartobj', async ({ page }) => {



await page.goto('https://www.datart.cz/'); 
await page.getByRole('button', { name: 'Odmítnout volitelné cookies' }).click(); 
await page.getByRole('button', { name: 'Přihlásit' }).click(); 
await page.getByRole('textbox', { name: 'E-mail', exact: true }).click({ }); 
await page.getByRole('textbox', { name: 'E-mail', exact: true }).fill('ma@se.cz'); 
await page.getByRole('textbox', { name: 'Heslo' }).click({ }); 
await page.getByRole('textbox', { name: 'Heslo' }).fill('123456789'); 
await page.locator('#snippet--header-loginForm-dialog').getByRole('button', { name: 'Přihlásit' }).click(); 
await page.getByRole('link', { name: 'košík množství 1 cena 149 Kč' }).click(); 
await expect(page.locator('section')).toContainText('SanDisk Cruzer Blade 16GB bílá barva');
 await page.getByRole('link', { name: 'Pokračovat »' }).click();
 await page.getByRole('link', { name: 'Pokračovat »' }).nth(1).click(); 
await page.getByRole('main').getByRole('button', { name: 'Pokračovat »' }).click();

await page.waitForSelector('button:has-text("Dokončit objednávku se závazkem platby")');

// ověříme, že tlačítko existuje
await expect(
  page.locator('#basket-step-four-form').getByRole('button', { name: 'Dokončit objednávku se závazkem platby' })
).toBeVisible();

// do logu, ať je jasné, že jsme tam dorazili
console.log("Test se zastavil u tlačítka 'Dokončit objednávku se závazkem platby'. Objednávka nebyla odeslána.");




  });


  



