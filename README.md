## Doughboys
This codebase is used to build the following packages
- doughboys
- doughboys-native
- doughboys-web
- doughboys-malt

### Doughboys
An encompassing package, it's used to [lint](https://www.npmjs.com/package/eslint) code throughout this repository.

To see linting rules while coding with atom, [install](https://flight-manual.atom.io/using-atom/sections/atom-packages/) linter and linter-eslint.

### Doughboys Native
Built with react-native, this package builds a native application for viewing doughboys menu and ordering online

### Doughboys Web
Built with react, this package builds a web app for viewing doughboys menu and ordering online

### Doughboys Malt
A simple node application, this houses shared components, actions, and reducers used in doughboy apps.

## Getting Started - Development
### Install doughboys-malt packages
Doughboys malt is the glue that's required for the other packages to run properly
- Change into `native` directory
- Run `npm install`
- If you want to ensure it's working properly, `npm test`

### Starting native app
- Change into the `native` directory
```
npm install
npm start
```
