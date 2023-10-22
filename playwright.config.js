const { defineConfig, devices } = require("@playwright/test")
require("dotenv").config()

module.exports = defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    reporter: "html",
    use: {
        headless: true,
        viewport: { width: 1600, height: 900 },
        baseURL: "https://www.saucedemo.com",
        screenshot: "only-on-failure",
        trace: "retain-on-failure",
        video: "on",
        launchOptions: {
            slowMo: 0
        },
    },
    /*
        projects: [
            {
                name: "chromium",
                use: { ...devices["Desktop Chrome"] },
            },
    
            {
                name: "firefox",
                use: { ...devices["Desktop Firefox"] },
            },
    
            {
                name: "webkit",
                use: { ...devices["Desktop Safari"] },
            },
    
         {
                name: "Mobile Chrome",
                use: { ...devices["Pixel 5"] },
            },
            {
                name: "Mobile Safari",
                use: { ...devices["iPhone 12"] },
            },
    
         {
                name: "Microsoft Edge",
                use: { ...devices["Desktop Edge"], channel: "msedge" },
            },
            {
                name: "Google Chrome",
                use: { ...devices["Desktop Chrome"], channel: "chrome" },
            },
        ],
    */
})
