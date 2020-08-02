/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconLujing1016 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1494 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M268.210278 210.731246L0 466.825753l557.174247 557.174247L1494.360307 0.018901l-848.670998 584.61902z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconLujing1016.defaultProps = {
  size: 18,
};

export default IconLujing1016;
