# Nextjs Typescript Template

Typescript framework for building apps with Nextjs, React and Styled Components.

## Prerequisites

- [NVM](https://github.com/creationix/nvm) (Mac/Linux)
- [NVM Windows](https://github.com/coreybutler/nvm-windows) (Windows)

## Recommended

- [Visual Studio Code](https://code.visualstudio.com/)
- [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
- [Styled components extension](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## Getting started

**Preinstall**

Run before installation to install and run the required Node version. On Windows, append the version number defined in the .nvmrc file to this command.

```sh
nvm install
nvm use
```

**Development Environment**

Run in a development environment to compile files and launch a live reload server.

```sh
npm install
npm run dev
```

**Live Deployment**

Run the following commands to install dependencies, lint the codebase, build the project and export static assets. Everything in the `out` folder can be deployed to a server.

```sh
npm install
npm run lint
npm run test
npm run build
```
