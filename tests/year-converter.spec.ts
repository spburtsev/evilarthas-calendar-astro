import { test, expect } from '@playwright/test';

const cases = [
  { year: 2015, converted: 2045 },
  { year: 2016, converted: 2076 },
  { year: 2017, converted: 2107 },
  { year: 2018, converted: 2138 },
  { year: 2019, converted: 2169 },
  { year: 2020, converted: 2200 },
];

test('Year converter works correctly', async ({ page }) => {
  for (const { year, converted } of cases) {
    await page.goto(`http://localhost:3000/calendar/${year}`);
    await expect(page).toHaveTitle(`EvilArthas Calendar | ${converted}`);
  }
});
