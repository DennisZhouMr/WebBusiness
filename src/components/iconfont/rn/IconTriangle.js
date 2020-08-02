/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconTriangle = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1170 1024" width={size} height={size} {...rest}>
      <Path
        d="M585.142857 1024L0 0h1170.285714z"
        fill={getIconColor(color, 0, '#434343')}
      />
    </Svg>
  );
};

IconTriangle.defaultProps = {
  size: 18,
};

export default IconTriangle;
