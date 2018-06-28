import { StyleSheet } from 'react-native';

const SPACING_NONE = 0;
const SPACING_XS = 2;
const SPACING_SMALL = 4;
const SPACING_MEDIUM = 8;
const SPACING_LARGE = 16;
const SPACING_XL = 32;
const SPACING_XXL = 64;
const SPACING_XXXL = 128;

const FONT_SIZE_MEDIUM = 16;
const FONT_SIZE_XL = 30;

export const alignItems = alignItems => ({ alignItems });
export const backgroundColor = backgroundColor => ({ backgroundColor });
export const color = color => ({ color });
export const flex = flex => ({ flex });
export const fontSize = fontSize => ({ fontSize });
export const justifyContent = justifyContent => ({ justifyContent });
export const padding = padding => ({ padding });
export const textAlign = textAlign => ({ textAlign });

const Tachyons = StyleSheet.create({
    flex1: flex(1),
    justifyCenter: justifyContent('center'),
    itemsCenter: alignItems('center'),
    tc: textAlign('center'),
    f3: fontSize(FONT_SIZE_XL),
    f5: fontSize(FONT_SIZE_MEDIUM),
    pa0: padding(SPACING_NONE),
    pa1: padding(SPACING_XS),
    pa2: padding(SPACING_SMALL),
    pa3: padding(SPACING_MEDIUM),
    pa4: padding(SPACING_LARGE),
    pa5: padding(SPACING_XL),
    pa6: padding(SPACING_XXL),
    pa7: padding(SPACING_XXXL),
});

export default Tachyons;
