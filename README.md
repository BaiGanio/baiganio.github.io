[![Codacy Badge](https://app.codacy.com/project/badge/Grade/43992e753d15400c98b7dd86327d9ecb)](https://www.codacy.com/gh/BaiGanio/baiganio.github.io/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BaiGanio/baiganio.github.io&amp;utm_campaign=Badge_Grade)  [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/43992e753d15400c98b7dd86327d9ecb)](https://www.codacy.com/gh/BaiGanio/baiganio.github.io/dashboard?utm_source=github.com&utm_medium=referral&utm_content=BaiGanio/baiganio.github.io&utm_campaign=Badge_Coverage)
![Build & Deploy workflow](https://github.com/BaiGanio/baiganio.github.io/actions/workflows/build-and-deploy.yml/badge.svg)
# `baiganio.github.io`
- This project aims self-creativity & is nothing but a playground where development skills are challenged for fun!!
- This app turns out to be somehow a portfolio for the collaborators & a workbench for testing new technologies ;)
***
## _Getting started (local environment setup)_
- [x] Execute `node -v` to check your current <a href="https://nodejs.org" target="_blank">Node.js</a> version
- [x] Run `npm install`
- [x] Execite `ng v` to see project current [Angular CLI](https://angular.io/cli) & [TypeScript](https://www.typescriptlang.org/) versions
- [x] Run 
- `npm run start:test` to work directly with [https://test-bgapi.azurewebsites.net/](https://test-bgapi.azurewebsites.net/) 
- `npm run start` or alternatively `ng serve -c=local -o` if you have [BGAPI]() project locally  
  - Both commands will start the application wich then opens automatically at `http://localhost:5003/`

---
## _Build_
- [x] Run `ng build` for a local build
- [x] Run `ng build -c=prod` for a production build *
  - build artifacts are stored in the `dist/` folder
  - ensure tests passes before that

- Initially the prject came with pre defined environment variables configured in [environment.*.ts](https://github.com/BaiGanio/baiganio.github.io/blob/master/src/environments/) files.
- `Production Build Artifacts` for your own usage is better to be done after configuring [environment.prod.ts](https://github.com/BaiGanio/baiganio.github.io/blob/master/src/environments/environment.prod.ts). 
  - Details & `how to?` can be read in [Configuring-Environment-Variables](https://github.com/BaiGanio/baiganio.github.io/wiki/Configuring-Environment-Variables) wiki page.

---
## _Deploy_
_We use [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions) to automate our CI/CD pipeline._
- `Build Workflow` is triggered on push or pull-request against master branch.
  - Configuration could be found in [build-and-publish-artifacts.yml](https://github.com/BaiGanio/baiganio.github.io/blob/master/.github/workflows/build-and-publish-artifacts.yml) file
- `Reusable Deploy Workflow` runs once build artifacts are published.
  - Configuration could be found in [gh-pages-deploy.yml](https://github.com/BaiGanio/baiganio.github.io/blob/master/.github/workflows/bgh-pages-deploy.yml) file
- _Manual deployment for own usage could be found in the below wiki pages:_   
  - _[Configuring-GitHub-Pages-Production-Deploy](https://github.com/BaiGanio/baiganio.github.io/wiki/Configuring-GitHub-Pages-Production-Deploy)_
  - _TODO: `Azure Websites Production Deploy`_
  
---
## _Running unit tests & measure code coverage*_
 _[Karma](https://karma-runner.github.io) is out of the box test runner, as well as [Jasmine](https://jasmine.github.io/) like a testing framework.
We use several ways to work with the tests in the project._
- [x] Run 
- `ng test` - to execute the unit tests & explore results in the terminal (only)
- `npm run test` - to execute the unit tests & explore the results in the browser
- `npm run test:headless` 
  - unit tests execution result is visible in the terminal & no browser is open
  - used in workflow pipeline

_Check this [Unit-Testing-Setup-in-Angular](https://github.com/BaiGanio/baiganio.github.io/wiki/Unit-Testing-Setup-in-Angular) wiki page on `how to?`:_
  - _configure [karma.config.js](https://github.com/BaiGanio/baiganio.github.io/blob/master/karma.conf.js) & [package.json](https://github.com/BaiGanio/baiganio.github.io/blob/master/package.json) files_
  - _investigate and measure code coverage report_
----
## _Running end-to-end tests_
- [x] Run `ng e2e` to execute the end-to-end tests via [_Protractor_](http://www.protractortest.org/).
---
## _Running lint_ 
- [x] Run `npm run lint` to check if the set of rules is covered.
  - Do linting before pushing to `master` or openning a `pull-request`
- `Build Pipeline` breaks if linting fails.
---
## _Further help & Issues_

- On `how to` and `where from` on the project use - check out our [Wiki](https://github.com/BaiGanio/baiganio.github.io/wiki)
- To help us better organizing our work and provide us information faster - use one of our pre-filled [issue templates*](https://github.com/BaiGanio/baiganio.github.io/issues/new/choose)
  - [Bug](https://github.com/BaiGanio/baiganio.github.io/issues/new?assignees=&labels=Bug&template=bug_report.md&title=Your-Bug-Title-Here)
  - [Feature](https://github.com/BaiGanio/baiganio.github.io/issues/new?assignees=&labels=&template=feature_request.md&title=)
  - [Epic](https://github.com/BaiGanio/baiganio.github.io/issues/new?assignees=&labels=Epic&template=epic.md&title=Your-Epic-Title-Here)

*requires GitHub account
