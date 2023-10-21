import { test, expect } from "@playwright/test"
import { login } from "../pages/loginPage"
import UserTypes from "../enums/UserTypes"

test.beforeEach(async ({page}) => {
    await page.goto("/")
})

test("Standard user can log in", async ({ page }) => {
    await login(page, UserTypes.STANDARD_USER, process.env.PASSWORD)
    await expect(page.locator(".title")).toHaveText("Products")
})

test("Locked out user cannot log in", async ({ page }) => {
    await login(page, UserTypes.LOCKED_OUT_USER, process.env.PASSWORD)
    await expect(page.locator(".error-message-container")).toHaveText("Epic sadface: Sorry, this user has been locked out.")
})

test("User cannot go to /inventory.html without login in", async ({ page }) => {
    await page.goto("/inventory.html")
    await expect(page.url()).toBe("https://www.saucedemo.com/")
    await expect(page.locator(".error-message-container")).toHaveText("Epic sadface: You can only access '/inventory.html' when you are logged in.")
})
