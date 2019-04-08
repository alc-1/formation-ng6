# Formation Angular 6

## Summary

- [About the project](#about-the-project)
  - [Development server](#development-server)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [Further help](#further-help)
- [Course steps](#course-steps)
  - [1: Create a routing module](#1-create-a-routing-module)
  - [2: Create a Home component and make the routing module load it](#2-create-a-home-component-and-make-the-routing-module-load-it)

## About the project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Course steps

### 1: Create a routing module

```shell
ng generate module app-routing --flat --module=app
```

Use `--flat` to prevent the generator to create a new directory.  
Use `--module=app` to tell that the module should be imported by the AppModule.

### 2: Create a Home component and make the routing module load it

1. Create the Home component.

    ```shell
    ng generate component components/home
    ```

2. Add the route to the Home component in **app-routing.module.ts**.

    ```typescript
    import { Routes } from '@angular/router';

    const routes: Routes = [
      { path: 'home', component: HomeComponent }
    ];
    ```

3. Configure the RoutingModule to import the routes

    ```typescript
    imports: [ RouterModule.forRoot(routes) ],
    ```

4. Add a `router-outlet` to **app.component.html**

    ```html
    <router-outlet></router-outlet>
    ```

5. Make the AppRoutingModule export `RouterModule` to fix the error about `router-outlet` not being found

    ```typescript
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
    ```

6. Make the HomeComponent the default route

    ```typescript
    import { Routes } from '@angular/router';

    const routes: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent }
    ];
    ```

7. Bonus steps  
    - Move the HTML content of app.component.html to home.component.html
    - Add `schemas: [NO_ERRORS_SCHEMA]` in the AppComponent spec file.
