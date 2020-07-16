/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconTriangle = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1170 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M585.142857 1024L0 0h1170.285714z"
        fill={getIconColor(color, 0, '#434343')}
      />
    </svg>
  );
};

IconTriangle.defaultProps = {
  size: 18,
};

export default IconTriangle;
