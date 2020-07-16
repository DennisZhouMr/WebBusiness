/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconZu1607 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1086 1024" width={size} height={size} {...rest}>
      <Path
        d="M727.125398 381.806823a38.558504 38.558504 0 0 1-33.512257-19.952085 174.160222 174.160222 0 0 0-304.560424 0 38.558504 38.558504 0 0 1-33.512257 19.952085h-3.157139a38.170331 38.170331 0 0 1-33.382866-56.621481 253.243973 253.243973 0 0 1 444.613192 0 38.196209 38.196209 0 0 1-33.382866 56.621481z m0 0"
        fill={getIconColor(color, 0, '#229E8E')}
      />
      <Path
        d="M1001.874147 501.648724v-42.90604a458.742684 458.742684 0 0 0-917.485368 0v43.656507A119.039677 119.039677 0 0 0 0 615.900935v165.930958a35.168461 35.168461 0 0 0 0.56932 5.744958v56.543846a109.309477 109.309477 0 0 0 109.438868 109.438868h59.390447v34.340359a34.935557 34.935557 0 1 0 69.871115 0v-34.340359h597.786201v35.504878a34.935557 34.935557 0 1 0 69.871115 0v-35.504878h70.440435a109.309477 109.309477 0 0 0 109.464746-109.438868v-228.789082a119.039677 119.039677 0 0 0-84.9581-113.682891z m15.138742 279.484458v62.884003a39.257215 39.257215 0 0 1-39.593632 39.593631H110.008188a39.257215 39.257215 0 0 1-39.567753-39.593631v-138.551832h-0.595199v-89.667931a49.4791 49.4791 0 0 1 98.958201 0v141.476068a34.935557 34.935557 0 0 0 69.871114 0v-141.476068a119.039677 119.039677 0 0 0-84.414657-113.501743v-43.656508a388.871569 388.871569 0 1 1 777.769017 0v43.242456a119.039677 119.039677 0 0 0-83.845338 113.346475v141.476068a34.935557 34.935557 0 0 0 69.871115 0v-141.476068a49.4791 49.4791 0 0 1 98.958201 0v165.90508z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconZu1607.defaultProps = {
  size: 18,
};

export default IconZu1607;