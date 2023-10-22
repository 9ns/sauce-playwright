### Prerequisites
NPM and Node.js setup

### To run
1. Clone the project
2. Navigate to the root of the project
3. Install with ```npm install```
4. Install playwright with ```npx playwright install``` if it isn't already installed
   
### Package.json scripts for terminal

```npm test``` - Run all tests in chromium headless

```npm run headed``` - Run all tests in chromium headed

```npm run debug``` - Debug in chromium headed

### To run in other browsers from terminal, run

```npx playwright --browser [chromium, firefox, webkit or all]```

To change default browser(s) or to emulate mobile browsers, edit the "projects" section of playwright.config.js and run 

```npx playwright test```

To slow down the tests while they are running, the "slowMo" value in playwright.config.js can be changed to ex. ```1000```
