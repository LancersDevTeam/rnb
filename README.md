# React Native Boilerplate

Practical boilerplate of React Native application.

## How to start your project

1. Clone [rnb](https://github.com/LancersDevTeam/rnb) and rename app.

```
git clone git@github.com:LancersDevTeam/rnb.git
npm install --global yarn
yarn install
yarn react-native-rename your_app_name
yarn remove react-native-rename
```

2. Edit README.md and LICENSE.
3. Add your repository

```
git remote set-url origin git/path/to/your/repository
```

## Included

We have configured below node modules:

- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [NativeBase](https://nativebase.io/)
- [mobx](https://mobx.js.org/)
- [React Navigation](https://github.com/react-community/react-navigation)
- [ESLint](https://eslint.org/) basically based on [JavaScript Standard Style](https://standardjs.com/)
- [Prettier](https://prettier.io/)
- [flow](https://flow.org/)

Other packages are listed in yarn.lock.

## Application design

This is the directory layout and its role.

```
.
├── App.js
├── index.js
├── __tests__
├── android
├── ios
├── app.json
├── flow
│   └── libdefs.js // We set this in .flowconfig
├── flow-typed
│   └── npm
├── jest_setup.js // We set this as setupFiles in package.json
├── node_modules
│   ├── ...
│   └── yarn-update // for `yarn yarn-update`
├── package.json
├── src
│   ├── routes.js // setting of `react-navigation`
│   ├── components // Wrapper of `native-base`. We assume that styles are added here. ex: Atomic design's atoms and molecules
│   ├── modules
│   │   ├── ...
│   │   └── module_root.js // entry point
│   └── stores // mobx-based models. We assume this article. https://mobx.js.org/best/store.html#combining-multiple-stores
└── yarn.lock
```

## Development

### Basic operation

- ios: Press Cmd+R to reload, Cmd+D or shake for dev menu.
- android: Double tap R on your keyboard to reload, Shake or press menu button for dev menu.

### Type check

We do not check type of third party packages. We may encounter `Required module not found` error in code importing third party packages.

```
$ ./node_modules/.bin/flow check --show-all-errors
Error: App.js:4
  4: import { Root, StyleProvider } from 'native-base';
                                         ^^^^^^^^^^^^^ native-base. Required module not found
```

Execute the following command to add type definition.

```
npm run flow-typed-install
```

If this does not solve the problem, add a dummy type definition to flow/libdefs.js.

### Commit Message Format

Each commit message consists of some types, a subject.

```
<type>: <subject>
<BLANK LINE>
<body>
```

#### Type

Type Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **workaround**: A workaround
* **doc**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

## LICENSE

[MIT](LICENSE)
