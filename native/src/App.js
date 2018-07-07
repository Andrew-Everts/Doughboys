import React from 'react';
import { Text, View } from 'react-native';
import { compose, ColorSheet, FlexSheet } from './styles';

const { flex1, itemsCenter, justifyCenter } = FlexSheet;
const { backgroundColor, Colors } = ColorSheet;

const App = () => (
    <View style={compose(flex1, backgroundColor(Colors.White), itemsCenter, justifyCenter)}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
    </View>
);

export default App;
