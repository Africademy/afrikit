// @flow
import { sys } from '../../theme';

export const Checkbox = sys(
  {
    is: 'input',
    type: 'checkbox',
    m: 0,
    mr: 2,
  },
  'space',
  'color',
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
