const hamburgerMenu = "#react-burger-menu-btn"
const menuItemProducts = "#inventory_sidebar_link"
const menuItemAbout = "#about_sidebar_link"
const menuItemLogout = "#logout_sidebar_link"
const menuItemReset = "#reset_sidebar_link"
const appLogo = ".app_logo"
const shoppingCartLink = ".shopping_cart_link"

const areMenuItemsVisible = async (page) => {
    await page.click(hamburgerMenu)
    if (!await page.locator(menuItemProducts).isVisible()) {
        return false
    }
    if (!await page.locator(menuItemAbout).isVisible()) {
        return false
    }
    if (!await page.locator(menuItemLogout).isVisible()) {
        return false
    }
    if (!await page.locator(menuItemReset).isVisible()) {
        return false
    }
    return true
}

const isShoppingCartVisible = async (page) => {
    return await page.locator(shoppingCartLink).isVisible()
}

const isAppLogoVisible = async (page) => {
    return await page.locator(appLogo).isVisible()
}

const gotoCart = async (page) => {
    await page.click(shoppingCartLink)
}

module.exports = {
    gotoCart,
    areMenuItemsVisible,
    isShoppingCartVisible,
    isAppLogoVisible
}
