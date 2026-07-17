# Jupiter Toys Automation Framework

## Overview

UI automation framework developed using:

- Playwright
- TypeScript
- Cucumber BDD
- Node.js


## Application Under Test

https://jupiter.cloud.planittesting.com/


## Test Coverage

### Contact Page

✔ Mandatory field validation

✔ Successful form submission

✔ Data driven testing with multiple users


### Shopping Cart

✔ Add products

✔ Validate product prices

✔ Validate product subtotal

✔ Validate total calculation


## Framework Design

Implemented:

- Base Page reusable actions
- Cucumber BDD
- Scenario Outline
- Environment configuration


## Installation

npm install


## Execution


Run all tests:

npm test:all //run in order


Run contact validation:

npm run test:"@error"


Run contact success:

npm run test:"@success"


Run cart:

npm run test "@cart"


## Reports

HTML reports generated after execution.

