# ng2-snowbound-viewer

<p>
  <a title='Build Status Travis' href="https://travis-ci.org/Alfresco/alfresco-ng2-components">
    <img src='https://travis-ci.org/Alfresco/alfresco-ng2-components.svg?branch=master'  alt='travis
    Status' />
  </a>
  <a title='Build Status AppVeyor' href="https://ci.appveyor.com/project/alfresco/alfresco-ng2-components">
    <img src='https://ci.appveyor.com/api/projects/status/github/Alfresco/alfresco-ng2-components'  alt='travis
    Status' />
  </a>
  <a href='https://codecov.io/gh/Alfresco/alfresco-ng2-components'>
    <img src='https://img.shields.io/codecov/c/github/Alfresco/alfresco-ng2-components/master.svg?maxAge=2592000' alt='Coverage Status' />
  </a>
  <a href='https://www.npmjs.com/package/ng2-snowbound-viewer'>
    <img src='https://img.shields.io/npm/dt/ng2-snowbound-viewer.svg' alt='npm downloads' />
  </a>
  <a href='https://github.com/Alfresco/alfresco-ng2-components/blob/master/LICENSE'>
     <img src='https://img.shields.io/hexpm/l/plug.svg' alt='license' />
  </a>
  <a href='https://www.alfresco.com/'>
     <img src='https://img.shields.io/badge/style-component-green.svg?label=alfresco' alt='alfresco component' />
  </a>
  <a href='https://angular.io/'>
     <img src='https://img.shields.io/badge/style-2-red.svg?label=angular' alt='angular 2' />
  </a>
  <a href='https://www.typescriptlang.org/docs/tutorial.html'>
     <img src='https://img.shields.io/badge/style-lang-blue.svg?label=typescript' alt='typescript' />
  </a>
  <a href='https://www.alfresco.com/'>
     <img src='https://img.shields.io/badge/style-%3E5.0.0-blue.svg?label=node%20version' alt='node version' />
  </a>
</p>

## Prerequisites

Before you start using this development framework, make sure you have installed all required software and done all the
necessary configuration, see this [page](https://github.com/Alfresco/alfresco-ng2-components/blob/master/PREREQUISITES.md).

## Install

Follow the 3 steps below:

1. Npm

    ```sh
    npm install ng2-snowbound-viewer --save
    ```

2. Html

    Include these dependencies in your index.html page:

    ```html

    <!-- Google Material Design Lite -->
    <link rel="stylesheet" href="node_modules/material-design-lite/material.min.css">
    <script src="node_modules/material-design-lite/material.min.js"></script>
    <link rel="stylesheet" href="node_modules/material-design-icons/iconfont/material-icons.css">

    <!-- Polyfill(s) for Safari (pre-10.x) -->
    <script src="node_modules/intl/dist/Intl.min.js"></script>
    <script src="node_modules/intl/locale-data/jsonp/en.js"></script>

    <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/dom4/1.8.3/dom4.js"></script>
    <script src="node_modules/element.scrollintoviewifneeded-polyfill/index.js"></script>

    <!-- Polyfill(s) for dialogs -->
    <script src="node_modules/dialog-polyfill/dialog-polyfill.js"></script>
    <link rel="stylesheet" type="text/css" href="node_modules/dialog-polyfill/dialog-polyfill.css" />
    <style>._dialog_overlay { position: static !important; } </style>

    <!-- Modules  -->
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    ```

3. SystemJs

    Add the following components to your systemjs.config.js file:

    - ng2-translate
    - alfresco-js-api
    - ng2-alfresco-core
    - ng2-snowbound-viewer

    Please refer to the following example file: [systemjs.config.js](demo/systemjs
    .config.js) .

Snowbound Viewer Component

## Basic usage

```html
<ng2-snowbound-viewer></ng2-snowbound-viewer>
```

Usage example of this component :

**main.ts**
```ts

```

#### Events

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
`methodName()`   | None.        | void    | Lorem ipsum dolor.

#### Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`foo`         | *string*    | `bar`        | Lorem ipsum dolor.


## Build from sources

Alternatively you can build component from sources with the following commands:


```sh
npm install
npm run build
```

### Build the files and keep watching for changes

```sh
$ npm run build:w
```

## Running unit tests

```sh
npm test
```

### Running unit tests in browser

```sh
npm test-browser
```

This task rebuilds all the code, runs tslint, license checks and other quality check tools
before performing unit testing.

### Code coverage

```sh
npm run coverage
```

## Demo

If you want have a demo of how the component works, please check the demo folder :

```sh
cd demo
npm install
npm start
```

## NPM scripts

| Command | Description |
| --- | --- |
| npm run build | Build component |
| npm run build:w | Build component and keep watching the changes |
| npm run test | Run unit tests in the console |
| npm run test-browser | Run unit tests in the browser
| npm run coverage | Run unit tests and display code coverage report |
| npm run build.umd |Build the UMD bundle package |
  

## History

For detailed changelog, check [Releases](https://github.com/AClineff/ng2-snowbound-viewer/releases).

## Contributors

[Contributors](https://github.com/AClineff/ng2-snowbound-viewer/graphs/contributors)
  
