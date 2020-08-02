/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconHuiyuanliebiansuoxiaodeng = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1160 1024" width={size} height={size} {...rest}>
      <Path
        d="M661.372556 320.096273h498.735751v383.850242H661.372556v320.053485L0 512 661.372556 0z"
        fill={getIconColor(color, 0, '#FB8618')}
      />
    </Svg>
  );
};

IconHuiyuanliebiansuoxiaodeng.defaultProps = {
  size: 18,
};

export default IconHuiyuanliebiansuoxiaodeng;
