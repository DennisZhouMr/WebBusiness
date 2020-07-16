/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconMore = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 128m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill={getIconColor(color, 0, '#C3C3C3')}
      />
      <Path
        d="M512 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill={getIconColor(color, 1, '#C3C3C3')}
      />
      <Path
        d="M512 896m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#C3C3C3')}
      />
    </Svg>
  );
};

IconMore.defaultProps = {
  size: 18,
};

export default IconMore;
