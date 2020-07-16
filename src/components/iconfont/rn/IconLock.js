/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconLock = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800 448v352c0 35.3-28.7 64-64 64H288c-35.3 0-64-28.7-64-64V448h576m0-64H224c-35.3 0-64 28.7-64 64v352c0 70.7 57.3 128 128 128h448c70.7 0 128-57.3 128-128V448c0-35.3-28.7-64-64-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 160c42.7 0 82.9 16.6 113.1 46.9C655.4 237.1 672 277.3 672 320v64H352v-64c0-42.7 16.6-82.9 46.9-113.1S469.3 160 512 160m0-64c-123.7 0-224 100.3-224 224v128h448V320c0-123.7-100.3-224-224-224zM512 560c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32s32-14.3 32-32V592c0-17.7-14.3-32-32-32z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconLock.defaultProps = {
  size: 18,
};

export default IconLock;
