/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZujian471 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M651.349333 752.7424a52.1216 52.1216 0 0 0 0-73.693867L467.234133 494.933333l184.1152-184.1152a52.104533 52.104533 0 1 0-73.693866-73.693866L357.700267 457.028267c-0.375467 0.341333-0.8192 0.580267-1.1776 0.955733a52.360533 52.360533 0 0 0 0 73.898667c0.3584 0.3584 0.802133 0.597333 1.160533 0.955733l219.904 219.904a52.1216 52.1216 0 0 0 73.762133 0z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

IconZujian471.defaultProps = {
  size: 18,
};

export default IconZujian471;
