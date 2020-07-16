/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconBullseye = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 768c141.184 0 256-114.816 256-256s-114.816-256-256-256-256 114.816-256 256 114.816 256 256 256z m0-426.666667c94.122667 0 170.666667 76.544 170.666667 170.666667s-76.544 170.666667-170.666667 170.666667-170.666667-76.544-170.666667-170.666667 76.544-170.666667 170.666667-170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 938.666667c231.296 0 426.666667-195.370667 426.666667-426.666667S743.296 85.333333 512 85.333333 85.333333 280.704 85.333333 512s195.370667 426.666667 426.666667 426.666667z m0-768c185.045333 0 341.333333 156.288 341.333333 341.333333s-156.288 341.333333-341.333333 341.333333-341.333333-156.288-341.333333-341.333333 156.288-341.333333 341.333333-341.333333z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M512 597.333333c46.122667 0 85.333333-39.210667 85.333333-85.333333s-39.210667-85.333333-85.333333-85.333333-85.333333 39.210667-85.333333 85.333333 39.210667 85.333333 85.333333 85.333333z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconBullseye.defaultProps = {
  size: 18,
};

export default IconBullseye;
