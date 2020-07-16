/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconMoreRow = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M253.16864 517.36064m-82.16064 0a80.235 80.235 0 1 0 164.32128 0 80.235 80.235 0 1 0-164.32128 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M520.192 517.36064m-82.16064 0a80.235 80.235 0 1 0 164.32128 0 80.235 80.235 0 1 0-164.32128 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M787.21536 517.36064m-82.16064 0a80.235 80.235 0 1 0 164.32128 0 80.235 80.235 0 1 0-164.32128 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconMoreRow.defaultProps = {
  size: 18,
};

export default IconMoreRow;
