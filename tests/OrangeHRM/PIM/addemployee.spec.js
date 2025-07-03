import { test, expect } from '@playwright/test';

// import data from "../../testData/addemployee.json"

const employees = {
    employee1 : {
        firstname : "sowmya",
        lastname : "shree"
    },
    employee2 : {
        firstname : "swetha",
        lastname : "g"
    },
    employee3 : {
        firstname : "raju",
        lastname : "g"
    }
}

for (let emp in employees) {



const creds = ["Admin", "admin123"]
test(`Verify Add Employee DDT ${emp}`, {tag : ["@smoke", "@sowmya"]}, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(creds[0]);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(creds[1]);
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.locator('#app')).toContainText('Time at Work');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(employees[emp].firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(employees[emp].lastname);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});
}