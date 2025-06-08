import { test, expect } from '@playwright/test';

test("Verify login with valid credentials", async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.locator("input[name='username']").fill("Admin")

await page.locator("input[type='password']").fill("admin123")

await page.locator("button[type='submit']").click()

await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

}

)

test("Verify login with Invalid username and valid password", async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.locator("input[name='username']").fill("abcd7699")

await page.locator("input[type='password']").fill("admin123")

await page.locator("button[type='submit']").click()

await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible()

}

)
test("Verify login with valid username and Invalid password", async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.locator("input[name='username']").fill("Admin")

await page.locator("input[type='password']").fill("admhghjin123")

await page.locator("button[type='submit']").click()

await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible()

}

)

test("Verify login with Invalid username and Invalid password", async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.locator("input[name='username']").fill("abcd7699")

await page.locator("input[type='password']").fill("admihmjhmkun123")

await page.locator("button[type='submit']").click()

await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible()

}

)