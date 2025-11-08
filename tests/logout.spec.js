import { test, expect } from '@playwright/test';

test('TC12 - Logout after successful login', async ({ page }) => {
  // Step 1: Open the website
  await page.goto('https://www.demoblaze.com/');
  await page.waitForTimeout(2000);

  // Step 2: Click on Login
  await page.click('#login2');
  await page.waitForTimeout(1000);

  // Step 3: Fill in credentials
  await page.fill('#loginusername', 'basit1122');
  await page.fill('#loginpassword', 'basit1122');
  await page.waitForTimeout(1000);

  // Step 4: Click Login button
  await page.click('button[onclick="logIn()"]');
  await expect(page.locator('#nameofuser')).toBeVisible({ timeout: 15000 });
  await page.waitForTimeout(3000);

  // Step 5: Click Logout
  await page.click('#logout2');
  await page.waitForTimeout(4000);

  // Step 6: Verify user is logged out — Login button should reappear
  await expect(page.locator('#login2')).toBeVisible({ timeout: 10000 });
  console.log('User successfully logged out and Login button visible again.');
});
