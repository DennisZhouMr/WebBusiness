/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconPhone = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M399.36 335.872c0 0-3.072 58.368-84.992 102.4 0 0 111.616 219.136 310.272 301.056 0 0 78.848-88.064 102.4-81.92l234.496 102.4c0 0 17.408 97.28-149.504 161.792s-332.8-63.488-507.904-265.216S98.304 260.096 145.408 157.696 296.96 90.112 296.96 90.112L399.36 335.872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPhone.defaultProps = {
  size: 18,
};

export default IconPhone;
