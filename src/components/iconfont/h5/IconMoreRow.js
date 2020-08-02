/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMoreRow = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M253.16864 517.36064m-82.16064 0a80.235 80.235 0 1 0 164.32128 0 80.235 80.235 0 1 0-164.32128 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M520.192 517.36064m-82.16064 0a80.235 80.235 0 1 0 164.32128 0 80.235 80.235 0 1 0-164.32128 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M787.21536 517.36064m-82.16064 0a80.235 80.235 0 1 0 164.32128 0 80.235 80.235 0 1 0-164.32128 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

IconMoreRow.defaultProps = {
  size: 18,
};

export default IconMoreRow;
