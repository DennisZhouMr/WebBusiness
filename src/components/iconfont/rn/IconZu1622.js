/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconZu1622 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1394 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 176.551724m264.827586 0l706.206897 0q264.827586 0 264.827586 264.827586l0 0q0 264.827586-264.827586 264.827587l-706.206897 0q-264.827586 0-264.827586-264.827587l0 0q0-264.827586 264.827586-264.827586Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M882.758621 441.37931m-353.103449 0a353.103448 353.103448 0 1 0 706.206897 0 353.103448 353.103448 0 1 0-706.206897 0Z"
        fill={getIconColor(color, 1, '#FDD000')}
      />
    </Svg>
  );
};

IconZu1622.defaultProps = {
  size: 18,
};

export default IconZu1622;
