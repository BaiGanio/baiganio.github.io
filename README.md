[![Codacy Badge](https://app.codacy.com/project/badge/Grade/43992e753d15400c98b7dd86327d9ecb)](https://www.codacy.com/gh/BaiGanio/baiganio.github.io/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BaiGanio/baiganio.github.io&amp;utm_campaign=Badge_Grade)  [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/43992e753d15400c98b7dd86327d9ecb)](https://www.codacy.com/gh/BaiGanio/baiganio.github.io/dashboard?utm_source=github.com&utm_medium=referral&utm_content=BaiGanio/baiganio.github.io&utm_campaign=Badge_Coverage)
![Build & Deploy workflow](https://github.com/BaiGanio/baiganio.github.io/actions/workflows/build-and-deploy.yml/badge.svg)
# _baiganio.github.io_
- This project aims self-creativity & is nothing but a playground where development skills are challenged for fun!!
- This app turns out to be somehow a portfolio for the collaborators & indeed looks like very successful approach ;)
***
## Local environment setup
- [x] Run `ng v` to see current project [Angular CLI](https://angular.io/cli) & [TypeScript](https://www.typescriptlang.org/) versions
- [x] Run `node -v` to check your current [Node.js](https://nodejs.org) version
- [x] Run `npm install`
- [x] Run 
- `npm run start:test` to work directly with [https://test-bgapi.azurewebsites.net/](https://test-bgapi.azurewebsites.net/) 
- `npm run start` or alternatively `ng serve -c=local -o`  if you have [BGAPI]() locally  
  - both commands will start the application wich then opens automatically at `http://localhost:5003/`

---
## _Check out our [Code scaffolding](https://github.com/BaiGanio/baiganio.github.io/wiki/Code-scaffolding) wiki page._
---
## _Build_
- [x] Run `ng build` for a local build
- [x] Run `ng build -c=prod` for a production build
  - build artifacts are stored in the `dist/` folder
  - ensure tests passes before that

_`Build` for your own usage is better to be done after configuring [environment.*.ts](https://github.com/BaiGanio/baiganio.github.io/blob/master/src/environments/) files. Details can be read in [Configuring-Environment-Variables](https://github.com/BaiGanio/baiganio.github.io/wiki/Configuring-Environment-Variables) wiki page._

---
## _Deploy_
_We use [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions) to automate our CI/CD pipeline._
- Configuration could be found in [build-and-deploy.yml](https://github.com/BaiGanio/baiganio.github.io/blob/master/.github/workflows/build-and-deploy.yml) file.
- `Workflow` is triggered on push or pull-request against master branch
   
_`Production` deploy for your own use could be done manually  following the steps in [Configuring-Production-Deploy](https://github.com/BaiGanio/baiganio.github.io/wiki/Configuring-Production-Deploy) wiki page._
 
  
---
## _Running unit tests & measure code coverage_
 _[Karma](https://karma-runner.github.io) is out of the box test runner, as well as [Jasmine](https://jasmine.github.io/) like a testing framework.
We use several ways to work with the tests in the project._
- [x] Run 
- `ng test` 
  - to execute the unit tests & explore results in the terminal
- `npm run test` 
  - to execute the unit tests & explore them in the browser
- `npm run test:headless` 
  - unit tests execution result is visible in the terminal & no browser is open
  - used in workflow pipeline

_All commands generate code coverage report. Check this [Unit-Testing-Setup-in-Angular](https://github.com/BaiGanio/baiganio.github.io/wiki/Unit-Testing-Setup-in-Angular) wiki page on `how to?`:_
  - _configure [karma.config.js](https://github.com/BaiGanio/baiganio.github.io/blob/master/karma.conf.js) & [package.json](https://github.com/BaiGanio/baiganio.github.io/blob/master/package.json) files_
  - _investigate code coverage report_
----
## _Running end-to-end tests_
- Run `ng e2e` to execute the end-to-end tests via [_Protractor_](http://www.protractortest.org/).
---
## _Running lint_
- Run `npm run lint` to check if the set of rules is covered.
---
## _Further help_
- To get more help for `how to..` and `where from...` on the project use our [_Wiki_](https://github.com/BaiGanio/baiganio.github.io/wiki).
- To help us better organizing our work you can use our issue templates to provide us information faster from - [here!](https://github.com/BaiGanio/baiganio.github.io/issues/new/choose)
- Check out the [_Angular CLI README_](https://github.com/angular/angular-cli/blob/master/README.md).
