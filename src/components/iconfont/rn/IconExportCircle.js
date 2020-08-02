/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconExportCircle = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.093091 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M760.669091 370.827636L624.197818 265.332364a43.473455 43.473455 0 0 0-70.050909 34.420363v29.207273a227.351273 227.351273 0 0 0-221.975273 231.121455 251.694545 251.694545 0 0 0 12.334546 77.056 223.557818 223.557818 0 0 1 209.454545-154.112v27.717818a43.473455 43.473455 0 0 0 70.050909 34.420363l136.541091-105.495272a43.473455 43.473455 0 0 0 0-68.817455z m0 0"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <Path
        d="M673.605818 767.325091H342.109091a109.381818 109.381818 0 0 1-109.381818-109.381818V411.345455a109.381818 109.381818 0 0 1 109.381818-109.381819h32.256a31.185455 31.185455 0 0 1 31.232 31.232A31.185455 31.185455 0 0 1 374.365091 364.450909H342.155636a46.987636 46.987636 0 0 0-47.010909 47.010909v246.574546a46.987636 46.987636 0 0 0 47.010909 47.010909h331.426909a46.987636 46.987636 0 0 0 47.01091-47.010909v-85.690182a31.208727 31.208727 0 0 1 31.232-31.232 31.185455 31.185455 0 0 1 31.232 31.232v85.690182a109.381818 109.381818 0 0 1-109.381819 109.381818z m0 0"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </Svg>
  );
};

IconExportCircle.defaultProps = {
  size: 18,
};

export default IconExportCircle;