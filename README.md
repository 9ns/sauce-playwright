# Prerequisites:
NPM and Node.js setup

# To run:
1. Clone the project
2. Navigate to the root of the project
3. Install with ```npm install```

Run all tests in headless mode with:

```npm test```

Run all tests in headed mode with:

```npm run headed```

Run all tests in debug mode, step by step with:

```npm run debug```

Chromium is set up as the default browser, run in another browser or all browsers with:

```playwright test --browser firefox```

```playwright test --browser webkit```

```playwright test --browser all```

To change default browser(s) or to emulate mobile browsers, edit the "projects" section of playwright.config.js (and the package.json scripts)

To slow down the tests while they are running, the "slowMo" option in playwright.config.js can be changed
