/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconCheck = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M380.343 758.97933334a53.394 53.394 0 0 1-36.572-16.092L125.44 525.65333334a55.589 55.589 0 0 1 0-77.166 54.126 54.126 0 0 1 76.8 0l178.103 179.2L835.29 229.42433334a53.394 53.394 0 0 1 76.435 0 54.126 54.126 0 0 1 0 76.8L418.743 742.88733334a54.491 54.491 0 0 1-38.4 16.092z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconCheck.defaultProps = {
  size: 18,
};

export default IconCheck;
