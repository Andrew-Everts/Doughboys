import { StyleSheet } from 'react-native';

export * as ColorSheet from './colors';
export { default as SpacingSheet } from './spacing';
export { default as FlexSheet } from './flex';

export const compose = (...args) => StyleSheet.flatten([...args]);
