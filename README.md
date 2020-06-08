# EmployeesDirectory
Welcome to the Employee Directory! Here's an app that lists the employees in our awesome company. The app was created using Angular 8.

## Required software
- Node.js 10+: please install Node.js version 10 or later using the information [on this page](https://nodejs.org/en/).
- npm 6+: You should have this installed once you install Node.js v10+.
- [The Angular 8 CLI](https://angular.io/cli): you can install it using `npm install -g @angular/cli`.
- [Git](https://git-scm.com/): a free and open source version control system. You can find download and installation instructions for it [on this page](https://git-scm.com/downloads).

## Architecture
This app was created using Angular 8. Furthermore, the following tech and patterns in the Angular ecosystem were used to implement it:
- [the Angular Router](https://angular.io/guide/router).
- [named router outlets](https://medium.com/angular-in-depth/angular-router-series-secondary-outlets-primer-139206595e2) (for rendering the app's navbar and footer).
- [data resolvers](https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html) (for the employee details page).
- [ngrx](https://ngrx.io/) for state management (just like Redux is used in React apps).

## Installation
- Open a terminal window/command prompt.
- Clone this repository using:
```bash
git clone https://github.com/folushooladipo/employee-directory.git
```
- Run `cd employee-directory` to navigate into the repository's directory.
- Run `npm install` to install the app's dependencies.
- Run `ng serve` to start the app.
- Open `http://localhost:4200` in your favourite browser to see the app in the flesh!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Licence
This project is licensed by [Folusho Oladipo](https://www.linkedin.com/in/folushooladipo/) for your use under [the MIT licence](https://en.wikipedia.org/wiki/MIT_License). All rights are NOT reserved.
