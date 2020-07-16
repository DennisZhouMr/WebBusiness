/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconZu1707 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1152 1024" width={size} height={size} {...rest}>
      <Path
        d="M938.758156 0H213.300659a213.990749 213.990749 0 0 0-213.300659 213.300659v597.398682a213.990749 213.990749 0 0 0 213.300659 213.300659h725.410445a213.990749 213.990749 0 0 0 213.300659-213.300659V213.300659A213.990749 213.990749 0 0 0 938.758156 0z m139.758983 817.898239a131.446531 131.446531 0 0 1-131.070118 131.070118h-742.788176a131.446531 131.446531 0 0 1-131.070118-131.070118V380.96125h1004.928412z m0-524.327524H73.588727v-87.37485a131.446531 131.446531 0 0 1 131.070118-131.070118h742.788176a131.446531 131.446531 0 0 1 131.070118 131.070118z"
        fill={getIconColor(color, 0, '#070203')}
      />
      <Path
        d="M255.945106 640.058815a42.785603 42.785603 0 0 0-42.675815 42.675815v85.335947a42.675816 42.675816 0 0 0 85.335947 0v-85.335947a42.785603 42.785603 0 0 0-42.660132-42.675815z m170.671895 0a42.785603 42.785603 0 0 0-42.675816 42.675815v85.335947a42.691499 42.691499 0 0 0 85.367316 0v-85.335947a42.81697 42.81697 0 0 0-42.613081-42.675815z m170.671895 0a42.801287 42.801287 0 0 0-42.644448 42.675815v85.335947a42.675816 42.675816 0 0 0 85.335947 0v-85.335947a42.81697 42.81697 0 0 0-42.61308-42.675815z"
        fill={getIconColor(color, 1, '#278775')}
      />
    </Svg>
  );
};

IconZu1707.defaultProps = {
  size: 18,
};

export default IconZu1707;
