const checkoutCompleteContainer = "#checkout_complete_container"
const completeCheckmark = ".pony_express"
const completeHeader = ".complete-header"
const completeText = ".complete-text"
const completeBackButton = "#back-to-products"

const getCheckoutConfirmation = async (page) => {
    const confirmationText = await page.locator(completeHeader).innerText()
    return confirmationText
}

module.exports = { getCheckoutConfirmation }
