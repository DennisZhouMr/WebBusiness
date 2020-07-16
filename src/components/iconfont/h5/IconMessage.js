/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMessage = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M 514.046 83.225 C 264.611 83.225 62.39 259.06 62.39 475.97 c 0 126.983 69.315 239.88 176.826 311.67 l -0.091 165.8 l 147.634 -100.546 c 40.373 10.293 83.087 15.821 127.287 15.821 c 249.436 0 451.656 -175.834 451.656 -392.745 c 0 -216.91 -202.219 -392.744 -451.655 -392.744 Z m 0 746.215 c -49.117 0 -96.223 -7.365 -139.91 -20.87 l -35.366 29.472 c 0.683 0.25 1.368 0.49 2.053 0.74 l -61.792 43.855 l -0.633 -80.507 v -36.051 c -106.832 -63.875 -176.735 -169.99 -176.735 -290.109 c 0 -195.222 184.636 -353.47 412.382 -353.47 s 412.382 158.248 412.382 353.47 c 0.001 195.223 -184.636 353.47 -412.38 353.47 Z"
        fill={getIconColor(color, 0, '#8a8a8a')}
      />
      <path
        d="M 232.421 474.452 a 51.024 51.024 0 1 0 104.426 0 a 51.024 51.024 0 1 0 -104.426 0 Z M 463.576 474.452 a 51.024 51.024 0 1 0 104.426 0 a 51.024 51.024 0 1 0 -104.426 0 Z M 694.731 474.452 a 51.024 51.024 0 1 0 104.427 0 a 51.024 51.024 0 1 0 -104.427 0 Z"
        fill={getIconColor(color, 1, '#8a8a8a')}
      />
    </svg>
  );
};

IconMessage.defaultProps = {
  size: 18,
};

export default IconMessage;
