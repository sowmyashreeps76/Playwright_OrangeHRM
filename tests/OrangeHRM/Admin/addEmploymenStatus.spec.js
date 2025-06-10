import { test, expect } from '@playwright/test'
import logindata from '../testData/login.json'
import employmntstatus from '../testData/employmentstatus.json'

test('Add Pay Grades', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill(logindata.username)

    await page.locator("input[type='password']").fill(logindata.password)

    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
    await page.locator("//span[normalize-space(text())='Job']").click()
    await page.locator("//a[normalize-space(text())='Employment Status']").click()
    await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill(employmntstatus.Name)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus")
    await page.close()

});


