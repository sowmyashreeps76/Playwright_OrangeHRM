import { test, expect } from '@playwright/test';
import logindata from "../OrangeHRM/testData/login.json"

let page


test.describe("Verify login functionality", async() => {  // Grouping the test cases

test.beforeEach(async ({browser}) => {

    page = await browser.newPage()
    
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})

test("Verify login with valid credentials", async ({page})=>{

    const creds = {
         username :"Admin",
         password :"admin123"
    }



await page.locator("input[name='username']").fill(creds.username)

await page.locator("input[type='password']").fill(creds.password)

await page.locator("button[type='submit']").click()

await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})

test("Verify login with Invalid username and valid password", async ({page})=>{



await page.locator("input[name='username']").fill("whgeiuw")

await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD)

await page.locator("button[type='submit']").click()

await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible()

}
)

test("Verify login with valid username and Invalid password", async ({page})=>{



await page.locator("input[name='username']").fill(process.env.ORG_USERNAME)

await page.locator("input[type='password']").fill("admhghjin123")

await page.locator("button[type='submit']").click()

await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible()

}

)

test("Verify login with Invalid username and Invalid password", async ({page})=>{



await page.locator("input[name='username']").fill("abcd7699")

await page.locator("input[type='password']").fill("admihmjhmkun123")

await page.locator("button[type='submit']").click()

await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible()

}

)
})