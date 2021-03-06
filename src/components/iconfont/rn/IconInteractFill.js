/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconInteractFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m292.571429 0l438.857142 0q292.571429 0 292.571429 292.571429l0 438.857142q0 292.571429-292.571429 292.571429l-438.857142 0q-292.571429 0-292.571429-292.571429l0-438.857142q0-292.571429 292.571429-292.571429Z"
        fill={getIconColor(color, 0, '#434343')}
      />
      <Path
        d="M809.20381 460.580571a70.485333 70.485333 0 1 0 70.485333 70.485334 71.558095 71.558095 0 0 0-70.485333-70.485334z m0 106.666667a36.205714 36.205714 0 1 1 36.181333-36.205714 36.181333 36.181333 0 0 1-36.181333 36.205714z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <Path
        d="M508.220952 464.408381a13.019429 13.019429 0 0 0-13.336381 13.336381 15.676952 15.676952 0 0 0 7.631239 11.434667 16.286476 16.286476 0 0 0 13.33638 0 10.459429 10.459429 0 0 0 7.631239-11.434667 13.58019 13.58019 0 0 0-15.262477-13.336381z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <Path
        d="M820.614095 348.208762a356.547048 356.547048 0 1 0-43.885714 371.443809l-160.012191-161.913904z m-314.294857 175.250286a51.44381 51.44381 0 0 1 0-102.863238 52.46781 52.46781 0 0 1 51.44381 51.419428 51.2 51.2 0 0 1-51.44381 51.44381z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
    </Svg>
  );
};

IconInteractFill.defaultProps = {
  size: 18,
};

export default IconInteractFill;
