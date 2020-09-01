# BaiGanio _!_

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

By default, this deployable code is generated in the /dist/<prodect-name> folder under the app folder, but we need to generate this in the “docs” folder under the app folder.

So, we need to make a small change in the angular.json file and change the outputpath value to “docs/”.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build Your Code to Generate Deployables

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Now, we need to build our code in production mode in order to create distributable files that will be deployed on GitHub Pages. By default, this deployable code is generated in the /dist/<prodect-name> folder under the app folder, but we need to generate this in the “docs” folder under the app folder.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
