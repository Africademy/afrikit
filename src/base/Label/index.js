// @flow
import { sys } from '../../theme';

export const Label = sys(
  {
    is: 'label',
    fontSize: 1,
    mb: 1,
    align: 'center',
  },
  {
    display: 'flex',
  },
  'alignItems',
  'space',
  'color',
);

Label.displayName = 'Label';

export default Label;
