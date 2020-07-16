/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconPolygonTwo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M970.054082 713.279423V310.720577a109.441154 109.441154 0 0 0-54.712336-94.772084L566.7453 14.66907a109.432913 109.432913 0 0 0-109.432913 0l-348.596446 201.279423a109.432913 109.432913 0 0 0-54.720577 94.772084v402.558846a109.432913 109.432913 0 0 0 54.720577 94.772084l348.596446 201.279423a109.432913 109.432913 0 0 0 109.432913 0l348.596446-201.279423a109.441154 109.441154 0 0 0 54.712336-94.772084z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M404.165851 831.851661a34.068504 34.068504 0 0 1-34.052021-34.052022V633.745042h44.996137v148.297708l97.557558-36.878702 103.219161 36.878702V633.745042h44.913726v163.75792a34.052022 34.052022 0 0 1-45.531805 32.057687l-102.189029-36.573783-96.873552 36.573783a31.315993 31.315993 0 0 1-12.015452 2.291012"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <Path
        d="M515.420036 240.828226a210.336338 210.336338 0 0 0-78.734999 15.089363 203.125418 203.125418 0 0 0-64.280195 41.073397 190.66495 190.66495 0 0 0-43.314963 60.983776 183.074942 183.074942 0 0 0 0 149.319598 191.522019 191.522019 0 0 0 43.314963 60.983775 202.284831 202.284831 0 0 0 64.280195 41.065156 212.907546 212.907546 0 0 0 157.469998 0 203.224311 203.224311 0 0 0 64.280195-41.065156 191.513778 191.513778 0 0 0 43.306722-60.983775 183.041978 183.041978 0 0 0 0-149.319598 191.44785 191.44785 0 0 0-43.306722-60.983776 203.232552 203.232552 0 0 0-64.280195-41.073397 210.35282 210.35282 0 0 0-78.734999-15.089363m0 426.12001a257.293845 257.293845 0 0 1-96.255473-18.42699 248.731393 248.731393 0 0 1-78.578418-50.212722 234.152975 234.152975 0 0 1-52.948751-74.441411 224.041205 224.041205 0 0 1 0-182.555756 234.457893 234.457893 0 0 1 52.948751-74.515581 248.344064 248.344064 0 0 1 78.504249-50.204481 260.557301 260.557301 0 0 1 192.510945 0 248.673706 248.673706 0 0 1 78.578419 50.204481 234.202421 234.202421 0 0 1 52.948751 74.441412 224.065928 224.065928 0 0 1 0 182.547515 234.482617 234.482617 0 0 1-52.948751 74.51558 248.385269 248.385269 0 0 1-78.504249 50.212722 258.414628 258.414628 0 0 1-96.255473 18.42699"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <Path
        d="M515.428277 600.929178a94.310585 94.310585 0 0 1-48.144218-13.474117 129.96137 129.96137 0 0 1-39.29333-36.812774 187.195467 187.195467 0 0 1-26.412568-54.638166 31.200618 31.200618 0 0 1 10.152975-34.826681c9.691476-5.694566 20.948751 0.62632 25.044553 14.108679a128.692248 128.692248 0 0 0 18.27865 37.72753 90.173577 90.173577 0 0 0 27.129539 25.415401 63.975277 63.975277 0 0 0 66.488798 0 90.907031 90.907031 0 0 0 27.129539-25.415401 128.618079 128.618079 0 0 0 18.27865-37.719289c4.120525-13.482359 15.353078-19.778522 25.044553-14.108679a31.200618 31.200618 0 0 1 10.152975 34.826681 187.895957 187.895957 0 0 1-26.478496 54.638166 130.002575 130.002575 0 0 1-39.29333 36.812774 93.947978 93.947978 0 0 1-48.07829 13.474118"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
    </Svg>
  );
};

IconPolygonTwo.defaultProps = {
  size: 18,
};

export default IconPolygonTwo;
