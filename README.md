# _BaiGanio v7.6.4_
This project aims self-creativity & is nothing but a playground where development skills are challenged for fun!!

This app turns out to be somehow a portfolio for the collaborators & indeed looks like very successful approach ;)
***
_Use this quick explanation to setup yourself faster._
## _Local development environment_
In the project directory (baiganio.github.io folder)
- [x] Run `ng --version` to see more detailed information
  - Angular CLI is `13.3.7`
  - [Node.js](https://nodejs.org) is `14.15.3`

  <a target="_blank" href="https://raw.githubusercontent.com/BaiGanio/baiganio.github.io/master/.wiki/check-project-version.png" title="">
  <img src="/.wiki/check-project-version.png" width="100%" alt="">
</a>

- [x] Run `npm install`
- [x] Run `npm run start` or alternatively `ng serve -c=local -o`  
  - application will open in your default browser at `http://localhost:5300/` automatically.

You can change the local environment variables per your need from [environment.local.ts](https://github.com/BaiGanio/baiganio.github.io/blob/master/src/environments/environment.local.ts) file
- dependencies are presented in [package.json](https://github.com/BaiGanio/baiganio.github.io/blob/master/package.json) file
- project setup could be made in [angular.json](https://github.com/BaiGanio/baiganio.github.io/blob/master/angular.json) file
---
## _Code scaffolding_
- Run `ng generate component component-name` to generate a new component or `ng g c component-name` for short. 
- You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
---
## _Build_
_We encourage you to run build command each time before pushing to a remote repo._
- [x] Run `ng build` for a local build.
- build artifacts are stored in the `dist/` folder

_`Production` build for your own use is better to be done after configuring [environment.prod.ts](https://github.com/BaiGanio/baiganio.github.io/blob/master/src/environments/environment.prod.ts) file._
- [x] Replace all `key-value pairs` with yours as preference.
- [x] Run `ng build -c=prod` for a production build.
- build artifacts are stored in the `dist/` folder
---
## _Deploy_
_We use [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions) to automate our CI/CD pipeline._
- Configuration could be found in [build-and-deploy.yml](https://github.com/BaiGanio/baiganio.github.io/blob/master/.github/workflows/build-and-deploy.yml) file under `.github`  > `workflows` folder directory.
- Pipe is triggered on push or pull-request against master branch
   
_`Production` deploy for your own use could be done manually with the following steps:_
  - [x] Run `ng build --base-href="https://your-app-name.github.io"` 
  - [x] Take the build artifacts from the `dist/` folder  
  
_Version is updated manually from [package.json](https://github.com/BaiGanio/baiganio.github.io/blob/master/package.json) file._
  - if version is 6.1.12
  - 6.1.12 = 2021 - 2015 = 6; January = 1; Date = 12
  - 2015 is the the year of BaiGanio account creation
---
## _Running unit tests & measure code coverage_
 _[Karma](https://karma-runner.github.io) is out of the box test runner, as well as [Jasmine](https://jasmine.github.io/) like a testing framework.
We use several ways to work with the tests in the project:_
- [x] Run `npm run test` 
  - to execute the unit tests & explore them in the browser
- [x] Run `npm run test:headless` 
  - to execute the unit tests and see the results in the terminal without opening them in the browser
- [x] Check this [Unit-Testing-Setup.md](/documentation/Unit-Testing-Setup.md) for more detailed explanations on 'how to' 
  - configure [karma.config.js](https://github.com/BaiGanio/baiganio.github.io/blob/master/karma.conf.js) & [package.json](https://github.com/BaiGanio/baiganio.github.io/blob/master/package.json) files
  - investigate code coverage report
----
## _Running end-to-end tests_
- Run `ng e2e` to execute the end-to-end tests via [_Protractor_](http://www.protractortest.org/).
---
## _Further help_
- To get more help for `how to..` and `where from...` on the project use our [_Wiki_](https://github.com/BaiGanio/baiganio.github.io/wiki).
- To help us better organizing our work you can use our issue templates to provide us information faster from - [here!](https://github.com/BaiGanio/baiganio.github.io/issues/new/choose)
- Check out the [_Angular CLI README_](https://github.com/angular/angular-cli/blob/master/README.md).
