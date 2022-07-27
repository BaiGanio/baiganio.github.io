[![Codacy Badge](https://app.codacy.com/project/badge/Grade/43992e753d15400c98b7dd86327d9ecb)](https://www.codacy.com/gh/BaiGanio/baiganio.github.io/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BaiGanio/baiganio.github.io&amp;utm_campaign=Badge_Grade)  [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/43992e753d15400c98b7dd86327d9ecb)](https://www.codacy.com/gh/BaiGanio/baiganio.github.io/dashboard?utm_source=github.com&utm_medium=referral&utm_content=BaiGanio/baiganio.github.io&utm_campaign=Badge_Coverage)
![Build & Deploy workflow](https://github.com/BaiGanio/baiganio.github.io/actions/workflows/build-and-deploy.yml/badge.svg)
# _baiganio.github.io_
- This project aims self-creativity & is nothing but a playground where development skills are challenged for fun!!
- This app turns out to be somehow a portfolio for the collaborators & indeed looks like very successful approach ;)
***
## _Local environment setup_
Once cloned/downloaded,  in the project directory folder:
- [x] Run `ng v` to see current project Angular CLI & TypeScript versions
- [x] Run `node -v` to check your current [Node.js](https://nodejs.org) version
- [x] Run `npm install`
- [x] Run 
- `npm run start:test` to work directly with [https://test-bgapi.azurewebsites.net/](https://test-bgapi.azurewebsites.net/) 
- `npm run start` or alternatively `ng serve -c=local -o`  if you hve [BGAPI]() locally  
- both commands will start the application & then it opens automatically at `http://localhost:5003/`

- [x] Dependencies are presented in [package.json](https://github.com/BaiGanio/baiganio.github.io/blob/master/package.json) file
- [x] Project setup could be made in [angular.json](https://github.com/BaiGanio/baiganio.github.io/blob/master/angular.json) file
- [x] Usage of environment variables is configured in [environment.*.ts](https://github.com/BaiGanio/baiganio.github.io/blob/master/src/environments/) files
---
## _Code scaffolding_
- [x] To generate a new component run:
- `ng generate component component-name` or `ng g c component-name` for short 
- [x] Generate component without `spec.ts` file:
- `ng g c component-name --skip-tests=true`
- [x] To generate module with routing:
- `ng g m feature --route feature --module app.module` 
- [x] You can also use:
- `ng generate directive|pipe|service|class|guard|interface|enum`
---
## _Build_
_We encourage you to run build command each time before pushing to a remote repo._
- [x] Run `ng build` for a local build.
- build artifacts are stored in the `dist/` folder
- [x] Ensure tests passes before that.

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
---
## _Running unit tests & measure code coverage_
 _[Karma](https://karma-runner.github.io) is out of the box test runner, as well as [Jasmine](https://jasmine.github.io/) like a testing framework.
We use several ways to work with the tests in the project:_
- [x] Run `npm run test` 
  - to execute the unit tests & explore them in the browser
- [x] Run `npm run test:headless` 
  - unit tests execution result is visible in the terminal & no browser is open
- [x] Check this [Unit-Testing-Setup.md](https://github.com/BaiGanio/baiganio.github.io/blob/master/%40wiki/articles/angular/Unit-Testing-Setup-in-Angular.md) article on `how to?`
  - configure [karma.config.js](https://github.com/BaiGanio/baiganio.github.io/blob/master/karma.conf.js) & [package.json](https://github.com/BaiGanio/baiganio.github.io/blob/master/package.json) files
  - investigate code coverage report
----
## _Running end-to-end tests_
- Run `ng e2e` to execute the end-to-end tests via [_Protractor_](http://www.protractortest.org/).
---
## _Running lint_
- Run npm run lint to check if the set of rules is covered.
---
## _Further help_
- To get more help for `how to..` and `where from...` on the project use our [_Wiki_](https://github.com/BaiGanio/baiganio.github.io/wiki).
- To help us better organizing our work you can use our issue templates to provide us information faster from - [here!](https://github.com/BaiGanio/baiganio.github.io/issues/new/choose)
- Check out the [_Angular CLI README_](https://github.com/angular/angular-cli/blob/master/README.md).
