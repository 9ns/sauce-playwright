const firstNameField = "#first-name"
const lastNameField = "#last-name"
const zipcodeField = "#postal-code"
const continueButton = "#continue"

const enterShippingInfo = async (page) => {
    await page.fill(firstNameField, "Test")
    await page.fill(lastNameField, "Testsson")
    await page.fill(zipcodeField, "17123")
}

const gotoOverview = async (page) => {
    await page.click(continueButton)
}

module.exports = { enterShippingInfo, gotoOverview }
