import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../common';
import { compose } from './stylesheets';
import Tachyons, { backgroundColor, color, flex } from './stylesheets/tachyons';

const App = () => (
    <View style={styles.app}>
        <View style={styles.appHeader}>
            <Text style={styles.appTitle}>Welcome to React ⚛️</Text>
        </View>
        <Text style={styles.appIntro}>
            To get started, edit src/native/App.js and save to reload.
        </Text>
    </View>
);

const { f3, f5, itemsCenter, justifyCenter, pa4, tc } = Tachyons;
const styles = StyleSheet.create({
    app: flex(1),
    appHeader: compose(backgroundColor(Colors.Charcoal.Dark), flex(1), itemsCenter, justifyCenter, pa4),
    appTitle: compose(f5, color(Colors.White)),
    appIntro: compose(flex(2), f3, tc),
});

export default App;
