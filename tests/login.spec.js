import { test, expect } from "@playwright/test"
import { login, getErrorMessage } from "../pages/loginPage"
import {
    areSocialsVisible,
    getCopyrightText
} from "../pages/footer"
import {
    areMenuItemsVisible,
    isShoppingCartVisible,
    isAppLogoVisible
} from "../pages/header"
import UserTypes from "../enums/UserTypes"

test.beforeEach(async ({ page }) => {
    await page.goto("/")
})

test("Standard user can log in", async ({ page }) => {
    await login(page, UserTypes.STANDARD_USER, process.env.PASSWORD)

    expect(await areMenuItemsVisible(page)).toBe(true)
    expect(await isShoppingCartVisible(page)).toBe(true)
    expect(await isAppLogoVisible(page)).toBe(true)

    expect(await areSocialsVisible(page)).toBe(true)
    expect(await getCopyrightText(page)).toEqual("© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy")
})

test("Locked out user cannot log in", async ({ page }) => {
    await login(page, UserTypes.LOCKED_OUT_USER, process.env.PASSWORD)
    await expect(await getErrorMessage(page)).toEqual("Epic sadface: Sorry, this user has been locked out.")
})

test("User cannot go to /inventory.html without login in", async ({ page }) => {
    await page.goto("/inventory.html")
    await expect(page.url()).toBe("https://www.saucedemo.com/")
    await expect(await getErrorMessage(page)).toEqual("Epic sadface: You can only access '/inventory.html' when you are logged in.")
})
