// @flow

import { theme } from '../../../../../theme';

import type { ThemedProductComponentStyles } from '../../theme/types';

const { colors, gridSize } = theme;
const dividerLineHeight = 2;
const dividerTotalHeight = gridSize() * 5;

const baseStyles = {
  borderRadius: '1px',
  flexShrink: 0,
  height: `${dividerLineHeight}px`,
  margin: `${(dividerTotalHeight - dividerLineHeight) / 2}px 0`,
};

const light = () => ({
  container: { ...baseStyles, backgroundColor: colors.N30A },
  root: { ...baseStyles, backgroundColor: colors.N80A },
});

const dark = () => ({
  container: { ...baseStyles, backgroundColor: colors.DN50 },
  root: { ...baseStyles, backgroundColor: colors.DN50 },
});

const settings = () => ({
  container: { ...baseStyles, backgroundColor: colors.N900 },
  root: { ...baseStyles, backgroundColor: colors.N900 },
});

const themes: ThemedProductComponentStyles<void> = { dark, light, settings };
export default themes;
