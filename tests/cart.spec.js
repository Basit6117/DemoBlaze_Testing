import { test, expect } from '@playwright/test';

test.setTimeout(60000);

test('User can add a product to cart', async ({ page }) => {
  // Step 1: Visit site
  await page.goto('https://www.demoblaze.com');

  // Step 2: Login
  await page.click('#login2');
  await page.fill('#loginusername', 'basit1122');
  await page.fill('#loginpassword', 'basit1122');
  await page.click('button[onclick="logIn()"]');

  // Step 3: Wait for login success
  const loggedInUser = page.locator('#nameofuser');
  await expect(loggedInUser).toBeVisible({ timeout: 15000 });

  // Step 4: Go to Phones
  await page.click('a:has-text("Phones")');
  await page.waitForSelector('a:has-text("Samsung galaxy s6")');

  // Step 5: Open Samsung Galaxy S6
  await page.click('a:has-text("Samsung galaxy s6")');
  await page.waitForSelector('a:has-text("Add to cart")', { state: 'visible' });

  // Step 6: Add to cart and handle alert
  const [dialog] = await Promise.all([
    page.waitForEvent('dialog'),
    page.click('a:has-text("Add to cart")'),
  ]);
  expect(dialog.message()).toContain('Product added');
  await dialog.accept();

  // Step 7: Open Cart
  await page.click('#cartur');
  await page.waitForSelector('#tbodyid');

  // Step 8: Verify product in cart
 const cartItemRow = page.locator('#tbodyid tr:has-text("Samsung galaxy s6")').first();
await expect(cartItemRow).toBeVisible();

});
