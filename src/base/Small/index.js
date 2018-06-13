// @flow
import React from 'react';
import { sys } from '../../theme';
import { Text } from '../Text';

const Base = props => <Text {...props} is="small" />;

export const Small = sys({
  is: Base,
  fontSize: 0,
});

Small.displayName = 'Small';

export default Small;
