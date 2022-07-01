
# Unit Testing Setup in Angular
(3min read)
##### Working with unit tests could be boring, but not when you set up yourself the right way ;)
##### We encourage you to examine our <a target="_blank" href="https://github.com/BaiGanio/baiganio.github.io/blob/master/karma.conf.js">karma.config.js</a>
- use it as base template for your projects
- adjust it to your own preferences
---
##### Tests execution flow can be configured from `scripts` sections in <a target="_blank" href="https://github.com/BaiGanio/baiganio.github.io/blob/master/package.json">package.json</a>
##### Pay attention to the following scripts :
(we use them to run the tests and measure code coverage)

`"ng test"`
  - runs Karma and opens it in the configured browser automatically

<a target="_blank" href="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/karma-and-jasmine-in-the-browser.PNG" title="">
  <img src="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/karma-and-jasmine-in-the-browser.PNG" width="100%" alt="">
</a>

---

`"test:coverage": "ng test --code-coverage"`
  - often in local development we need some reports to be generated to speed up our development time
  - can be executed as the following command `npm run test:coverage` 
  - find generated code coverage report by navigate to project directory folder >> `coverage` folder, then `chrome` folder & open `index.html` in the browser

<a target="_blank" href="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/code-coverage-report.png" title="">
  <img src="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/code-coverage-report.png" width="100%" alt="">
</a>

---

`"test:headless":"ng test --watch=false --browsers=ChromeHeadless --code-coverage"` 
  - used pipeline configurations as no browser needs to be open & no change in tests code base is watched
  - all is needed is the code coverage report
  - can be executed as `npm run test:headless` command
  - gives you quick info in the terminal
  - also generates code coverage report in `Chrome Headless` folder

<a target="_blank" href="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/headless-code-coverage.png" title="">
  <img src="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/headless-code-coverage.png" width="100%" alt="">
</a>

---

##### To speed up local testing, you can target a specific test file:

`ng test --include='**/my-service.service.spec.ts' --code-coverage`

`ng test --include='**/my-component.component.spec.ts' --code-coverage`
