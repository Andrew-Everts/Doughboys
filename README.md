## Doughboys
This codebase is used to build react / react-native based web apps for viewing and ordering off of the doughboys menu

### Getting Started -- Development
- Make sure you have node (`npm`)
```
npm install
npm run start-native
```

### For more info
- This app was generated using [create-react-app](https://github.com/facebook/create-react-app)
- The native portions leverage [react-native-scripts](https://github.com/react-community/create-react-native-app)

### Testing conventions
Because it's complicated getting native & web based tests running in the same environment, we're getting by using the following conventions
- Native tests: must be in `/src/native`, must be terminated by `.ntest.js`, for example `/src/native/App.ntest.js`
- Web tests: must be in `/src`, must be terminated by `.test.js`, for example `/src/web/App.test.js`

To see this in action, try the following
```
npm run test-web
npm run test-native

npm test # tests web, followed by native
```
