const { test, expect } = require("@playwright/test")

test("Standard user can log in", async ({ page }) => {
    await page.goto("/")

    await page.fill("#user-name", process.env.STANDARD_USER)
    await page.fill("#password", process.env.PASSWORD)
    await page.click("#login-button")

    await expect(page.locator(".title")).toHaveText("Products")
})
