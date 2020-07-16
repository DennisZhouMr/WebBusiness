/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconRight = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M235.632529 995.240862a97.715112 97.715112 0 0 1 0-138.162968l345.127945-345.17876L235.632529 166.771189A97.715112 97.715112 0 0 1 373.795497 28.60822l412.202281 412.253095c0.711394 0.660581 1.524417 1.067092 2.184998 1.778486a98.172437 98.172437 0 0 1 0 138.518666c-0.660581 0.660581-1.524417 1.117906-2.184998 1.778487l-412.253095 412.253094a97.715112 97.715112 0 0 1-138.112154 0.050814z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconRight.defaultProps = {
  size: 18,
};

export default IconRight;
