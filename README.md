# oranum-tests

1. install codeceptjs 

https://codecept.io/quickstart

choose default options (playwright)

important: browser - firefox (set in config), chromium can't play video for some reason

2. install chai 

`npm install chai`

3. install allure

https://github.com/allure-framework/allure2

_______

run tests in the root directory by command:

`npx codeceptjs run`

generate allure reports by command:

`allure serve ./allure-results`
