// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation1' })).toBeVisible();
  // Testing add new comments
  await page.getByRole('button', { name: 'Add Comment' }).click();
  await page.getByRole('textbox').fill('This is a new comment');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('article')).toContainText('This is a new comment');
});


