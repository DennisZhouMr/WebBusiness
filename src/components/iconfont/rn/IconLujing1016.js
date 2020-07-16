/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconLujing1016 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1494 1024" width={size} height={size} {...rest}>
      <Path
        d="M268.210278 210.731246L0 466.825753l557.174247 557.174247L1494.360307 0.018901l-848.670998 584.61902z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLujing1016.defaultProps = {
  size: 18,
};

export default IconLujing1016;
