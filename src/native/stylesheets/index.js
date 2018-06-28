import { StyleSheet } from 'react-native';

export { default as Tachyons } from './tachyons';

export const compose = (...args) => StyleSheet.flatten([...args]);
