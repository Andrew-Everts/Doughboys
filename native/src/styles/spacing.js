import { StyleSheet } from 'react-native';

const SPACING_NONE = 0;
const SPACING_XS = 4;
const SPACING_S = 8;
const SPACING_M = 12;
const SPACING_L = 16;
const SPACING_XL = 24;
const SPACING_XXL = 32;

const SPACING_OPTIONS = [SPACING_NONE, SPACING_XS, SPACING_S, SPACING_M, SPACING_L, SPACING_XL, SPACING_XXL];

const SpacingSheet = StyleSheet.create(
    SPACING_OPTIONS.reduce((styles, option, index) => {
        styles[`pa${index}`] = { padding: option };
        styles[`pb${index}`] = { paddingBottom: option };
        styles[`pt${index}`] = { paddingTop: option };
        styles[`pv${index}`] = { paddingVertical: option };
        styles[`pl${index}`] = { paddingLeft: option };
        styles[`pr${index}`] = { paddingRight: option };
        styles[`ph${index}`] = { paddingHorizontal: option };
        styles[`ma${index}`] = { margin: option };
        styles[`mb${index}`] = { marginBottom: option };
        styles[`mt${index}`] = { marginTop: option };
        styles[`mv${index}`] = { marginVertical: option };
        styles[`ml${index}`] = { marginLeft: option };
        styles[`mr${index}`] = { marginRight: option };
        styles[`mh${index}`] = { marginHorizontal: option };

        return styles;
    }, {}),
);

export default SpacingSheet;
