// @flow
import React from 'react';
import { sys } from '../../theme';
import Text from './Text';

export const Lead = sys({
  is: Text,
  fontSize: 3,
  lineHeight: 1.25,
});

Lead.displayName = 'Lead';

export default Lead;
