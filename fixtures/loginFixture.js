import  {test, expect } from "@playwright/test"

exports.expect = expect
exports.test = test.extend({
    loginPage: async ({ page }, use) => {
        await use(page)
    }
})
