import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://div.cz/');

  await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Šílený Max: Zběsilá cesta');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await page.getByText('Šílený Max: Zběsilá cesta', { exact: true }).click();
  await expect(page.locator('h2')).toContainText('Šílený Max: Zběsilá cesta');

const link = page.getByRole('link', { name: 'Hrají' });

// čekáme, až bude prvek viditelný
await link.waitFor({ state: 'visible', timeout: 15000 });

// posuneme do view (Firefox někdy potřebuje explicitní scroll)
await link.scrollIntoViewIfNeeded();

// klikneme na prvek
await link.click();

// nyní čekáme na odkaz "Charlize Theron"
const charlizeLink = page.getByRole('heading', { name: 'Charlize Theron' }).getByRole('link');
await expect(charlizeLink).toBeVisible({ timeout: 15000 });
await charlizeLink.click();

// kontrola výsledného textu
await expect(page.locator('h2')).toContainText('Charlize Theron', { timeout: 15000 });
});




test('test2', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Šílený Max: Zběsilá cesta');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Šílený Max: Zběsilá cesta');

 
  await page.getByText('Šílený Max: Zběsilá cesta', { exact: true }).click();


  await page.getByRole('link', { name: 'Šílený Max (1979)' }).click();
 await expect(page.locator('h2')).toContainText('Šílený Max');
 
  await page.getByRole('link', { name: 'Trailer' }).click();

  

});


test('test3', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Šílený Max 2: Bojovník silnic');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Šílený Max 2: Bojovník silnic');

 
  await page.getByText('Šílený Max 2: Bojovník silnic', { exact: true }).click();

await page.getByRole('link', { name: 'Mel Gibson' }).waitFor({ state: 'visible', timeout: 12000 });
await page.getByRole('link', { name: 'Mel Gibson' }).click();
await expect(page.locator('h2')).toContainText('Mel Gibson');
await page.getByRole('link', { name: 'Miliónový hurikán' }).click();
await expect(page.locator('h2')).toContainText('Miliónový hurikán', { timeout: 15000 });
  
  

});

test('testallien', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Vetřelec');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Vetřelec');

 
  await page.getByText('Vetřelec', { exact: true }).click();


await page.getByRole('link', { name: 'Sigourney Weaver' }).first().click();

await expect(page.locator('h2')).toContainText('Sigourney Weaver');
await page.getByRole('link', { name: 'Avatar: The Way of Water' }).click();
await expect(page.locator('h2')).toContainText('Avatar: The Way of Water');
  
  

});

test('testReese', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Srdečně vás zveme');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Srdečně vás zveme');

 
  await page.getByText('Srdečně vás zveme', { exact: true }).click();

await page.getByRole('link', { name: 'Reese Witherspoon' }).click({ timeout: 12000 });
await expect(page.locator('h2')).toContainText('Reese Witherspoon');
await page.getByRole('link', { name: 'U tebe nebo u mě' }).click();
await expect(page.locator('h2')).toContainText('U tebe nebo u mě');
  
  
});


test('testkate', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Lee: Fotografka v první linii');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Lee: Fotografka v první linii');

 
  await page.getByText('Lee: Fotografka v první linii', { exact: true }).click();

await page.getByRole('link', { name: 'Kate Winslet' }).click({ timeout: 12000 });
await expect(page.locator('h2')).toContainText('Kate Winslet');

  
  
});