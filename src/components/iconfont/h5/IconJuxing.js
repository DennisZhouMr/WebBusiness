/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconJuxing = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 2224 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M321.712 39.992h1670.4a159.944 159.944 0 0 1 159.872 160v560a159.936 159.936 0 0 1-159.872 160H151.984a80 80 0 0 1-77.8-98.4l169.728-720a79.952 79.952 0 0 1 77.8-61.6z"
        fill={getIconColor(color, 0, '#434343')}
      />
    </svg>
  );
};

IconJuxing.defaultProps = {
  size: 18,
};

export default IconJuxing;
