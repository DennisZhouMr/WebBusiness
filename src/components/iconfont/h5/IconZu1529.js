/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZu1529 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M878.61034 260.432499h-25.608141L812.519867 67.681398A85.124069 85.124069 0 0 0 713.288319 1.514254L199.496228 95.033807a86.484981 86.484981 0 0 0-55.318186 35.939569 92.005299 92.005299 0 0 0-14.260821 64.442045l11.979856 65.572943A143.221582 143.221582 0 0 0 4.464162 404.133275v476.702455a142.876562 142.876562 0 0 0 142.569878 143.144911h729.333671a142.876562 142.876562 0 0 0 143.144911-142.608214V403.558242a142.014012 142.014012 0 0 0-140.902282-143.125743zM191.503268 163.481915a26.240678 26.240678 0 0 1 18.247717-11.500662L722.987211 58.4617a28.425804 28.425804 0 0 1 33.064404 21.678749l38.124696 181.422948H200.646294L186.385473 185.735697a29.039172 29.039172 0 0 1 5.117795-22.253782z m761.784706 575.35897H752.65892a96.988919 96.988919 0 0 1 0-193.881999h200.629054z m0-330.394861v83.207292H750.512129a150.831187 150.831187 0 1 0 0 301.662373h202.775845v83.207292a83.686486 83.686486 0 0 1-83.552312 83.820661H155.678705a83.686486 83.686486 0 0 1-83.820661-83.552312V408.446024a83.686486 83.686486 0 0 1 83.590647-83.782326H869.505649a83.686486 83.686486 0 0 1 83.782325 83.590648z"
        fill={getIconColor(color, 0, '#229E8E')}
      />
      <path
        d="M726.322403 641.81363a37.108804 37.108804 0 1 0 37.127971-37.108803 37.779676 37.779676 0 0 0-37.127971 37.108803z"
        fill={getIconColor(color, 1, '#229E8E')}
      />
    </svg>
  );
};

IconZu1529.defaultProps = {
  size: 18,
};

export default IconZu1529;