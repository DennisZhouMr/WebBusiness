/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconBottom = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1719 1024" width={size} height={size} {...rest}>
      <Path
        d="M47.955455 48.08089a164.089573 164.089573 0 0 1 232.012246 0l579.646631 579.561301L1439.175632 48.08089a164.089573 164.089573 0 0 1 232.012246 232.012246l-692.282218 692.196889c-1.10929 1.19462-1.79193 2.5599-2.98655 3.66919a164.857543 164.857543 0 0 1-232.609556 0c-1.10929-1.10929-1.87726-2.5599-2.98655-3.66919L48.040785 280.007806A164.089573 164.089573 0 0 1 47.955455 48.08089z"
        fill={getIconColor(color, 0, '#434343')}
      />
    </Svg>
  );
};

IconBottom.defaultProps = {
  size: 18,
};

export default IconBottom;
