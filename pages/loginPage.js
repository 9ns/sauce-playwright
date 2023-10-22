const loginTitle = ".login_logo"
const usernameField = "#user-name"
const passwordField = "#password"
const loginButton = "#login-button"
const errorMessage = "[data-test='error']"

const login = async (page, username, password) => {
    await page.goto("/")
    await page.fill(usernameField, username)
    await page.fill(passwordField, password)
    await page.click(loginButton)
}

const getErrorMessage = async (page) => {
    const errorMessageText = await page.locator(errorMessage).innerText()
    return errorMessageText
}

module.exports = { login, getErrorMessage }
