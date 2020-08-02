/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconTuiguangmoren = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M967.448598 290.246778L589.935053 24.591809a134.840207 134.840207 0 0 0-155.211397 0L57.210111 290.246778A135.010983 135.010983 0 0 0 0 400.519572v488.518238a134.791414 134.791414 0 0 0 134.791414 134.840207h755.051485A134.81581 134.81581 0 0 0 1024.658709 889.062207V400.568365a135.03538 135.03538 0 0 0-57.210111-110.321587z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <path
        d="M552.778977 821.678698a40.449622 40.449622 0 1 1-80.899245 0v-215.641865a40.449622 40.449622 0 0 1 80.899245 0z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

IconTuiguangmoren.defaultProps = {
  size: 18,
};

export default IconTuiguangmoren;
