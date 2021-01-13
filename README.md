# _BaiGanio_
_Use this quick explanation to setup yourself faster._
## _Development environment setup_
- Open your favorite terminal and type `node -v` to ensure you have installed latest [_Node.js_](https://nodejs.org) version available
- Clone the repository and run `npm install` in the project directory (`baiganio.github.io`) folder
- Run `ng serve -c=local -o` for a local development server. Application will open in your default browser at `http://localhost:5300/` automatically. 
- Project setup could be made in `angular.json` file.
- You can change the local environment variables per you need from `environment.local.ts` file.
- Dendencies are presented in `packge.json` file.
## _Code scaffolding_
- Run `ng generate component component-name` to generate a new component or `ng g c component-name` for short. 
- You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
## _Build_
_We don't do and store prod artifacts locally. This is handled by GitHub Actions CI pipe._

_`Production` build for own use is better to be done after configuring `environment.prod.ts` file._
- Replace all `key-value pairs` with yours as preference
- Run `ng build -c=prod` for a production build.
- Build artifacts will be stored in the `dist/` directory. 
## _Deploy_
_We use GitHub Actions CI/CD automatic pipeline configured in `build-and-deploy.yml` file._
  - On `push` or `pull-request` with [_GitHub Actions_](https://docs.github.com/en/free-pro-team@latest/actions) `CI/CD` pipeline.
  - ...
  - TODO: Versioning:
   - Running `npm run build` locally will automatically run the prebuild script as first step.
   - Push updated `package.json` back to the repo.
- TODO: _Test:_
  - Use build artifacts from the `dist/` directory. 
  - Upload files to the server via any favorite FTP client.
## _Running unit tests_
- Run `ng test` to execute the unit tests via [_Karma_](https://karma-runner.github.io).
## _Running end-to-end tests_
- Run `ng e2e` to execute the end-to-end tests via [_Protractor_](http://www.protractortest.org/).

## _Further help_
- To get more help for `how to..` and `where from...` on the project use our [_Wiki_](https://github.com/BaiGanio/baiganio.github.io/wiki).
- To help us better organizing our work you can use our issue templates to provide us information faster from - [here!](https://github.com/BaiGanio/baiganio.github.io/issues/new/choose)
- Check out the [_Angular CLI README_](https://github.com/angular/angular-cli/blob/master/README.md).
