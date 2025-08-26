import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.locator('[data-test="login-form"] div').filter({ hasText: 'Email address *' }).click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
});

test('test2', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.locator('[data-test="login-form"] div').filter({ hasText: 'Email address *' }).click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
});

test('test3', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.locator('[data-test="login-form"] div').filter({ hasText: 'Email address *' }).click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
});

