// @flow
import ThemeReset from './theme-reset';
import ThemeHelperClasses from './theme-helper-classes';
// import themeColors from './theme-colors';
import themeTransitions from './theme-transitions';
import theme from './theme';
import themeVars, {
  THEME_CONF,
  // extractThemeOrDefault,
} from './theme-vars-cache';

import {
  primaryFontSizes,
  secondaryFontSizes,
  fontFallBackStack,
  primaryFontStack,
  secondaryFontStack,
  monoFontStack,
  primaryFontObj,
  secondaryFontObj,
  pfont,
  sfont,
} from './theme-typography';

// KeyFrames
import {
  fadeIn,
  fadeOut,
  fadeAndScaleIn,
  pulsate,
  growAndFadeIn,
  shrinkAndFadeOut,
  moveUpIn,
  moveUpOut,
  moveDownIn,
  moveDownOut,
  moveLeftIn,
  moveLeftOut,
  moveRightIn,
  moveRightOut,
  slideUpIn,
  slideUpOut,
  slideDownIn,
  slideDownOut,
  slideLeftIn,
  slideLeftOut,
  slideRightIn,
  slideRightOut,
  swingIn,
  zoomIn,
  zoomOut,
  zoomBigIn,
  zoomBigOut,
  zoomUpIn,
  zoomUpOut,
  zoomDownIn,
  zoomDownOut,
  zoomLeftIn,
  zoomLeftOut,
  zoomRightIn,
  zoomRightOut,
} from './theme-keyframes';

import {
  motionCollapse,
  addFadeMotion,
  addMoveMotion,
  addSlideMotion,
  addSwingMotion,
  addZoomMotion,
} from './theme-animations';

export {
  ThemeReset,
  ThemeHelperClasses,
  // themeColors,
  themeTransitions,
  theme,
  themeVars,
  THEME_CONF,
  // extractThemeOrDefault,
  // Theme Typography
  primaryFontSizes,
  secondaryFontSizes,
  fontFallBackStack,
  primaryFontStack,
  secondaryFontStack,
  monoFontStack,
  primaryFontObj,
  secondaryFontObj,
  pfont,
  sfont,
  // KeyFrames
  fadeIn,
  fadeOut,
  fadeAndScaleIn,
  pulsate,
  growAndFadeIn,
  shrinkAndFadeOut,
  moveUpIn,
  moveUpOut,
  moveDownIn,
  moveDownOut,
  moveLeftIn,
  moveLeftOut,
  moveRightIn,
  moveRightOut,
  slideUpIn,
  slideUpOut,
  slideDownIn,
  slideDownOut,
  slideLeftIn,
  slideLeftOut,
  slideRightIn,
  slideRightOut,
  swingIn,
  zoomIn,
  zoomOut,
  zoomBigIn,
  zoomBigOut,
  zoomUpIn,
  zoomUpOut,
  zoomDownIn,
  zoomDownOut,
  zoomLeftIn,
  zoomLeftOut,
  zoomRightIn,
  zoomRightOut,
  // Global Animations
  motionCollapse,
  addFadeMotion,
  addMoveMotion,
  addSlideMotion,
  addSwingMotion,
  addZoomMotion,
};

export * from './extras/theme-base';
export * from './extras/mixins';
export * from './extras/style-functions';
export * from './extras/style-helpers';
export * from './extras/utils';
export * from './extras/theme-constants';
export * from './extras/mixin-provider';
// export * from './reactackle/globalStyles';
// export * from './reactackle/resetStyles';
export * from './extras/hoc/MixinProvider';
export * from './extras/hoc/withTheme';
