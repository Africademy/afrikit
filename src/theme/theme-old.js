// @flow
// Export theme to theme provider
// Every property here is globally available in styledComponents when interpolating a function like so:
// ${(props) => props.theme}
// Or using import { withTheme } from 'styledComponents';

// TODO: Explore more theme color later.
// https://jsfiddle.net/nnennajohn/qg0o3zb9/7/

import {
  fadeIn,
  fadeOut,
  fadeAndScaleIn,
  pulsate,
  growAndFadeIn,
  shrinkAndFadeOut,
} from './animations';

import { rem } from './theme-mixins';
import transitions from './transitions';
import colors from './colors';

const toHexColor = require('./to-color').default;
const { color, fade, hsv, tint } = require('../utils/custom-less/color');

export const theme = {
  // -------- Colors -----------
  primaryColor: colors.blue6,
  infoColor: colors.blue6,
  successColor: colors.green6,
  processingColor: colors.blue6,
  errorColor: colors.red6,
  highlightColor: colors.red6,
  warningColor: colors.gold6,
  normalColor: '#d9d9d9',

  // The Grays!
  grays: {
    normal: '#f8f8f8',
    medium: '#cccccc',
    regular: '#e5e5e5',
    dark: '#999999',
    semibold: '#666666',
    bold: '#333333',
    white: '#ffffff',
    black: '#000000',
    black30: '#c2c2c2',
  },

  // Color used by default to control hover and active backgrounds and for alert info backgrounds.
  primary1: color(toHexColor(colors.blue6, 1)), // replace tint(primaryColor, 90%)
  primary2: color(toHexColor(colors.blue6, 2)), // replace tint(primaryColor, 80%)
  primary3: color(toHexColor(colors.blue6, 3)), //
  primary4: color(toHexColor(colors.blue6, 4)), //
  primary5: color(toHexColor(colors.blue6, 5)), // color used to control the text color in many active and hover states, replace tint(primaryColor, 20%)
  primary6: colors.blue6, // color used to control the text color of active buttons, don't use, use primaryColor
  primary7: color(toHexColor(colors.blue6, 7)), // replace shade(primaryColor, 5%)
  primary8: color(toHexColor(colors.blue6, 8)), //
  primary9: color(toHexColor(colors.blue6, 9)), //
  primary10: color(toHexColor(colors.blue6, 10)), //

  // Background color for `<body>`
  bodyBackground: '#fff',
  // Base background color for most components
  componentBackground: '#fff',
  fontFamilyNoNumber: `${'-appleSystem, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sansSerif'}`,
  fontFamily: `${'"lato", -appleSystem, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sansSerif'}`,
  codeFamily: 'Consolas, Menlo, Courier, monospace',
  headingColor: fade(color(toHexColor('#000')), 0.85),
  textColor: fade(color(toHexColor('#000')), 0.65),
  textColorSecondary: fade(color(toHexColor('#000')), 0.45),
  headingColorDark: fade(color(toHexColor('#fff')), 1),
  textColorDark: fade(color(toHexColor('#fff')), 0.85),
  textColorSecondaryDark: fade(color(toHexColor('#fff')), 0.65),
  fontSizeBase: rem(14),
  fontSizeLg: rem(16),
  fontSizeSm: rem(12),
  lineHeightBase: 1.5,

  // vertical paddings
  paddingLg: rem(24), // containers
  paddingMd: rem(16), // small containers and buttons
  paddingSm: rem(12), // Form controls and items
  paddingXs: rem(8), // small items

  // vertical padding for all form controls
  controlPaddingHorizontal: rem(12), // paddingSm,
  controlPaddingHorizontalSm: rem(8), // paddingXs,

  // The background colors for active and hover states for things like
  // list items or table cells.
  itemActiveBg: rem(12), //primary1,
  itemHoverBg: color(toHexColor(colors.blue6, 1)), //primary1,

  // ICONFONT
  iconfontCssPrefix: 'anticon',
  iconUrl: 'https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i',

  // LINK
  linkColor: colors.blue6, //primaryColor,
  linkHoverColor: color(toHexColor(colors.blue6, 5)),
  linkActiveColor: color(toHexColor(colors.blue6, 7)),
  linkDecoration: 'none',
  linkHoverDecoration: 'none',

  animations: {
    fadeIn,
    fadeOut,
    fadeAndScaleIn,
    pulsate,
    growAndFadeIn,
    shrinkAndFadeOut,
  },

  // Transitions
  ...transitions,

  // Border
  borderRadiusBase: '4px',
  borderRadiusSm: '2px',
  borderColorBase: hsv(0, 0, 0.85), // base border outline a component
  borderColorSplit: hsv(0, 0, 0.91), // split border inside a component
  borderWidthBase: '1px', // width of the border for a component
  borderStyleBase: 'solid', // style of a components border

  // Outline
  outlineBlurSize: 0,
  outlineWidth: '2px',
  outlineColor: colors.blue6,

  backgroundColorLight: hsv(0, 0, 0.98), // background of header and selected item
  backgroundColorBase: hsv(0, 0, 0.96), // Default grey background color

  // Disabled states
  disabledColor: fade(color(toHexColor('#000')), 0.25),
  disabledBg: hsv(0, 0, 0.98), //backgroundColorBase;
  disabledColorDark: fade(color(toHexColor('#fff')), 0.35),

  // Shadow
  shadowColor: `rgba(0, 0, 0, 0.15)`,
  boxShadowBase: `0 2px 8px rgba(0, 0, 0, 0.15)`,
  shadow1Up: `0 2px 8px rgba(0, 0, 0, 0.15)`,
  shadow1Down: `0 2px 8px rgba(0, 0, 0, 0.15)`,
  shadow1Left: `-2px 0 8px rgba(0, 0, 0, 0.15)`,
  shadow1Right: `2px 0 8px rgba(0, 0, 0, 0.15)`,
  shadow2: `0 4px 12px rgba(0, 0, 0, 0.15)`,

  // Buttons
  btnFontWeight: 400,
  btnBorderRadiusBase: '4px',
  btnborderRadiusSm: '4px',

  btnprimaryColor: '#fff',
  btnprimaryBg: colors.blue6, //primaryColor,

  btndefaultColor: fade(color(toHexColor('#000')), 0.65), // textColor
  btndefaultBg: '#fff',
  btndefaultBorder: hsv(0, 0, 0.85), //borderColorBase;

  btndangerColor: colors.red6, // errorColor;
  btndangerBg: hsv(0, 0, 0.96), //backgroundColorBase;
  btndangerBorder: hsv(0, 0, 0.85), //borderColorBase;

  btndisableColor: fade(color(toHexColor('#000')), 0.25), //disabledColor;
  btndisableBg: hsv(0, 0, 0.98), // disabledBg;
  btndisableBorder: hsv(0, 0, 0.85), //borderColorBase;

  btnpaddingBase: `0 ${rem(15)}`, // 0 paddingMd - 1px;
  btnFontSizeLg: rem(16), //fontSizeLg;
  btnFontSizeSm: rem(14), //fontSizeBase;
  btnPaddingLg: `0 ${rem(15)}`, // btnPaddingBase;
  btnPaddingSm: `0 ${rem(7)}`, //0 paddingXs - 1px;

  btnHeightBase: rem(32),
  btnHeightLg: rem(40),
  btnHeightSm: rem(24),

  btnCircleSize: rem(32), // btnHeightBase;
  btnCircleSizeLg: rem(40), // btnHeightLg;
  btnCircleSizeSm: rem(24), // btnHeightSm;

  btnGroupBorder: color(toHexColor(colors.blue6, 5)), //primary-5;

  // Checkbox
  checkBoxSize: rem(16),
  checkBoxColor: colors.blue6, // primaryColor;

  // Radio
  radioSize: rem(16),
  radioDotColor: colors.blue6, // primaryColor;

  // Radio buttons
  radioButtonBg: '#fff', // btnDefaultBg;
  radioButtonColor: fade(color(toHexColor('#000')), 0.65), // btnDefaultColor;
  radioButtonHoverColor: color(toHexColor(colors.blue6, 5)), //primary-5;
  radioButtonActiveColor: color(toHexColor(colors.blue6, 7)), //primary-7;

  // Media queries breakpoints

  breakpoints: {
    xs: 0, // rem
    sm: 48, // rem
    md: 64, // rem
    lg: 75, // rem
    xl: 85,
  },
  flexboxgrid: {
    // Defaults
    gutterWidth: 3, // rem
    outerMargin: 2, // rem
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
  },

  // Extra small screen / phone
  screenXs: rem(480),
  screenXsMin: rem(480), // screenXs;

  // Small screen / tablet
  screenSm: rem(576),
  screenSmMin: rem(576), // screenSm;

  // Medium screen / desktop
  screenMd: rem(768),
  screenMdMin: rem(768), // screenMd;

  // Large screen / wide desktop
  screenLg: rem(992),
  screenLgMin: rem(992), // screenLg;

  // Extra large screen / full hd
  screenXl: rem(1200),
  screenXlMin: rem(1200), // screenXl;

  // Extra extra large screen / large descktop
  screenXxl: rem(1600),
  screenXxlMin: rem(1600), // @screen-xxl;

  // provide a maximum
  screenXsMax: rem(575),
  screenSmMax: rem(767),
  screenMdMax: rem(991),
  screenLgMax: rem(1199),
  screenXlMax: rem(1599),

  // Grid system
  gridColumns: 24,
  gridGutterWidth: 0,

  // Layout
  layoutBodyBackground: '#f0f2f5',
  layoutHeaderBackground: '#001529',
  layoutFooterBackground: '#f0f2f5', // layoutBodyBackground;
  layoutHeaderHeight: rem(64),
  layoutHeaderPadding: `0 ${rem(50)}`, // 0 50px;
  layoutFooterPadding: `${rem(24)} ${rem(50)}`, // 24px 50px;
  layoutSiderBackground: '#001529', // layoutHeaderBackground;
  layoutTriggerHeight: rem(48),
  layoutTriggerBackground: '#002140',
  layoutTriggerColor: '#fff',
  layoutZeroTriggerWidth: rem(36),
  layoutZeroTriggerHeight: rem(42),
  // Layout light theme
  layoutSiderBackgroundLight: '#fff',
  layoutTriggerBackgroundLight: '#fff',
  layoutTriggerColorLight: fade(color(toHexColor('#000')), 0.65), // textColor

  // zIndex list
  zindexAffix: 10,
  zindexBackTop: 10,
  zindexModalMask: 1000,
  zindexModal: 1000,
  zindexNotification: 1010,
  zindexMessage: 1010,
  zindexPopover: 1030,
  zindexPicker: 1050,
  zindexDropdown: 1050,
  zindexTooltip: 1060,

  // Animation
  animationDurationSlow: '.3s', // Modal
  animationDurationBase: '.2s',
  animationDurationFast: '.1s', // Tooltip

  // Form
  // ---
  labelRequiredColor: colors.red6, // highlightColor;
  labelColor: fade(color(toHexColor('#000')), 0.85), // headingColor;
  formItemMarginBottom: rem(24),
  formItemTrailingColon: true,
  formVerticalLabelPadding: `0 0 ${rem(8)}`,
  formVerticalLabelMargin: 0,

  // Input
  // ---
  inputHeightBase: rem(32),
  inputHeightLg: rem(40),
  inputHeightSm: rem(24),
  inputPaddingHorizontal: rem(11), // paddingSm - 1, controlPaddingHorizontal - 1px;
  inputPaddingHorizontalBase: rem(11), //inputPaddingHorizontal;
  inputPaddingHorizontalSm: rem(7), // controlPaddingHorizontalSm - 1px;
  inputPaddingHorizontalLg: rem(11), // inputPaddingHorizontal;
  inputPaddingVerticalBase: rem(4),
  inputPaddingVerticalSm: '1px',
  inputPaddingVerticalLg: rem(6),
  inputPlaceholderColor: hsv(0, 0, 0.75),
  inputColor: fade(color(toHexColor('#000')), 0.65), // textColor
  inputBorderColor: hsv(0, 0, 0.85), //borderColorBase;
  inputBg: '#fff',
  inputAddonBg: hsv(0, 0, 0.98), // backgroundColorLight;
  inputHoverBorderColor: colors.blue6, // primaryColor;
  inputDisabledBg: hsv(0, 0, 0.98), // disabledBg;

  // Tooltip
  // ---
  //* Tooltip max width
  tooltipMaxWidth: rem(250),
  //** Tooltip text color
  tooltipColor: '#fff',
  //** Tooltip background color
  tooltipBg: `rgba(0, 0, 0, 0.75)`,
  //** Tooltip arrow width
  tooltipArrowWidth: rem(5),
  //** Tooltip distance with trigger
  tooltipDistance: rem(8), // tooltipArrowWidth - 1px + 4px;
  //** Tooltip arrow color
  tooltipArrowColor: `rgba(0, 0, 0, 0.75)`, // tooltipBg;

  // Popover
  // ---
  //** Popover body background color
  popoverBg: '#fff',
  //** Popover text color
  popoverColor: fade(color(toHexColor('#000')), 0.65), // textColor
  //** Popover maximum width
  popoverMinWidth: rem(177),
  //** Popover arrow width
  popoverArrowWidth: rem(6),
  //** Popover arrow color
  popoverArrowColor: '#fff', // popoverBg;
  //** Popover outer arrow width
  //** Popover outer arrow color
  popoverArrowOuterColor: '#fff', // popoverBg;
  //** Popover distance with trigger
  popoverDistance: rem(10), // popoverArrowWidth + 4px;

  // Modal
  // --
  modalMaskBg: `rgba(0, 0, 0, 0.65)`,

  // Progress
  // --
  progressDefaultColor: colors.blue6, // processingColor;
  progressRemainingColor: hsv(0, 0, 0.96), // backgroundColorBase;

  // Menu
  // ---
  menuInlineToplevelItemHeight: rem(40),
  menuItemHeight: rem(40),
  menuCollapsedWidth: rem(80),
  menuBg: '#fff', // componentBackground;
  menuItemColor: fade(color(toHexColor('#000')), 0.65), // textColor
  menuHighlightColor: colors.blue6, // primaryColor;
  menuItemActiveBg: rem(12), //primary1, itemActiveBg;
  menuItemGroupTitleColor: fade(color(toHexColor('#000')), 0.45), //textColorSecondary;
  // dark theme
  menuDarkColor: fade(color(toHexColor('#fff')), 0.65), // textColorSecondaryDark;
  menuDarkBg: '#001529', // layoutHeaderBackground;
  menuDarkArrowColor: '#fff',
  menuDarkSubmenuBg: '#000c17',
  menuDarkHighlightColor: '#fff',
  menuDarkItemActiveBg: colors.blue6, // primaryColor;

  // Spin
  // ---
  spinDotSizeSm: rem(14),
  spinDotSize: rem(20),
  spinDotSizeLg: rem(32),

  // Table
  // --
  tableHeaderBg: hsv(0, 0, 0.98), // backgroundColorLight;
  tableHeaderSortBg: hsv(0, 0, 0.96), // backgroundColorBase;
  tableRowHoverBg: color(toHexColor(colors.blue6, 1)), // primary1;
  tableSelectedRowBg: '#fafafa',
  tableExpandedRowBg: '#fbfbfb',
  tablePaddingVertical: rem(16),
  tablePaddingHorizontal: rem(16),

  // Tag
  // --
  tagDefaultBg: hsv(0, 0, 0.98), // backgroundColorLight;
  tagDefaultColor: fade(color(toHexColor('#000')), 0.65), // textColor
  tagFontSize: rem(12), // fontSizeSm;

  // TimePicker
  // ---
  timePickerPanelColumnWidth: rem(56),
  timePickerPanelWidth: rem(56 * 3), // timePickerPanelColumnWidth * 3;
  timePickerSelectedBg: hsv(0, 0, 0.96), // backgroundColorBase;

  // Carousel
  // ---
  carouselDotWidth: rem(16),
  carouselDotHeight: rem(3),
  carouselDotActiveWidth: rem(24),

  // Badge
  // ---
  badgeHeight: rem(20),
  badgeDotSize: rem(6),
  badgeFontSize: rem(12), // fontSizeSm;
  badgeFontWeight: 'normal',
  badgeStatusSize: rem(6),
  // Rate
  // ---
  rateStarColor: colors.yellow6, // yellow6;
  rateStarBg: hsv(0, 0, 0.91), // borderColorSplit;

  // Card
  // ---
  cardHeadColor: fade(color(toHexColor('#000')), 0.85), // headingColor;
  cardHeadBackground: '#fff', // componentBackground;
  cardHeadPadding: rem(16),
  cardInnerHeadPadding: rem(12),
  cardPaddingBase: rem(24),
  cardPaddingWider: rem(32),
  cardActionsBackground: hsv(0, 0, 0.98), // backgroundColorLight;
  cardShadow: `0 2px 8px rgba(0, 0, 0, 0.09)`,

  // Tabs
  // ---
  tabsCardHeadBackground: hsv(0, 0, 0.98), // backgroundColorLight;
  tabsCardHeight: rem(40),
  tabsCardActiveColor: colors.blue6, // primaryColor;
  tabsTitleFontSize: rem(14), // fontSizeBase;
  tabsTitleFontSizeLg: rem(16), // fontSizeLg;
  tabsTitleFontSizeSm: rem(14), // fontSizeBase;
  tabsInkBarColor: colors.blue6, // primaryColor;;
  tabsBarMargin: `0 0 ${rem(16)} 0`,
  tabsHorizontalMargin: `0 ${rem(32)} 0 0`,
  tabsHorizontalPadding: `${rem(12)} ${rem(16)}`,
  tabsVerticalPadding: `${rem(8)} ${rem(24)}`,
  tabsVerticalMargin: `0 0 ${rem(16)} 0`,
  tabsScrollingSize: rem(32),
  tabsHighlightColor: colors.blue6, // primaryColor;
  tabsHoverColor: color(toHexColor(colors.blue6, 5)), // primary5;
  tabsActiveColor: color(toHexColor(colors.blue6, 7)), // primary7;

  // BackTop
  // ---
  backTopColor: '#fff',
  backTopBg: fade(color(toHexColor('#000')), 0.45), // textColorSecondary;
  backTopHoverBg: fade(color(toHexColor('#000')), 0.65), // textColor

  // Avatar
  // ---
  avatarSizeBase: rem(32),
  avatarSizeLg: rem(40),
  avatarSizeSm: rem(24),
  avatarFontSizeBase: rem(18),
  avatarFontSizeLg: rem(24),
  avatarFontSizeSm: rem(14),
  avatarBg: '#ccc',
  avatarColor: '#fff',
  avatarBorderRadius: '4px', // borderRadiusBase;

  // Switch
  // ---
  switchHeight: rem(22),
  switchSmHeight: rem(16),
  switchSmCheckedMarginLeft: `-${rem(13)}`,
  switchDisabledOpacity: 0.4,
  switchColor: colors.blue6, // primaryColor;

  // Pagination
  // ---
  paginationItemSize: rem(32),
  paginationItemSizeSm: rem(24),
  paginationFontFamily: 'Arial',
  paginationFontWeightActive: 500,

  // Breadcrumb
  // ---
  breadcrumbBaseColor: fade(color(toHexColor('#000')), 0.45), // textColorSecondary;
  breadcrumbLastItemColor: fade(color(toHexColor('#000')), 0.65), //textColor;
  breadcrumbFontSize: rem(14), // fontSizeBase;
  breadcrumbIconFontSize: rem(12), // fontSizeSm;
  breadcrumbLinkColor: fade(color(toHexColor('#000')), 0.45), // textColorSecondary;
  breadcrumbLinkColorHover: color(toHexColor(colors.blue6, 5)), // primary5;
  breadcrumbSeparatorColor: fade(color(toHexColor('#000')), 0.45), // textColorSecondary;
  breadcrumbSeparatorMargin: `0 ${rem(8)}`, // 0 paddingXs;

  // Slider
  // ---
  sliderMargin: `${rem(14)} ${rem(6)} ${rem(10)}`, // 14px 6px 10px;
  sliderRailBackgroundColor: hsv(0, 0, 0.96), // backgroundColorBase;
  sliderRailBackgroundColorHover: '#e1e1e1',
  sliderTrackBackgroundColor: color(toHexColor(colors.blue6, 3)), //  primary3;
  sliderTrackBackgroundColorHover: color(toHexColor(colors.blue6, 4)), // primary4;
  sliderHandleColor: color(toHexColor(colors.blue6, 3)), // primary3;
  sliderHandleColorHover: color(toHexColor(colors.blue6, 4)), // primary4;
  sliderHandleColorFocus: tint(colors.blue6, 0.2),
  sliderHandleColorFocusShadow: tint(colors.blue6, 0.5),
  sliderHandleColorTooltipOpen: colors.blue6, // primaryColor;
  sliderDotBorderColor: hsv(0, 0, 0.91), // borderColorSplit;
  sliderDotBorderColorActive: tint(colors.blue6, 0.5),
  sliderDisabledColor: fade(color(toHexColor('#000')), 0.25), // disabledColor;
  sliderDisabledBackgroundColor: '#fff', // componentBackground;

  // Collapse
  // ---
  collapseHeaderPadding: `${rem(12)} 0 ${rem(12)} ${rem(40)}`, // 12px 0 12px 40px;
  collapseHeaderBg: hsv(0, 0, 0.98), // backgroundColorLight;
  collapseContentPadding: rem(16), // paddingMd;
  collapseContentBg: '#fff', //componentBackground
};
