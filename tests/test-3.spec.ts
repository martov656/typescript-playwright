import { test, expect } from '@playwright/test';


  test('test3', async ({ page }) => {
await page.goto('https://www.imdb.com/');
await page.getByRole('link', { name: 'Sign in', exact: true }).first().click();
  await page.getByTestId('sign_in_option_IMDB').click();

await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Email or mobile phone number' }).fill('martintovarek2@gmail.com');
await page.getByRole('textbox', { name: 'Password' }).fill('Whitesnake1987');

await page.getByRole('button', { name: 'Sign in' }).click();
await expect(page.locator('#imdbHeader')).toContainText('Martin');

await page.getByText('Martin').first().click();

await page.getByRole('menuitem', { name: 'Sign out' }).click();
await expect(page.locator('#imdbHeader')).toContainText('Sign in');

  });

  test('IMDB - Click all Known For movies for Kate ', async ({ page }) => {
   const actressName = 'Kate Beckinsale';
  await page.goto('https://www.imdb.com/');

  

  // Vyhledávání herečky
  const searchBox = page.locator('input[name="q"]');
  await searchBox.waitFor({ state: 'visible', timeout: 10000 });
  await searchBox.fill(actressName);
  await searchBox.press('Enter');

  // Klik na profil herečky
  const profileLink = page.locator(`a:has-text("${actressName}")`).first();
  await profileLink.waitFor({ state: 'visible', timeout: 10000 });
  await profileLink.click();

  // Ověření, že jsme na správném profilu
  await expect(page).toHaveTitle(new RegExp(actressName, 'i'));

  // Načti všechny filmy v sekci "Known for"
  
  await page.getByRole('link', { name: 'Known for' }).click({
   
  });

await page.getByTestId('accept-button').click();
await page.getByTestId('nm_kwn_for_0').getByText('Love & Friendship').click();
await expect(page.getByTestId('hero__primary-text')).toContainText('Love & Friendship');
await page.goBack();
await page.getByText('Underworld: Evolution').click();
await expect(page.getByTestId('hero__primary-text')).toContainText('Underworld: Evolution');
await page.goBack();
await page.getByTestId('nm_kwn_for_2').getByText('Underworld').click();
await expect(page.getByTestId('hero__primary-text')).toContainText('Underworld');
await page.goBack();
await page.getByText('Vacancy').click();
await expect(page.getByTestId('hero__primary-text')).toContainText('Vacancy');
await page.goBack();




});


test('IMDB - Click all Known For movies for Kate Beckinsalerr', async ({ page }) => {
  const actressName = 'Kate Beckinsale';
  await page.goto('https://www.imdb.com/');

  // Vyhledávání herečky
  const searchBox = page.locator('input[name="q"]');
  await searchBox.fill(actressName);
  await searchBox.press('Enter');

  // Klik na profil herečky
  const profileLink = page.locator(`a:has-text("${actressName}")`).first();
  await profileLink.click();

  // Ověření, že jsme na správném profilu
  await expect(page).toHaveTitle(new RegExp(actressName, 'i'));

  // Najdi všechny filmy v sekci "Known for"
  const knownForSection = page.locator('[data-testid="nm_knwnfor"]');
  await expect(knownForSection).toBeVisible();

  const knownForLinks = knownForSection.locator('a.ipc-primary-image-list-card__title');
  const count = await knownForLinks.count();
  expect(count).toBeGreaterThan(0);

  // Smyčka přes všechny filmy
  for (let i = 0; i < count; i++) {
    const movie = knownForLinks.nth(i);
    const title = await movie.textContent();

    // Scroll + klik
    await movie.scrollIntoViewIfNeeded();
    await movie.click();

    // Ověření, že jsme fakt na stránce filmu
    await expect(page.getByTestId('hero__primary-text')).toContainText(title ?? '');

    // Zpět na profil herečky
    await page.goBack();
  }
});





  