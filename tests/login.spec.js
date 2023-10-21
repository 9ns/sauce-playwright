import { test, expect } from "../fixtures/loginFixture"

import { describe } from "node:test"
import { login, getErrorMessage } from "../pages/loginPage"
import UserTypes from "../enums/UserTypes"

describe("Login tests", () => {
    test("Standard user can log in", async ({ loginPage }) => {
        await login(loginPage, UserTypes.STANDARD_USER, process.env.PASSWORD)
        await expect(loginPage.locator(".title")).toHaveText("Products")
    })

    test("Locked out user cannot log in", async ({ loginPage }) => {
        await login(loginPage, UserTypes.STANDARD_USER, process.env.PASSWORD)
        await expect(loginPage.locator(".title")).toHaveText("Products")
    })
})
