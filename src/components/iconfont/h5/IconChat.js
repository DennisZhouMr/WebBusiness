/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconChat = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M830.224 0.48H192.304A171.968 171.968 0 0 0 18.384 169.376v509.888a171.968 171.968 0 0 0 173.92 168.896h30.592v143.008a31.232 31.232 0 0 0 17.568 27.968 32.48 32.48 0 0 0 14.848 3.552 33.312 33.312 0 0 0 18.848-5.824l242.624-168.544h313.6a172 172 0 0 0 173.92-168.896V169.376A172.16 172.16 0 0 0 830.256 0.48z m-306.752 608.48a21.856 21.856 0 0 1-24.544 0.224c-48.512-32.512-224-157.024-224-261.664 0-87.296 58.528-126.912 130.656-126.912a132.192 132.192 0 0 1 90.048 35.2 22.624 22.624 0 0 0 31.04 0 131.648 131.648 0 0 1 90.048-35.2 128.864 128.864 0 0 1 130.656 126.912c0 99.968-175.744 228.128-224 261.44z m0 0"
        fill={getIconColor(color, 0, '#434343')}
      />
    </svg>
  );
};

IconChat.defaultProps = {
  size: 18,
};

export default IconChat;
