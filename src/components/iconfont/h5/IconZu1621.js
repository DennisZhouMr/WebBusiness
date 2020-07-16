/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZu1621 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1394 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M158.896552 176.551724m264.827586 0l706.206896 0q264.827586 0 264.827587 264.827586l0 0q0 264.827586-264.827587 264.827587l-706.206896 0q-264.827586 0-264.827586-264.827587l0 0q0-264.827586 264.827586-264.827586Z"
        fill={getIconColor(color, 0, '#C3C3C3')}
      />
      <path
        d="M512 441.37931m-353.103448 0a353.103448 353.103448 0 1 0 706.206896 0 353.103448 353.103448 0 1 0-706.206896 0Z"
        fill={getIconColor(color, 1, '#FDD000')}
      />
    </svg>
  );
};

IconZu1621.defaultProps = {
  size: 18,
};

export default IconZu1621;
