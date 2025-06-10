import { test, expect } from '@playwright/test'
import logindata from '../testData/login.json'
import addjobcategories from '../testData/addJobCategories.json'

test('Add Job categories', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill(logindata.username)

    await page.locator("input[type='password']").fill(logindata.password)

    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
    await page.locator("//span[normalize-space(text())='Job']").click()
    await page.locator("//a[normalize-space(text())='Job Categories']").click()
    await page.locator("//button[contains(.,'Add')]").click()
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill(addjobcategories.Name)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/jobCategory")
    await page.close()

    });