/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconLianhe101 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M668.819394 1016.242424h-1.784242l-6.857697-0.155151a129.334303 129.334303 0 0 1-92.299637-41.006546 129.349818 129.349818 0 0 1 6.206061-182.799515 31.511273 31.511273 0 0 1 43.814788 1.101576 31.495758 31.495758 0 0 1-0.372364 44.559515 67.61503 67.61503 0 0 0-21.47297 48.298667 68.359758 68.359758 0 0 0 69.476849 66.947878h7.214545a77.575758 77.575758 0 0 0 49.369212-20.759272l62.572606-60.307394a67.754667 67.754667 0 0 0 21.426425-48.391758 63.317333 63.317333 0 0 0-20.169697-47.181576 31.542303 31.542303 0 0 1-1.132606-44.57503 31.542303 31.542303 0 0 1 44.590545-1.132606 126.262303 126.262303 0 0 1 39.827394 93.835636 130.59103 130.59103 0 0 1-40.897939 92.935758l-62.557091 60.260849a139.838061 139.838061 0 0 1-96.287031 38.4zM28.772848 982.884848c0-203.605333 128.558545-376.071758 305.648485-432.314181a293.686303 293.686303 0 0 1-137.541818-248.692364A294.136242 294.136242 0 0 1 490.969212 7.757576a294.120727 294.120727 0 0 1 294.136243 294.120727 294.151758 294.151758 0 0 1-294.120728 294.151758 299.442424 299.442424 0 0 1-32.023272-1.815273c-202.441697 0.310303-367.166061 173.769697-367.166061 388.67006a31.511273 31.511273 0 0 1-31.511273 31.511273A31.526788 31.526788 0 0 1 28.772848 982.884848z m230.974061-680.99103a231.175758 231.175758 0 0 0 231.175758 231.098182 231.175758 231.175758 0 0 0 231.175757-231.175758v-0.077575a231.175758 231.175758 0 0 0-231.175757-231.098182 231.175758 231.175758 0 0 0-231.175758 231.253333z m439.187394 516.561455a126.262303 126.262303 0 0 1-39.858424-93.820121 130.699636 130.699636 0 0 1 41.037576-93.09091l63.115636-59.981575a140.691394 140.691394 0 0 1 192.279273-1.179152 127.937939 127.937939 0 0 1 39.718788 93.385697 130.637576 130.637576 0 0 1-40.991031 94.161455 31.495758 31.495758 0 0 1-43.442424-1.055031 31.511273 31.511273 0 0 1 0-44.559515 67.770182 67.770182 0 0 0 21.47297-48.950303 64.868848 64.868848 0 0 0-20.045576-47.197091 77.575758 77.575758 0 0 0-105.332364 0.977455l-63.286303 60.121212a67.754667 67.754667 0 0 0-21.426424 48.360727 63.45697 63.45697 0 0 0 20.169697 47.150546 31.526788 31.526788 0 0 1 1.148121 44.57503 31.449212 31.449212 0 0 1-22.869333 9.805576 31.387152 31.387152 0 0 1-21.690182-8.704z"
        fill={getIconColor(color, 0, '#434343')}
      />
    </svg>
  );
};

IconLianhe101.defaultProps = {
  size: 18,
};

export default IconLianhe101;