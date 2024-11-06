// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async({page})=>{
  await page.goto('https://practicesoftwaretesting.com/');
})

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/');
});

test('price filter works', async ({ page })=>{
  const minValue = await page.getByRole('slider', { name: 'ngx-slider', exact: true }).getAttribute('aria-valuenow');
  const maxValue = await page.getByRole('slider', { name: 'ngx-slider-max' }).getAttribute('aria-valuenow');

  console.log(minValue);
  console.log(maxValue);
})




