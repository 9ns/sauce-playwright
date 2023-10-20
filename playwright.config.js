const { defineConfig, devices } = require("@playwright/test")
require("dotenv").config()

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "html",
  use: {
    headless: false,
    viewport: { width: 1600, height: 900 },
    baseURL: "https://www.saucedemo.com",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "on"
  },
  expect: {
    timeout: 10000
  },

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

    /* Test against mobile viewports. */
    // {
    //   name: "Mobile Chrome",
    //   use: { ...devices["Pixel 5"] },
    // },
    // {
    //   name: "Mobile Safari",
    //   use: { ...devices["iPhone 12"] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: "Microsoft Edge",
    //   use: { ...devices["Desktop Edge"], channel: "msedge" },
    // },
    // {
    //   name: "Google Chrome",
    //   use: { ...devices["Desktop Chrome"], channel: "chrome" },
    // },
  ],
})
