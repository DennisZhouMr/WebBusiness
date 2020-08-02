/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconHuiyuanliebiansuoxiaodeng = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1160 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M661.372556 320.096273h498.735751v383.850242H661.372556v320.053485L0 512 661.372556 0z"
        fill={getIconColor(color, 0, '#FB8618')}
      />
    </svg>
  );
};

IconHuiyuanliebiansuoxiaodeng.defaultProps = {
  size: 18,
};

export default IconHuiyuanliebiansuoxiaodeng;
