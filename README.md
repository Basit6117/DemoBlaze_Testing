# DemoBlaze Web Application Testing

This project contains the automated testing of the **DemoBlaze** web application using **Playwright with JavaScript**.  
The testing was performed as part of the **Software Testing** course assignment and sessional.

## Tested Features

The following functionalities of the DemoBlaze application have been tested:

- **Sign Up** – Verified the registration process for new users.
- **Login** – Ensured that registered users can successfully log in with valid credentials.
- **Login with invalid credentials** – Checked the system response for wrong username and wrong password scenarios.
- **Add to Cart** – Tested the ability to add products to the shopping cart and validate the cart contents.
- **Logout** – Verified that users can log out successfully from the application.

## Testing Approach

- Automation scripts were implemented using **Playwright JS**.
- Functional flows were validated by checking visibility, navigation, and element interactions.
- Assertions were used to ensure expected outcomes for each feature.

## How to Use This Project

1. **Clone the repository** (or copy the project folder to your machine).  
2. **Install dependencies** using npm:

   ```bash
   npm install

**Run tests using Playwright**
   ```bash
npx playwright test

