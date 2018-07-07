import { StyleSheet } from 'react-native';

export const alignItems = value => ({ alignItems: value });
export const flex = value => ({ flex: value });
export const justifyContent = value => ({ justifyContent: value });

const FlexSheet = StyleSheet.create({
    flex1: flex(1),
    justifyCenter: justifyContent('center'),
    itemsCenter: alignItems('center'),
});

export default FlexSheet;
