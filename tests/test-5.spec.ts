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

test('tmdbClickKnownForMovies_ReeseWitherspoon', async ({ page }) => {
  await page.goto('https://www.themoviedb.org/');
  

  // Kliknutí na profil herečky
await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).click();
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('Reese Witherspoon');
 
  // Kliknutí na samotnou herečku
  await page.getByText('Reese Witherspoon', { exact: true }).click();
  await page.getByText('Reese Witherspoon', { exact: true }).click();
  await expect(page.locator('#media_v4')).toContainText('Reese Witherspoon');



  // Klik na prvních 5–8 filmů z "Known For"
  const knownForSection = page.locator('#known_for');
  const movieLinks = knownForSection.locator('a.title[href^="/movie/"]');
  const count = await movieLinks.count();
  const numberOfMovies = Math.min(8, count);

  for (let i = 0; i < numberOfMovies; i++) {
    const movieLink = movieLinks.nth(i);
    const movieTitle = await movieLink.textContent();
    await movieLink.scrollIntoViewIfNeeded();
    await movieLink.click();

    await expect(page).toHaveURL(/\/movie\//);
    await expect(page).toHaveTitle(new RegExp(movieTitle?.trim() || '', 'i'));

    await page.goBack();
    await expect(page).toHaveURL(/\/person\//);
    // Po návratu znovu načíst selektor kvůli možným změnám DOM
  }
});


test('tmdbClickKnownForMovies_OliviaMunn', async ({ page }) => {
  await page.goto('https://www.themoviedb.org/');
  

  // Kliknutí na profil herečky
await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).click();
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('Olivia Munn');
 
  // Kliknutí na samotnou herečku
  await page.getByText('Olivia Munn', { exact: true }).click();
  await page.getByText('Olivia Munn', { exact: true }).click();
  await expect(page.locator('#media_v4')).toContainText('Olivia Munn');



  // Klik na prvních 5–8 filmů z "Known For"
  const knownForSection = page.locator('#known_for');
  const movieLinks = knownForSection.locator('a.title[href^="/movie/"]');
  const count = await movieLinks.count();
  const numberOfMovies = Math.min(8, count);

  for (let i = 0; i < numberOfMovies; i++) {
    const movieLink = movieLinks.nth(i);
    const movieTitle = await movieLink.textContent();
    await movieLink.scrollIntoViewIfNeeded();
    await movieLink.click();

    await expect(page).toHaveURL(/\/movie\//);
    await expect(page).toHaveTitle(new RegExp(movieTitle?.trim() || '', 'i'));

    await page.goBack();
    await expect(page).toHaveURL(/\/person\//);
    // Po návratu znovu načíst selektor kvůli možným změnám DOM
  }
});


test('tmdbFilmAndUniqueActorsInNewTabs', async ({ page, context }) => {
  await page.goto('https://www.themoviedb.org/');
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('The Morning Show');
  await page.keyboard.press('Enter');

  // Kliknout na první výsledek seriálu
  await page.locator('a[href*="/tv/"] h2').first().click();

  // Ověřit, že jsme na stránce seriálu
  const filmTitle = await page.locator('h2 a[href*="/tv/"]').first().textContent();
  expect(filmTitle?.toLowerCase()).toContain('the morning show');

  // Najít všechny herce
  const actorLinks = await page.locator('//h3[contains(text(),"Obsazení seriálu")]/following::a[contains(@href,"/person/")]').all();

  // Otevřít pouze unikátní jména, max 5
    const openedNames = new Set<string>();
  const actorPages: { page: typeof page; name: string }[] = []; // <-- OPRAVA TYPU
  for (const actor of actorLinks) {
    const actorName = (await actor.textContent())?.trim();
    if (actorName && !openedNames.has(actorName)) {
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        actor.click({ button: 'middle' }) // Otevře v novém tabu
      ]);
      openedNames.add(actorName);
      actorPages.push({ page: newPage, name: actorName });
      if (openedNames.size >= 5) break;
    }
  }
});

test('tmdbFilmAndUniqueActorsGoBack', async ({ page }) => {
  await page.goto('https://www.themoviedb.org/');
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('The Morning Show');
  await page.keyboard.press('Enter');

  // Kliknout na první výsledek seriálu
  await page.locator('a[href*="/tv/"] h2').first().click();

  // Ověřit, že jsme na stránce seriálu
  const filmTitle = await page.locator('h2 a[href*="/tv/"]').first().textContent();
  expect(filmTitle?.toLowerCase()).toContain('the morning show');

  // Otevřít pouze unikátní jména, max 5
  const openedNames = new Set<string>();
  let openedCount = 0;

  for (let i = 0; openedCount < 5; i++) {
    // Po návratu zpět znovu načíst selektor
    const actorLinks = page.locator('//h3[contains(text(),"Obsazení seriálu")]/following::a[contains(@href,"/person/")]');
    const count = await actorLinks.count();
    if (i >= count) break;

    const actor = actorLinks.nth(i);
    const actorName = (await actor.textContent())?.trim();
    if (actorName && !openedNames.has(actorName)) {
      await actor.scrollIntoViewIfNeeded();
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
        actor.click()
      ]);
      await expect(page.locator('h2 a[href*="/person/"]').first()).toHaveText(actorName);
      openedNames.add(actorName);
      openedCount++;
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
        page.goBack()
      ]);
      await expect(page.locator('h2 a[href*="/tv/"]').first()).toHaveText(filmTitle ?? '');
    }
  }
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







  


