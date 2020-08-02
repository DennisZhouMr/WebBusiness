/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconZu4154 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1109 1024" width={size} height={size} {...rest}>
      <Path
        d="M270.672692 502.315919l1.256313 2.093855c0.14657 0 0.14657 0 0.272201-0.14657z m0 0"
        fill={getIconColor(color, 0, '#946728')}
      />
      <Path
        d="M423.126306 644.028054c-66.375217 36.977487-76.341969-20.729169-76.341969-20.729168l-83.188876-193.849136c-32.077865-92.004008 27.722646-41.458338 27.722646-41.458338s51.257581 38.652571 90.203292 62.334076a104.253062 104.253062 0 0 0 83.188876 6.867846l544.402413-250.57168A581.442715 581.442715 0 0 0 554.87169 0.43971C248.415009 0.43971 0 217.25844 0 484.76941c0 153.919313 82.225703 290.920274 210.369655 379.574113l-23.032409 132.499172s-11.202127 38.652571 27.743584 20.729169c26.612903-12.186239 94.391003-56.031571 134.739597-82.770105a626.062775 626.062775 0 0 0 205.051263 34.31829c306.456681 0 555.081076-216.81873 555.081076-484.3297a434.202801 434.202801 0 0 0-57.978857-215.66711C878.58174 373.334424 475.200491 615.216604 423.230999 644.069931z m0 0"
        fill={getIconColor(color, 1, '#50B674')}
      />
    </Svg>
  );
};

IconZu4154.defaultProps = {
  size: 18,
};

export default IconZu4154;
