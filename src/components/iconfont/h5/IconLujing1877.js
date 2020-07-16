/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconLujing1877 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M992.758222 337.690976C916.896985 117.969343 677.737104-28.789435 447.445923 4.776255 205.908327 31.538559 4.878653 250.930435 1.181915 494.203589-12.45957 736.93872 172.151726 969.607615 410.773584 1013.586652a511.468919 511.468919 0 0 0 581.949927-675.878321zM750.005735 462.199901l-175.482261 165.034203a14.99522 14.99522 0 0 1-25.252368-10.91666v-75.826525c-47.276598-7.393477-226.889487-19.78536-250.961675 212.362867 0 0-154.811767-362.731605 250.961675-396.817963v-69.786784a14.99522 14.99522 0 0 1 25.252368-10.916659l175.482261 165.034202a14.99522 14.99522 0 0 1 0 21.833319z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </svg>
  );
};

IconLujing1877.defaultProps = {
  size: 18,
};

export default IconLujing1877;
