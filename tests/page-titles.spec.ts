import { test, expect } from '@playwright/test';

test('index page meta is correct', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle('EvilArthas Calendar');
});
