/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconZu1609 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1157 1024" width={size} height={size} {...rest}>
      <Path
        d="M934.863687 0H222.615466A222.615466 222.615466 0 0 0 0 222.587905v489.770562a222.615466 222.615466 0 0 0 222.615466 222.615467h229.285386l99.056579 79.23975a44.484507 44.484507 0 0 0 55.674538 0l99.056578-79.23975h229.17514a222.615466 222.615466 0 0 0 222.615466-222.615467V222.587905A222.615466 222.615466 0 0 0 934.863687 0z m133.563767 712.358467a133.591329 133.591329 0 0 1-133.563767 133.563768h-244.885281a44.37426 44.37426 0 0 0-27.809708 9.784386l-83.484245 66.781884-83.484245-66.781884a44.37426 44.37426 0 0 0-27.809707-9.784386H222.50522a133.591329 133.591329 0 0 1-133.563768-133.563768V222.587905A133.563767 133.563767 0 0 1 222.50522 89.024137h712.358467a133.563767 133.563767 0 0 1 133.563767 133.563768z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M756.870536 601.036953H267.127535a44.512069 44.512069 0 0 0 0 89.051699h489.743001a44.512069 44.512069 0 1 0 0-89.051699z"
        fill={getIconColor(color, 1, '#229E8E')}
      />
      <Path
        d="M267.127535 511.985255h356.28948a44.512069 44.512069 0 1 0 0-89.024138H267.127535a44.512069 44.512069 0 1 0 0 89.024138z"
        fill={getIconColor(color, 2, '#229E8E')}
      />
      <Path
        d="M868.19205 244.85772H267.127535a44.53963 44.53963 0 0 0 0 89.051699H868.19205a44.53963 44.53963 0 0 0 0-89.051699z"
        fill={getIconColor(color, 3, '#229E8E')}
      />
    </Svg>
  );
};

IconZu1609.defaultProps = {
  size: 18,
};

export default IconZu1609;