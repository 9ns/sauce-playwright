import  {test, expect } from "@playwright/test"
import loginPage from "../pages/loginPage"
import UserTypes from "../enums/UserTypes"

exports.expect = expect
exports.test = test.extend({
    productPage: async ({ page }, use) => {
        await loginPage.login(page, UserTypes.STANDARD_USER, process.env.PASSWORD)
        await use(page)
    }
})
