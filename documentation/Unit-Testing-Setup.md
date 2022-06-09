
Working with unit tests could be boring, but not when you set up yourself the right way ;)

We encourage you to examine our [karma.config.js](https://github.com/BaiGanio/baiganio.github.io/blob/master/karma.conf.js)
- [x] use it as base template for your projects
- [x] adjust it to your own preferences
---
Pay attention to these two lines from `scripts` sections in [package.json](https://github.com/BaiGanio/baiganio.github.io/blob/master/package.json)

`"test:coverage": "ng test --code-coverage"`

`"test:headless":"ng test --watch=false --browsers=ChromeHeadless --code-coverage"` 

We use them to run the tests and measure code coverage.
- [x] first line can be executed as the following command `npm run test:coverage` 
  - it opens the configured browser automatically

<a target="_blank" href="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/karma-and-jasmine-in-the-browser.PNG" title="">
  <img src="/.wiki/karma-and-jasmine-in-the-browser.PNG" width="100%" alt="">
</a>
  
  - [x] find generated code coverage report by navigate to `coverage` folder, then `chrome` folder & open `index.html` in the browser
<a target="_blank" href="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/find-code-coverage-report.PNG" title="">
  <img src="/.wiki/find-code-coverage-report.PNG" width="40%" alt="">
</a>

  - [x] examine generated code coverage report 
<a target="_blank" href="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/code-coverage-report.png" title="">
  <img src="/.wiki/code-coverage-report.png" width="100%" alt="">
</a>

- [x] second line gives you quick info in the terminal and can be executed as `npm run test:headless` command
  - also generates code coverage report in `Chrome Headless` folder

<a target="_blank" href="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/headless-code-coverage.png" title="">
  <img src="/.wiki/headless-code-coverage.png" width="100%" alt="">
</a>

---
To speed up local testing, you can target a specific test file:

`ng test --include='**/my-service.service.spec.ts' --code-coverage`

`ng test --include='**/my-component.component.spec.ts' --code-coverage`
