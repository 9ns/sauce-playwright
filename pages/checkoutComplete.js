const checkoutCompleteContainer = "#checkout_complete_container"
const completeCheckmark = ".pony_express"
const completeHeader = ".complete-header"
const completeText = ".complete-text"
const completeBackButton = "#back-to-products"

const getCheckoutConfirmation = async (page) => {
    return page.locator(completeHeader).innerText()
}

module.exports = { getCheckoutConfirmation }
