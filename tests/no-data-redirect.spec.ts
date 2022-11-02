import { test, expect } from '@playwright/test';

const testValues = [2014, 2002, 1023, -1];

test('Redirecting for invalid year param', async ({ page }) => {
  for (const val of testValues) {
    await page.goto(`http://localhost:3000/calendar/${val}`);
    await expect(page).toHaveTitle('EvilArthas Calendar | No Data');
    await expect(page).toHaveURL('http://localhost:3000/no-data');
  }
});
