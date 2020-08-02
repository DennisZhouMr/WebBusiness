/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconExport = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1101 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1055.875272 229.678127L782.953577 18.69025a86.955082 86.955082 0 0 0-140.108062 68.815355v58.437999A454.731862 454.731862 0 0 0 198.9039 608.190102a503.425607 503.425607 0 0 0 24.773528 154.146394 447.134647 447.134647 0 0 1 419.140561-308.292787v55.437649a86.955082 86.955082 0 0 0 140.108061 68.815354l273.059327-210.987876a86.955082 86.955082 0 0 0 0-137.630709z m0 0"
        fill={getIconColor(color, 0, '#434343')}
      />
      <path
        d="M881.772425 1022.623693H218.777775a218.805301 218.805301 0 0 1-218.777775-218.777775V310.687562a218.805301 218.805301 0 0 1 218.777775-218.777775h64.411172a62.401763 62.401763 0 0 1 62.456815 62.456816 62.401763 62.401763 0 0 1-62.456815 62.456816h-64.411172a93.974248 93.974248 0 0 0-94.001774 94.001774v493.158356a93.974248 93.974248 0 0 0 94.001774 94.001774h662.85702a93.974248 93.974248 0 0 0 94.001774-94.001774v-171.405285a62.401763 62.401763 0 0 1 62.456816-62.456816 62.401763 62.401763 0 0 1 62.456815 62.456816v171.405285a218.777775 218.777775 0 0 1-218.777775 218.66767z m0 0"
        fill={getIconColor(color, 1, '#434343')}
      />
    </svg>
  );
};

IconExport.defaultProps = {
  size: 18,
};

export default IconExport;