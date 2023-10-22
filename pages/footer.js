const socialsList = ".social"
const listItemTwitter = ".social_twitter"
const listItemFacebook = ".social_facebook"
const listItemLinkedin = ".social_linkedin"
const copyrightText = ".footer_copy"

const areSocialsVisible = async (page) => {
    if (!await page.locator(listItemTwitter).isVisible()) {
        return false
    }
    if (!await page.locator(listItemFacebook).isVisible()) {
        return false
    }
    if (!await page.locator(listItemLinkedin).isVisible()) {
        return false
    }
    return true
}

const getCopyrightText = async (page) => {
    return await page.locator(copyrightText).innerText()
}

module.exports = { areSocialsVisible, getCopyrightText }
