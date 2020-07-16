/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMore = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 128m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill={getIconColor(color, 0, '#C3C3C3')}
      />
      <path
        d="M512 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill={getIconColor(color, 1, '#C3C3C3')}
      />
      <path
        d="M512 896m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#C3C3C3')}
      />
    </svg>
  );
};

IconMore.defaultProps = {
  size: 18,
};

export default IconMore;
