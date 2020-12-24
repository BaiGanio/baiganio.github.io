# _BaiGanio_
_Use this quick explanation to setup yourself faster._
## _Development environment setup_
- Open your favorite terminal and type `node -v` to ensure you have installed latest [_Node.js_](https://nodejs.org) version available
- Clone the repository and run `npm install` in the project directory
- Run `ng serve -c=local -o` for a dev server. Application will open in your default browser at `http://localhost:5300/` automatically. 
- Project setup could be made in `angular.json` file.
- You can change the local environment variables from `environment.local.ts` file.
- Dpendencies are presented in `packge.json` file.
## _Code scaffolding_
- Run `ng generate component component-name` to generate a new component. 
- You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
## _Build_
_This is `not` used for `production` deployment_
- Run `ng build -c=prod` for a production build.
- Build artifacts will be stored in the `dist/` directory. 
## _Deploy_
- _Prod:_
  - Automtic deploy on `push` or `pull-request` with [_GitHub Actions_](https://docs.github.com/en/free-pro-team@latest/actions) `CI/CD` pipeline.
  - Custom configuration could be extended from `build-deploy.yml` file.
  - Versioning:
   - Running npm run build will automatically run the prebuild script as first step. is done by runing locally `ng build` and then pushing updated `package.json` back to the repo.
- _Test:_
  - Use build artifacts from the `dist/` directory. 
  - Upload files to the server via any favorite FTP client.
## _Running unit tests_
- Run `ng test` to execute the unit tests via [_Karma_](https://karma-runner.github.io).
## _Running end-to-end tests_
- Run `ng e2e` to execute the end-to-end tests via [_Protractor_](http://www.protractortest.org/).

## _Further help_
- To get more help for `how to..` and `where from...` on the project use our [_Wiki_]().
- Check out the [_Angular CLI README_](https://github.com/angular/angular-cli/blob/master/README.md).
