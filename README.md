# React Native Boilerplate

The React Native and mobx boilerplate.

## Included

We have configured below node modules:

(TODO)

Other packages are listed in yarn.lock.

## Development

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
