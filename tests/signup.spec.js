import { test, expect } from '@playwright/test';

test('User can successfully Sign Up on Demoblaze', async ({ page }) => {
  // Step 1: Open site
  await page.goto('https://www.demoblaze.com/');
  await page.waitForTimeout(2000);

  // Step 2: Click "Sign up"
  await page.click('#signin2');
  await page.waitForTimeout(2000);

  // Step 3: Fill username and password (use unique username)
  await page.fill('#sign-username', 'basit_newuser' + Date.now()); 
  await page.fill('#sign-password', 'basit1234');
  await page.waitForTimeout(1000);

  // Step 4: Handle alert after clicking Sign up
  page.on('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toContain('Sign up successful');
    await dialog.accept();
  });

  // Step 5: Click the Sign up button
  await page.click('button[onclick="register()"]');
  await page.waitForTimeout(4000);
});
