import { test, expect } from '@playwright/test';

test('User can log in successfully', async ({ page }) => {
  // Step 1: Go to website
  await page.goto('https://www.demoblaze.com/');

  // Step 2: Click on "Log in"
  await page.click('#login2');

  // Step 3: Fill in login details
  await page.fill('#loginusername', 'basit1122');
  await page.fill('#loginpassword', 'basit1122');

  // Step 4: Click login button
  await page.click('button[onclick="logIn()"]');

  // Step 5: Wait for and verify login success
  await page.waitForTimeout(8000); // wait for page to update
  const loggedInUser = await page.locator('#nameofuser');
  await expect(loggedInUser).toBeVisible();
});


test.only('User cannot log in with wrong username', async ({ page }) => {
  // Step 1: Go to Demoblaze website
  await page.goto('https://www.demoblaze.com/');

  // Step 2: Open login modal
  await page.click('#login2');
  await page.waitForSelector('#logInModal', { state: 'visible' });

  // Step 3: Enter wrong username and correct password
  await page.fill('#loginusername', 'wronguser123');
  await page.fill('#loginpassword', 'basit1122');

  // Step 4: Click login button
  await page.click('button[onclick="logIn()"]');

  // Step 5: Handle alert popup for wrong username
  page.once('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toContain('User does not exist.');
    await dialog.dismiss();
  });

  await page.waitForTimeout(3000);
});

test.only('User cannot log in with wrong password', async ({ page }) => {
  // Step 1: Go to Demoblaze website
  await page.goto('https://www.demoblaze.com/');

  // Step 2: Open login modal
  await page.click('#login2');
  await page.waitForSelector('#logInModal', { state: 'visible' });

  // Step 3: Enter correct username and wrong password
  await page.fill('#loginusername', 'basit1122');
  await page.fill('#loginpassword', 'wrongpassword');

  // Step 4: Click login button
  await page.click('button[onclick="logIn()"]');

  // Step 5: Handle alert popup for wrong password
  page.once('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toContain('Wrong password.');
    await dialog.dismiss();
  });

  await page.waitForTimeout(3000);
});


