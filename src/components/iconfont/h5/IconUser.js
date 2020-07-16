/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconUser = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M737.8 548.2c-52.1 73.6-133.5 121.2-225.3 121.2-91.8 0-173.2-47.6-225.3-121.2-36 28.3-59.4 71.8-59.4 121.2v103.5c0 85.8 69.5 155.3 155.3 155.3h258.8c85.8 0 155.3-69.5 155.3-155.3V669.4c0-49.4-23.4-92.9-59.4-121.2z m-225.3 69.4c128.7 0 233-115.9 233-258.8 0-143-104.3-258.8-233-258.8s-233 115.9-233 258.8 104.3 258.8 233 258.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconUser.defaultProps = {
  size: 18,
};

export default IconUser;
