/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZu1770 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 1024.017356a512 512 0 1 1 512-512 512.572746 512.572746 0 0 1-512 512z m0-954.576271a442.576271 442.576271 0 1 0 442.576271 442.576271 443.096949 443.096949 0 0 0-442.576271-442.576271z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <path
        d="M665.391729 494.592a117.482305 117.482305 0 0 0-118.471593 118.488949c0 69.701424 55.76461 111.511864 118.471593 111.511865a117.447593 117.447593 0 0 0 118.488949-118.471594c0-69.701424-48.787525-111.52922-118.488949-111.52922z m34.868068 153.339661a46.583322 46.583322 0 0 1-69.701424 0c-13.884746-20.827119-13.884746-55.76461 0-69.684068a49.290847 49.290847 0 1 1 69.701424 69.684068z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <path
        d="M477.288136 417.930847a122.133695 122.133695 0 0 0-118.48895-118.471593 113.438373 113.438373 0 0 0-118.488949 118.471593 122.133695 122.133695 0 0 0 118.488949 118.48895 117.482305 117.482305 0 0 0 118.48895-118.48895z m-160.316746 34.868068a46.583322 46.583322 0 0 1 0-69.701423c20.913898-20.913898 55.76461-20.913898 69.701424 0a49.290847 49.290847 0 0 1-69.701424 69.701423z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <path
        d="M686.305627 306.418983a32.837424 32.837424 0 0 0-41.810441 6.942373L330.873492 675.787932a29.973695 29.973695 0 0 0 48.787525 34.833356L693.265356 348.212068a32.802712 32.802712 0 0 0-6.959729-41.793085z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
    </svg>
  );
};

IconZu1770.defaultProps = {
  size: 18,
};

export default IconZu1770;
