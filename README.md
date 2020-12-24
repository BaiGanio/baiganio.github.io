# BaiGanio

_Use this quick explanation to setup yourself faster._
# _Development environment setup_

- Once cloned run `npm install` in project directory
- Run `ng serve -c=local -o` for a dev server. 
- Application will open in your default browser at `http://localhost:5300/` automatically. 
- You can change configurations from `environment.local.ts` file.
- You can change dependencies from `packge.json` file.
- The app will automatically reload if you change any of the source files.

# _Code scaffolding_

- Run `ng generate component component-name` to generate a new component. 
- You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# _Build_
_This is `not` used for `production` deployment_
- Run `ng build -c=prod` for a production build.
- Build artifacts will be stored in the `dist/` directory. 

# _Deploy_
- _Prod:_
  - Automtic deploy on `push` or `pull-request` with GitHub Actions `CI/CD` pipeline.
  - Custom configuration could be extended from `build-deploy.yml` file. 
- _Test:_
  - Use build artifacts from the `dist/` directory. 
  - Upload files to the server via any favorite FTP client.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
