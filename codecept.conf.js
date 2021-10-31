const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://oranum.com',
      show: true,
      browser: 'firefox'
    }
  },
  include: {
    I: './steps_file.js',
    searchPage: './pages/search.page.js',
    mainPage: './pages/main.page.js',
    livePage: './pages/live.page.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'oranum',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      outputDir: './allure-results'
    }
  }
}