/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXiaofeirenshu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M266.720914 245.279086A245.311232 245.311232 0 1 0 512 0a245.311232 245.311232 0 0 0-245.279086 245.279086z"
        fill={getIconColor(color, 0, '#434343')}
      />
      <path
        d="M512 601.014127a329.214039 329.214039 0 0 0 253.958687-119.231996 258.105607 258.105607 0 0 1 67.508005 172.048973v207.281723c0 155.268412-143.920638 162.855026-321.466692 162.855026s-321.466692-7.554467-321.466692-162.855026v-207.281723a258.1699 258.1699 0 0 1 67.508005-172.048973 329.214039 329.214039 0 0 0 253.958687 119.231996z"
        fill={getIconColor(color, 1, '#434343')}
      />
    </svg>
  );
};

IconXiaofeirenshu.defaultProps = {
  size: 18,
};

export default IconXiaofeirenshu;
