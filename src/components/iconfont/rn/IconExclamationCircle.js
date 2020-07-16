/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconExclamationCircle = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024C229.232 1024 0 794.768 0 512 0 229.232 229.232 0 512 0 794.768 0 1024 229.232 1024 512 1024 794.768 794.768 1024 512 1024ZM560 240C560 213.488 538.512 192 512 192 485.488 192 464 213.488 464 240L464 592C464 618.512 485.488 640 512 640 538.512 640 560 618.512 560 592L560 240ZM512 736C485.488 736 464 757.488 464 784 464 810.512 485.488 832 512 832 538.512 832 560 810.512 560 784 560 757.488 538.512 736 512 736Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconExclamationCircle.defaultProps = {
  size: 18,
};

export default IconExclamationCircle;
