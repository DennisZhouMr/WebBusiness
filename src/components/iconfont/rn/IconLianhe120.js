/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconLianhe120 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1143 1024" width={size} height={size} {...rest}>
      <Path
        d=""
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLianhe120.defaultProps = {
  size: 18,
};

export default IconLianhe120;
