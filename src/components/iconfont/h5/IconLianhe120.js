/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconLianhe120 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1143 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d=""
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconLianhe120.defaultProps = {
  size: 18,
};

export default IconLianhe120;
