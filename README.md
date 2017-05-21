# Redux-Starter

This repository contains a starter configuration for building a Redux-React application with Webpack, Webpack-Dev-Server, Yarn, and tests with Jest. It also uses Babel to pre-compile Es6, stage-2 javascript with support for generators.

## Installing

Clone/fork the repository and run the following to prepare for installation:

```
npm install -g webpack webpack-dev-server yarn jest
```

The project uses yarn, instead of npm, to manage packages (since it has stricter versioning and installs packages asynchronously). Run

```
yarn
```

to install all packages in the repository. Then, if you want to add additional packages run

```
yarn add
yarn remove
```

## Running

This project uses `webpack-dev-server`, which runs an auto-updating temporary build and hosts it on the local machine. Run

```
yarn dev
```
to start the server, and navigate to `localhost:8080` to see it in action.

## Testing

The project uses `jest` as its testing framework (so that tests are part of the modules themselves), and the Enzyme library to shallow render
React components. Run

```
yarn test
```
to run through all tests. Or call

```
yarn test:watch
```

to have jest wait for file changes and run any tests connected to those files automatically.